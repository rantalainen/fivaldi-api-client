import { FivaldiApiClient } from '../index';
import { Methods } from '../methods';
import {
  ICustomerEntityDTO,
  ICustomerEntityDetailsDTO,
  IGetAllCustomersParams,
  IProductRegisterBasicDetails,
  ICustomerEntityAddressDTO,
  ICustomerEntityBankAccountDTO
} from '../interfaces/customers.interfaces';

export class CustomersMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, '/customers');
  }

  /** Get Fivaldi company's basic details for using correct id values on customer */
  async getCustomerRegisterBasicDetails(): Promise<IProductRegisterBasicDetails> {
    return await super.request('GET', '/getCustomerRegisterBasicDetails');
  }

  /** Get Fivaldi company's customers */
  async getAllCustomers(params?: IGetAllCustomersParams): Promise<ICustomerEntityDTO[]> {
    return await super.request('GET', '', null, params);
  }

  /** Get Fivaldi company's unique customer from register with all details */
  async getCustomer(id: string): Promise<ICustomerEntityDetailsDTO> {
    return await super.request('GET', `/${id}`);
  }

  /** Create customer with addresses and bank accounts */
  async createCustomer(body: ICustomerEntityDetailsDTO): Promise<ICustomerEntityDetailsDTO> {
    return await super.request('POST', '/createCustomer', body);
  }

  /** Update existing Customer details. Addresses and bank accounts will not be updated (they have their own endpoints). */
  async updateCustomerAllFields(id: string, body: ICustomerEntityDetailsDTO): Promise<ICustomerEntityDetailsDTO> {
    return await super.request('POST', `/${id}/updateCustomerAllFields`, body);
  }

  /** Update existing Customer details only with given fields. Addresses and bank accounts will not be updated (they have own endpoints). */
  async updateCustomer(id: string, body: ICustomerEntityDetailsDTO): Promise<ICustomerEntityDetailsDTO> {
    return await super.request('POST', `/${id}/updateCustomer`, body);
  }

  /** Creates a new address for existing customer. Address id will be created by Fivaldi. If address is marked as main address, existing main address will be set as not main address. */
  async createAddress(id: string, body: ICustomerEntityAddressDTO): Promise<ICustomerEntityAddressDTO> {
    return await super.request('POST', `/${id}/createAddress`, body);
  }

  /** Updates address for existing customer. Address id that is updated will be taken from url. If address is marked as main address, existing main address will be set as not main address. */
  async updateAddressAllFields(id: string, addressId: string, body: ICustomerEntityAddressDTO): Promise<ICustomerEntityAddressDTO> {
    return await super.request('POST', `/${id}/address/${addressId}/updateAddressAllFields`, body);
  }

  /** Creates a new bank account for existing customer. Bank account id will be created by Fivaldi. If iban is given, bban and swift will be set based on IBAN. If IBAN is not given, IBAN and swift will be set based on bban. */
  async createBankAccount(id: string, body: ICustomerEntityBankAccountDTO): Promise<ICustomerEntityBankAccountDTO> {
    return await super.request('POST', `/${id}/createBankAccount`, body);
  }

  /** Updates bank account for existing customer. Bank account id that is updated will be taken from url. If iban is given, bban and swift will be set based on IBAN. If IBAN is not given, IBAN and swift will be set based on bban. */
  async updateBankAccountAllFields(
    id: string,
    accountId: string,
    body: ICustomerEntityBankAccountDTO
  ): Promise<ICustomerEntityBankAccountDTO> {
    return await super.request('POST', `/${id}/bank-account/${accountId}/updateBankAccountAllFields`, body);
  }
}
