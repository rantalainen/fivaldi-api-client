import { FivaldiApiClient } from '../index';
import { Methods } from '../methods';
import {
  IDimensionsParams,
  IExternalAccountInformationDTO,
  IGetChartOfAccountsParams,
  IGetChartOfAccountsResponse
} from '../interfaces/chart-of-accounts.interfaces';

export class ChartOfAccountsMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, '/chart-of-accounts');
  }

  /** Gets id values and descriptions for product groups, units, posting groups and posting codes. */
  async getChartOfAccounts(params?: IGetChartOfAccountsParams): Promise<IGetChartOfAccountsResponse> {
    return await super.request('GET', '', null, params);
  }

  /** Add new account(s) for a single dimension */
  async dimensions(body: IExternalAccountInformationDTO[], params: IDimensionsParams): Promise<IExternalAccountInformationDTO[]> {
    return await super.request('POST', '/dimensions', body, params);
  }
}
