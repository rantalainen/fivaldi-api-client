import { Api, ApiConfig } from './api';
import { AxiosRequestConfig } from 'axios';
import { HttpsAgent } from 'agentkeepalive';
import { FivaldiApiClientConfig, FivaldiApiClientOptions } from './interfaces';
import { FileBuffer } from './file-buffer';
import https from 'https';
import CacheableLookup from 'cacheable-lookup';
import FormData from 'form-data';

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

  constructor(options: FivaldiApiClientOptions, config: FivaldiApiClientConfig = {}) {
    // Set default config
    config.baseURL = config.baseURL || 'hhttps://api.fivaldi.net/customer/api';
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

    // Initialize Example Api Client Instance
    this.api = new FivaldiApiClientInstance({
      ...this.config,
      securityWorker: this.config.securityWorker || this.securityWorker
    });
    this.api.setSecurityData(this);

    // Install axios error handler
    this.installErrorHandler();
  }

  private installErrorHandler() {
    this.api.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        error.message = `HTTP error ${error.response.status} (${error.response.statusText}): ` + JSON.stringify(error.response.data);
        throw error;
      }
    );
  }

  private async securityWorker(fivaldi: FivaldiApiClient) {
    const axiosRequestConfig: AxiosRequestConfig = {};

    axiosRequestConfig.headers = {
      Authorization: ''
    };

    return axiosRequestConfig;
  }
}

class FivaldiApiClientInstance extends Api<any> {
  constructor(config?: ApiConfig<any>) {
    super(config);
  }

  // Override createFormData because FormData needs to be imported manually
  protected createFormData(input: Record<string, unknown>): any {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof FileBuffer;

        if (isFileType) {
          formData.append(key, formItem.buffer, {
            filename: formItem.name,
            contentType: formItem.type
          });
        } else {
          formData.append(key, this.stringifyFormItem(formItem));
        }
      }

      return formData;
    }, new FormData());
  }

  helpers = {};
}
