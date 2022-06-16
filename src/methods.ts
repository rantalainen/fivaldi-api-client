import { FivaldiApiClient } from '.';
import { Method } from 'got';

export class Methods {
  /** @private */
  _apiClient: () => FivaldiApiClient;

  /** @private */
  _selectedApi: string;

  constructor(apiClient: FivaldiApiClient, selectedApi: string) {
    this._apiClient = () => apiClient;
    this._selectedApi = selectedApi;
  }

  async request(method: Method, uri: string, body?: any, params?: any): Promise<any> {
    if (!this._apiClient().getCuid()) throw new Error('CUID is missing! You can only use root methods without CUID.');
    return await this._apiClient().request(
      method,
      `${this._apiClient().options.apiBaseUrl}/companies/${this._apiClient().getCuid()}${this._selectedApi}${uri}`,
      body,
      params
    );
  }
}
