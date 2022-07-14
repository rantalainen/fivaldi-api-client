import { FivaldiApiClient } from '../index';
import { Methods } from '../methods';
import { IGetChartOfAccountsParams, IGetChartOfAccountsResponse } from '../interfaces/chart-of-accounts.interfaces';

export class ChartOfAccountsMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, '/chart-of-accounts');
  }

  /** Gets id values and descriptions for product groups, units, posting groups and posting codes. */
  async getChartOfAccounts(params?: IGetChartOfAccountsParams): Promise<IGetChartOfAccountsResponse> {
    return await super.request('GET', '', null, params);
  }
}
