export interface IFivaldiApiClientOptions {
  /** Fivaldi partner ID for authentication */
  partnerId: string;

  /** Fivaldi parnter secret for authentication */
  partnerSecret: string;

  /** Fivaldi customer's cuid */
  cuid?: string;

  /** API base url, 'https://api.fivaldi.net/customer/api' by default */
  apiBaseUrl?: string;
}
