import got, { Method, OptionsOfJSONResponseBody } from 'got';
import { IFivaldiApiClientOptions, IGetCompaniesParams, IGetCompaniesResponse } from './interfaces';
import { ArchiveMethods } from './methods/archive.methods';
import { BookkeepingMethods } from './methods/bookkeeping.methods';
import { ChartOfAccountsMethods } from './methods/chart-of-accounts.methods';
import { CustomersMethods } from './methods/customers.methods';
import { ProductMethods } from './methods/products.methods';
import { PurchaseInvoicesMethods } from './methods/purchaseInvoices.methods';
import { SalesMethods } from './methods/sales.methods';
import { getHeaders } from './signature';

export class FivaldiApiClient {
  options: IFivaldiApiClientOptions;

  readonly bookkeeping: BookkeepingMethods;
  readonly products: ProductMethods;
  readonly purchaseInvoices: PurchaseInvoicesMethods;
  readonly chartOfAccounts: ChartOfAccountsMethods;
  readonly archive: ArchiveMethods;
  readonly sales: SalesMethods;
  readonly customers: CustomersMethods;

  constructor(options: IFivaldiApiClientOptions) {
    options.apiBaseUrl = options.apiBaseUrl || 'https://api.fivaldi.net/customer/api';
    options.timeout = options.timeout || 120000;

    if (!options?.partnerId) {
      throw new Error('missing options.partnerId');
    }

    if (!options?.partnerSecret) {
      throw new Error('missing options.partnerSecret');
    }

    this.options = options;

    this.bookkeeping = new BookkeepingMethods(this);
    this.products = new ProductMethods(this);
    this.purchaseInvoices = new PurchaseInvoicesMethods(this);
    this.chartOfAccounts = new ChartOfAccountsMethods(this);
    this.archive = new ArchiveMethods(this);
    this.sales = new SalesMethods(this);
    this.customers = new CustomersMethods(this);
  }

  async request(method: Method, url: string, body?: any, params?: any): Promise<any> {
    // If there are search parameters, include them in the url
    if (params) {
      url += '?' + new URLSearchParams(params).toString();
    }
    console.log(`Sending '${method}' request to '${url}'`);

    const gotOptions: OptionsOfJSONResponseBody = {
      method,
      url,
      headers: await getHeaders(this.options.partnerId, this.options.partnerSecret, method, url, body),
      timeout: this.options.timeout,
      throwHttpErrors: false
    };

    // If body is defined, add the body to the request
    if (body) {
      gotOptions.body = JSON.stringify(body);
    }

    const result: any = await got({ ...gotOptions });

    let response: any;
    // If there is a body, parse and return it
    try {
      response = JSON.parse(result.body);
    } catch (e) {
      // Else just return the original body
      response = result.body;
    }

    // If the status code is between 200 and 299 (=OK)
    if (result.statusCode >= 200 && result.statusCode < 300) {
      return response;
    }

    // Else, throw error with error response included
    throw new Error(`Fivaldi HTTP Error: ${result.statusCode} ${result.statusMessage}
    ${JSON.stringify(response)}`);
  }

  /** Set CUID of the company. CUID is required for all methods except root methods. */
  setCuid(cuid: string): string {
    this.options.cuid = cuid;
    return this.options.cuid;
  }

  /** Returns the currently active CUID */
  getCuid() {
    return this.options.cuid;
  }

  async getPing(): Promise<any> {
    return await this.request('GET', `${this.options.apiBaseUrl}/ping`);
  }

  /** Get list of customers */
  async getCustomers(): Promise<IGetCompaniesResponse[]> {
    return await this.request('GET', `${this.options.apiBaseUrl}/customers`);
  }

  /** Get list of companies this partner id has access to. Useful for getting CUIDs of companies. */
  async getCompanies(params: IGetCompaniesParams): Promise<any> {
    return await this.request('GET', `${this.options.apiBaseUrl}/companies`, null, params);
  }
}
