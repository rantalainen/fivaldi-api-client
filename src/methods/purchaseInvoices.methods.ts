import { FivaldiApiClient } from '../index';
import { Methods } from '../methods';
import {
  IGetPurchaseInvoicesParams,
  IGetPurchaseInvoice,
  IPostPurchaseInvoice,
  IPurchaseInvoiceResponse,
  IGetPurchaseInvoiceByIdParams,
  IFieldsParams,
  IPurchaseInvoiceRow,
  IPostPurchaseInvoiceRow,
  IUpdatePurchaseInvoiceRow,
  IPurchaseInvoiceComment,
  IApprovePurchaseInvoice
} from '../interfaces/purchaseInvoices.interfaces';

export class PurchaseInvoicesMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, '/purchases');
  }

  /** Gets all invoices that fits in the possible search parameters */
  async getPurchaseInvoices(params?: IGetPurchaseInvoicesParams): Promise<IGetPurchaseInvoice[]> {
    return await super.request('GET', '/invoices', null, params);
  }

  /** Get a single purchase invoice with invoice id */
  async getPurchaseInvoiceById(invoiceId: string, params?: IGetPurchaseInvoiceByIdParams): Promise<IGetPurchaseInvoice> {
    return await super.request('GET', `/invoices/${invoiceId}`, null, params);
  }

  /** Create a new purchase invoice to Fivaldi purchase invoice circulation. Imported invoices get new/no approval chain defined/"syötössä" -status. */
  async createPurchaseInvoice(body: IPostPurchaseInvoice): Promise<IPurchaseInvoiceResponse> {
    return await super.request('POST', '/invoices', body);
  }

  /** Update all the information in a purchase invoice. Missing properties or null values will delete previous data.
   *
   * If supplierId is provided, supplier properties (names, addresses, paymentPriority, refNumber, bankMessageType) will get autofilled, if not also explicitly provided.
   *
   * If supplierId, workSiteKey, paymentTermId or currencyId (other than EUR) are provided, corresponding id must be already created in Fivaldi.
   *
   * If bookkeepingAccount is provided it must be found and be activated for purchase in Fivaldi.
   *
   * BankMessageType (provided with query or based on supplier) determines if bankRefNo is required (1) or bankMessage is required (2).
   *
   * If vatType is provided it must correspond to company settings.
   */
  async updatePurchaseInvoiceAllFields(invoiceId: string, body: IPostPurchaseInvoice): Promise<IPurchaseInvoiceResponse> {
    return await super.request('PUT', `/invoices/${invoiceId}`, body);
  }

  /** Update some of the properties in a purchase invoice. Missing properties or null values will have no effect.
   *
   * Note however, that if supplierId is provided, supplier names and addresses will get overridden, if not also explicitly provided.
   *
   * If supplierId, workSiteKey, paymentTermId or currencyId (other than EUR) are provided, corresponding id must be already created in Fivaldi.
   *
   * If bookkeepingAccount is provided it must be found and be activated for purchase in Fivaldi.
   *
   * BankMessageType (provided with query or based on supplier) determines if bankRefNo is required (1) or bankMessage is required (2).
   *
   * If vatType is provided it must correspond to company settings.
   */
  async updatePurchaseInvoice(invoiceId: string, body: IPostPurchaseInvoice): Promise<IPurchaseInvoiceResponse> {
    return await super.request('PATCH', `/invoices/${invoiceId}`, body);
  }

  /** Approve purhcase invoice */
  async approvePurchaseInvoice(invoiceId: string, params: IApprovePurchaseInvoice): Promise<any> {
    return await super.request('POST', `/invoices/${invoiceId}`, null, params);
  }

  /** Get purchase invoice's comments */
  async getPurchaseInvoiceComments(invoiceId: string, params?: IFieldsParams): Promise<IPurchaseInvoiceComment[]> {
    return await super.request('GET', `/invoices/${invoiceId}/comments`, null, params);
  }

  /** Add comment to purchase invoice */
  async createPurchaseInvoiceComment(invoiceId: string, body: IPurchaseInvoiceComment): Promise<IPurchaseInvoiceComment> {
    return await super.request('POST', `/invoices/${invoiceId}/comments`, body);
  }

  /** Get all rows of a purchase invoice */
  async getPurchaseInvoiceRows(invoiceId: string, params?: IFieldsParams): Promise<IPurchaseInvoiceRow[]> {
    return await super.request('GET', `/invoices/${invoiceId}/rows`, null, params);
  }

  /** Get all rows of a purchase invoice */
  async getPurchaseInvoiceRowById(invoiceId: string, rowId: string, params?: IFieldsParams): Promise<IPurchaseInvoiceRow> {
    return await super.request('GET', `/invoices/${invoiceId}/rows/${rowId}`, null, params);
  }

  /** Adds a new row to purchase invoice */
  async createPurchaseInvoiceRow(invoiceId: string, body: IPostPurchaseInvoiceRow): Promise<IPurchaseInvoiceRow> {
    return await super.request('POST', `/invoices/${invoiceId}/rows`, body);
  }

  /** Update all the information in a purchase invoice row.
   *
   * Missing properties or null values will delete previous data.
   *
   * Cuid, invoiceId and rowId provided in the parameters take precedence over the corresponding object properties in case of conflict.
   */
  async updatePurchaseInvoiceRowAllFields(invoiceId: string, rowId: string, body: IUpdatePurchaseInvoiceRow): Promise<IPurchaseInvoiceRow> {
    return await super.request('PUT', `/invoices/${invoiceId}/rows/${rowId}`, body);
  }

  /** Update some of the properties in a purchase invoice row.
   *
   * Missing properties or null values will have no effect.
   *
   * Cuid, invoiceId and rowId provided in the parameters take precedence over the corresponding object properties in case of conflict.
   */
  async updatePurchaseInvoiceRow(invoiceId: string, rowId: string, body: IUpdatePurchaseInvoiceRow): Promise<IPurchaseInvoiceRow> {
    return await super.request('PATCH', `/invoices/${invoiceId}/rows/${rowId}`, body);
  }

  /** Delete a purhcase invoice row. */
  async deletePurchaseInvoiceRow(invoiceId: string, rowId: string): Promise<any> {
    return await super.request('DELETE', `/invoices/${invoiceId}/rows/${rowId}`);
  }
}
