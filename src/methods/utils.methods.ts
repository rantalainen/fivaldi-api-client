import { FivaldiApiClient } from '../index';
import { Methods } from '../methods';
import { IGetCompaniesParams, IGetCompaniesResponse } from '../interfaces/utils.interfaces';

export class UtilsMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, '');
  }

  async getPing(): Promise<any> {
    return await super.request('GET', '/ping', null, null);
  }

  async getCustomers(): Promise<IGetCompaniesResponse[]> {
    return await super.request('GET', '/customers', null, null);
  }

  async getCompanies(params: IGetCompaniesParams): Promise<any> {
    return await super.request('GET', '/companies', null, params);
  }

  setCuid(cuid: string): void {
    super.setCuid(cuid);
  }
}
