import { Method } from 'got';
import { FivaldiApiClient } from '.';

export class Methods {
  /** @private */
  _apiClient: () => FivaldiApiClient;

  /** @private */
  _selectedApi: string;

  constructor(apiClient: FivaldiApiClient, selectedApi: string) {
    if (!apiClient || typeof apiClient !== 'object') {
      throw new Error('Incorrect or missing fennoa in method initialization');
    }
    /* 
    if (!selectedApi || typeof selectedApi !== 'string') {
      throw new Error('Incorrect or missing selectedApi in method initialization');
    }
    */
    this._apiClient = () => apiClient;

    this._selectedApi = selectedApi;
  }

  async request(method: Method, uri: string, body?: any, params?: any): Promise<any> {
    return await this._apiClient().request(method, this._apiClient().options.apiBaseUrl + this._selectedApi + uri, body, params);
  }

  setCuid(cuid: string): void {
    this._apiClient().setCuid(cuid);
  }

  /*async getAll(): Promise<any> {
    const result = await this.request('GET', '');

    return result.data;
  }

  async getById(resourceId: number): Promise<any> {
    const result = await this.request('GET', `${resourceId}`);

    return result.data;
  }*/
}
