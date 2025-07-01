import { ApiConfig } from './api';
import CacheableLookup from 'cacheable-lookup';
import https from 'https';

export interface FivaldiApiClientOptions {
  /** Partner ID that you get from Fivaldi */
  partnerId: string;
  /** Partner secret that you get from Fivaldi */
  partnerSecret: string;
}

export interface FivaldiApiClientConfig extends ApiConfig<any> {
  /** API base url, by default: `https://api.fivaldi.net/customer/api`. */
  baseURL?: string;
  /** Request timeout in milliseconds, defaults to 120000 (120 secs) */
  timeout?: number;
  /** Instance of `https.Agent` or `true` to enable internal Keep Alive Agent, defaults to `true` */
  keepAliveAgent?: boolean | https.Agent;
  /** Instance of `cacheable-lookup` or `true` to enable internal DNS cache, defaults to `true` */
  dnsCache?: boolean | CacheableLookup;
}
