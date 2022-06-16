export interface IFivaldiApiClientOptions {
  /** Fivaldi partner ID for authentication */
  partnerId: string;

  /** Fivaldi parnter secret for authentication */
  partnerSecret: string;

  /** Fivaldi customer's cuid */
  cuid?: string;

  /** API base url, 'https://api.fivaldi.net/customer/api' by default */
  apiBaseUrl?: string;

  /** Request timeout, defaults to 120000 (120 secs) */
  timeout?: number;
}

export interface IGetCompaniesParams {
  /** Search by business id (Y-tunnus) */
  businessId?: string;
  /** Search by Fivaldi customer id */
  customerId?: string;
  /** Filter fields of the response objects, only ones provided will be included */
  fields?: string;
}

export interface IGetCompaniesResponse {
  customerId: string;
  name1: string;
  name2: string;
  businessId: string;
}
