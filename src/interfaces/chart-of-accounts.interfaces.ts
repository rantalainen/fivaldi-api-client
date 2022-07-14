/// PARAMS INTERFACES ///

export interface IGetChartOfAccountsParams {
  /** Account dimension, defaults to 0.
   *
   * Available values: 0 all (default accounts), 1 (customer defined dimension), 2 (customer defined dimension),
   * 3 (customer defined dimension), 4 (customer defined dimension). */
  dimension?: string;
  /** Language code, defaults to FIN.
   *
   * Available values : FIN, SWE, ENG. */
  lang?: string;
  /** Return accounts and dimensions used in bookkeeping. */
  inUseBookkeeping?: boolean;
  /** Return accounts and dimensions used in estate. */
  inUseEstate?: boolean;
  /** Return accounts and dimensions used in purchases. */
  inUsePurchases?: boolean;
  /** Return accounts and dimensions used in salaries.*/
  inUseSalaries?: boolean;
  /** Return accounts and dimensions used in sales. */
  inUseSales?: boolean;
  /** Filter fields of the response objects, only ones provided will be included. */
  fields?: string;
}

/// RESPONSE INTERFACES ///

export interface IGetChartOfAccountsResponse {
  /** Fivaldi company id. */
  cuid: string;
  /** Language code of the account descriptions. */
  lang: string;
  dimensions?: IBookkeepingDimension[];
  accounts?: IBookkeepingAccount[];
}

interface IBookkeepingDimension {
  dimension: string;
  description: string;
  inUseBookkeeping: boolean;
  inUseEstate: boolean;
  inUsePurchases: boolean;
  inUseSalaries: boolean;
  inUseSales: boolean;
}

interface IBookkeepingAccount {
  dimension: string;
  account: string;
  description: string;
  inUseBookkeeping: boolean;
  inUseEstate: boolean;
  inUsePurchases: boolean;
  inUseSalaries: boolean;
  inUseSales: boolean;
}
