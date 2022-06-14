export interface IGetCompaniesParams {
  /** Search by business id (Y-tunnus) */
  businessId?: string;
  /** Search by Fivaldi customer id */
  customerId?: string;
  /** Filter fields of the response objects, only ones provided will be included */
  fields?: string;
}

export interface IGetCompaniesResponse {
  customerId: string;
  name1: string;
  name2: string;
  businessId: string;
}
