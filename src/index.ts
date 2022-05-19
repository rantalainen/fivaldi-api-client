import got, { Method, OptionsOfJSONResponseBody } from 'got';
import { IFivaldiApiClientOptions } from './interfaces';
import { BookkeepingMethods } from './methods/bookkeeping.methods';

export class FivaldiApiClient {
  options: IFivaldiApiClientOptions;

  readonly bookkeeping: BookkeepingMethods;

  constructor(options: IFivaldiApiClientOptions) {
    options.apiBaseUrl = options.apiBaseUrl || 'https:/fivaldi-api';

    if (!options?.token) {
      throw new Error('missing options.token');
    }

    this.options = options;

    this.bookkeeping = new BookkeepingMethods(this);
  }

  async request(method: Method, url: string, body?: any, params?: any): Promise<any> {
    const gotOptions: OptionsOfJSONResponseBody = {
      method,
      url
    };

    // If body is defined
    if (body) {
      gotOptions.body = body;
    }

    // If params is defined
    if (params) {
      gotOptions.searchParams = params;
    }

    console.log(gotOptions);

    return;

    const result: any = await got({ ...gotOptions });
    const response: any = JSON.parse(result.body);

    if (response?.status === 'ok') {
      return response;
    }

    // Virheenhallintaa
    /*
    if (typeof response?.errors === 'string') {
      throw new Error(`Fennoa HTTP error ${result.statusCode}: ${response.errors}`);
    } else if (response?.errors instanceof Array) {
      throw new Error(`Fennoa HTTP error ${result.statusCode}: ${response.errors.join(', ')}`);
    } else {
      throw new Error(`Fennoa HTTP error ${result.statusCode}: ${JSON.stringify(response?.errors)}`);
    }
    */
  }
}
