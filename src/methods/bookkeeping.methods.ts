import { FivaldiApiClient } from '../index';
import { IGetVouchersParams } from '../interfaces/bookkeeping.interfaces';
import { Methods } from '../methods';

export class BookkeepingMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, 'bookkeeping');
  }

  async getVouchers(params?: IGetVouchersParams): Promise<any> {
    return await super.request('GET', 'vouchers', null, params);
  }
}
