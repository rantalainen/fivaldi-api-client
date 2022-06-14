import { FivaldiApiClient } from '../index';
import { Methods } from '../methods';
import {
  IGetVouchersParams,
  IGetVoucherByIdParams,
  IGetVoucherTypesParams,
  IGetAccountBalanceParams,
  IVoucherImportRequest,
  IFetchVoucherResponse,
  IVoucherType,
  IVatCodeResponse,
  IFiscalYear,
  IAccountBalance,
  IVoucherImportResponse,
  IGetAttachmentsParams
} from '../interfaces/bookkeeping.interfaces';

export class BookkeepingMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    if (!apiClient.options.cuid) throw new Error('cuid is missing');
    super(apiClient, `/companies/${apiClient.options.cuid}/bookkeeping`);
  }

  /** Gets all the vouchers fulfilling the search parameters. Returns an array of vouchers. */
  async getVouchers(params: IGetVouchersParams): Promise<IFetchVoucherResponse[]> {
    return await super.request('GET', '/vouchers', null, params);
  }

  /** Gets a single voucher with the voucher number. Returns a voucher object. */
  async getVoucherById(params: IGetVoucherByIdParams): Promise<IFetchVoucherResponse> {
    return await super.request('GET', `/vouchers/${params.voucherNumber}`);
  }

  /** Gets all the voucher types fulfilling the search parameters. Returns an array of voucher types. */
  async getVoucherTypes(params: IGetVoucherTypesParams): Promise<IVoucherType[]> {
    return await super.request('GET', '/voucherTypes', null, params);
  }

  /** Gets all the vat codes. Returns an array of vat codes. */
  async getVatCodes(): Promise<IVatCodeResponse[]> {
    return await super.request('GET', '/vatCodes');
  }

  /** Gets all the fiscal years. Returns an array of fiscal years. */
  async getFiscalYears(): Promise<IFiscalYear[]> {
    return await super.request('GET', '/fiscalYears');
  }

  /** Gets a list of account balances, credit and debit sums. */
  async getAccountBalance(params: IGetAccountBalanceParams): Promise<IAccountBalance> {
    return await super.request('GET', '/accountBalance', null, params);
  }

  /** Imports one voucher into Fivaldi bookkeeping. */
  async createVoucher(body: IVoucherImportRequest): Promise<IVoucherImportResponse> {
    return await super.request('POST', '/vouchers', body);
  }

  /** Get a list of voucher attachments for specific company */
  async getAttachments(params: IGetAttachmentsParams): Promise<IGetAttachmentsParams> {
    return await super.request('GET', '/vouchers/attachments', null, params);
  }
}
