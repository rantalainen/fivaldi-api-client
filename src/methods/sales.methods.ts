import { FivaldiApiClient } from '../index';
import { ICreateOrdersResponse, IGetSalesOrdersFilters, ISalesOrderDTO } from '../interfaces/sales.interfaces';
import { Methods } from '../methods';

export class SalesMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, '/sales');
  }

  /** Gets Fivaldi Company invoicing details. */
  async getInvoicingDetails(): Promise<any> {
    return await super.request('GET', `/company-invoicing-details`);
  }

  /** Gets sales orders from batch. */
  async getOrdersByBatchId(externalBatchId: string): Promise<ISalesOrderDTO[]> {
    return await super.request('GET', `/sales-orders/batch/${externalBatchId}`);
  }

  /** Gets sales orders. */
  async getAllOrders(filters?: IGetSalesOrdersFilters): Promise<ISalesOrderDTO[]> {
    return await super.request('GET', `/sales-orders`, null, filters);
  }

  /** Gets unique sales order. */
  async getOrderById(id: string): Promise<ISalesOrderDTO> {
    return await super.request('GET', `/sales-order/${id}`);
  }

  /** Updates unique sales order. Sums to order will be calculated eihter based on Row total sum with tax or unit price excluding tax. Only one of those can be given on row details. */
  async updateOrderById(id: string, salesOrder: ISalesOrderDTO): Promise<ISalesOrderDTO> {
    return await super.request('PUT', `/sales-order/${id}`, salesOrder);
  }

  /** Creates sales order(s). Sums to order will be calculated eihter based on Row total sum with tax or unit price excluding tax. Only one of those can be given on row details. */
  async createOrders(salesOrders: ISalesOrderDTO | ISalesOrderDTO[]): Promise<ICreateOrdersResponse> {
    if (Array.isArray(salesOrders)) {
      return await super.request('POST', '/multiple-sales-orders', salesOrders);
    } else {
      return await super.request('POST', '/sales-order', salesOrders);
    }
  }
}
