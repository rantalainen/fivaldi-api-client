import got, { Method, OptionsOfJSONResponseBody } from 'got';
import { IFivaldiApiClientOptions } from './interfaces';
import { UtilsMethods } from './methods/utils.methods';
import { BookkeepingMethods } from './methods/bookkeeping.methods';
import { ProductMethods } from './methods/product.methods';
import { getHeaders } from './signature';
import * as fs from 'fs';

export class FivaldiApiClient {
  options: IFivaldiApiClientOptions;

  readonly utils: UtilsMethods;
  readonly bookkeeping: BookkeepingMethods;
  readonly products: ProductMethods;

  constructor(options: IFivaldiApiClientOptions) {
    options.apiBaseUrl = options.apiBaseUrl || 'https://api.fivaldi.net/customer/api';

    if (!options?.partnerId) {
      throw new Error('missing options.partnerId');
    }

    if (!options?.partnerSecret) {
      throw new Error('missing options.partnerSecret');
    }

    this.options = options;

    this.bookkeeping = new BookkeepingMethods(this);
    this.utils = new UtilsMethods(this);
    this.products = new ProductMethods(this);
  }

  async request(method: Method, url: string, body?: any, params?: any): Promise<any> {
    // If there are search parameters, include them in the url
    if (params) {
      url += '?' + new URLSearchParams(params).toString();
    }

    const gotOptions: OptionsOfJSONResponseBody = {
      method,
      url,
      headers: await getHeaders(this.options.partnerId, this.options.partnerSecret, method, url, body)
    };

    // If body is defined
    if (body) {
      gotOptions.body = JSON.stringify(body);
    }

    fs.writeFileSync('./request.json', JSON.stringify(gotOptions));

    const result: any = await got({ ...gotOptions });

    if (result.statusCode == 401 || result.statusCode == 403) throw new Error(`HTTP error: ${result.statusCode} ${result.statusMessage}`);
    if (result.statusCode == 400 || result.statusCode == 404 || result.statusCode == 409)
      throw new Error(`HTTP error: ${result.statusCode} ${result.statusMessage} (${result.body.message})`);

    return result.body;

    // const response: any = JSON.parse(result.body);
  }

  setCuid(cuid: string): void {
    this.options.cuid = cuid;
  }
}
