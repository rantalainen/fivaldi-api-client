import { Api, ApiConfig } from './api';
import { addAuthHeaders } from './signature';
import { RateLimiter } from './rate-limiter';
import { FivaldiApiClientConfig, FivaldiApiClientOptions } from './interfaces';
import { InternalAxiosRequestConfig } from 'axios';
import { HttpsAgent } from 'agentkeepalive';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';

// DNS cache to prevent ENOTFOUND and other such issues
const dnsCache = new CacheableLookup();
let dnsCacheInstalled = false;

// https://learn.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
// https://github.com/MicrosoftDocs/azure-docs/issues/29600#issuecomment-607990556
const httpsAgent = new HttpsAgent({
  maxSockets: 32,
  maxFreeSockets: 10,
  timeout: 30000,
  freeSocketTimeout: 4500,
  socketActiveTTL: 60000
});

export class FivaldiApiClient {
  options: FivaldiApiClientOptions;
  config: Omit<FivaldiApiClientConfig, 'keepAliveAgent' | 'dnsCache'>;
  readonly api: FivaldiApiClientInstance;
  private rateLimiter: RateLimiter;

  constructor(options: FivaldiApiClientOptions, config: FivaldiApiClientConfig = {}) {
    // Set config or use default values
    config.baseURL = config.baseURL || 'https://api.fivaldi.net/customer/api';
    // Make sure that the base URL does not end with a slash
    if (config.baseURL.endsWith('/')) config.baseURL = config.baseURL.slice(0, -1);

    config.timeout = config.timeout || 120000;

    if (!options.partnerId || !options.partnerSecret) {
      throw new Error('FivaldiApiClient requires partnerId and partnerSecret options.');
    }

    // If axios config httpsAgent is not set
    if (!config.httpsAgent) {
      // Use internal keepAliveAgent by default
      if (config.keepAliveAgent === true || config.keepAliveAgent === undefined) {
        config.httpsAgent = httpsAgent;
      } else {
        if (config.keepAliveAgent === false) {
          config.httpsAgent = new https.Agent({ keepAlive: false });
        } else {
          config.httpsAgent = config.keepAliveAgent;
        }
      }
    }

    // Use internal dnsCache by default
    if (config.dnsCache === true || config.dnsCache === undefined) {
      if (!dnsCacheInstalled) {
        dnsCache.install(config.httpsAgent);
        dnsCacheInstalled = true;
      }
    }

    // Delete custom properties before config is assigned
    delete config.keepAliveAgent;
    delete config.dnsCache;

    this.options = options;
    this.config = config;

    // Initialize rate limiter with default values (will be updated from API responses)
    this.rateLimiter = new RateLimiter(options.replenishRate, options.burstCapacity);

    // Initialize Fivaldi Api Client Instance
    this.api = new FivaldiApiClientInstance({
      ...this.config
    });

    // Install rate limiter interceptor
    this.installRateLimiter();

    // Install axios error handler
    this.installErrorHandler();

    // Install security worker
    this.installRequestSigner();
  }

  // Create a rate limiter interceptor that waits for tokens before allowing requests
  private installRateLimiter() {
    this.api.instance.interceptors.request.use(async (axiosRequestConfig: InternalAxiosRequestConfig) => {
      // Wait for rate limiter to allow the request
      await this.rateLimiter.waitUntilAvailable();
      return axiosRequestConfig;
    });
  }

  // Create a custom security worker installer that adds the Authorization header to every request
  private installRequestSigner() {
    this.api.instance.interceptors.request.use(async (axiosRequestConfig: InternalAxiosRequestConfig) => {
      // Call the auth function to get the auth headers
      const authHeaders = await addAuthHeaders(this.options.partnerId, this.options.partnerSecret, axiosRequestConfig);
      // Add auth headers to the request config
      Object.entries(authHeaders).forEach(([key, value]) => {
        axiosRequestConfig.headers.set(key, value);
      });

      return axiosRequestConfig;
    });
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => {
        // Update rate limiter from response headers
        if (response.headers) {
          this.rateLimiter.updateFromHeaders(response.headers as Record<string, string | number>);
        }
        return response;
      },
      (error) => {
        // Update rate limiter from error response headers if available
        if (error.response?.headers) {
          this.rateLimiter.updateFromHeaders(error.response.headers as Record<string, string | number>);
        }

        if (error.response) {
          error.message =
            `Fivaldi HTTP error ${error.response.status} (${error.response.statusText}): ` + JSON.stringify(error.response.data);
        }

        throw error;
      }
    );
  }
}

class FivaldiApiClientInstance extends Api<any> {
  constructor(config?: ApiConfig<any>) {
    super(config);
  }

  // If you need to add custom methods or properties, do it here
  helpers = {};
}
