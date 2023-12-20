/// PARAMS INTERFACES ///

export interface IGetPurchaseInvoicesParams {
  /** Language code for chain and step descriptions, defaults to FIN. Available values: FIN, SWE, ENG. */
  lang?: string;
  /** Filter invoices by how they have been brought to system. True = manually added, false = e-invoices. If no parameter is provided then returns all. */
  addedManually?: boolean;
  /** Filter invoices by invoice status, S = entering, K = handling, H = accepted. */
  invoiceStatus?: string;
  /** Filter invoices by create time, dd.mm.yyyy%20hh:mm:ss */
  createTimeAfter?: string;
  /** Filter invoices by create time, dd.mm.yyyy%20hh:mm:ss */
  createTimeBefore?: string;
  /** Filter invoices by change time, dd.mm.yyyy%20hh:mm:ss */
  changeTimeAfter?: string;
  /** Filter invoices by change time, dd.mm.yyyy%20hh:mm:ss */
  changeTimeBefore?: string;
  /** Whether to include all invoice related changes in change time filter. */
  fetchAllChangeTimes?: boolean;
  /** Whether to include row change times in change time filter. */
  includeRowChangeTimes?: boolean;
  /** Include attachment ids related to invoices, increases query time. */
  includeAttachments?: boolean;
  /** Filter fields of the response objects, only ones provided will be included. */
  fields?: string;
}

export interface IGetPurchaseInvoiceByIdParams {
  /** Language code for chain and step descriptions, defaults to FIN. Available values: FIN, SWE, ENG. */
  lang?: string;
  /** Include attachment ids related to invoices, increases query time. */
  includeAttachments?: boolean;
  fields?: string;
}

export interface IFieldsParams {
  fields?: string;
}

export interface IApprovePurchaseInvoice {
  /** Current step id of a purchase invoice. */
  stepId: number;
  /** Language code for messages, defaults to FIN. Available values: FIN */
  lang?: string;
}

/// REQUEST INTERFACES ///

/**
 * Purchase invoice object that is imported.
 *
 * If supplierId is provided, supplier properties(names, addresses, paymentPriority, refNumber, bankMessageType) will get autofilled, if not also explicitly provided.
 *
 * If supplierId, workSiteKey, paymentTermId or currencyId(other than EUR) are provided, corresponding id must be already created in Fivaldi.
 *
 * If bookkeepingAccount is provided it must be found and be activated for purchase in Fivaldi.
 *
 * BankMessageType (provided with query or based on supplier) determines if bankRefNo is required (1) or bankMessage is required (2).
 *
 * If vatType is provided it must correspond to company settings.
 */
// Fivaldi Schema = PurchaseInvoicePostPutPatch
export interface IPostPurchaseInvoice {
  supplierId?: string;
  /** Can be autofilled if supplierId is provided. */
  supplierName1?: string;
  /** Can be autofilled if supplierId is provided. */
  supplierName2?: string;
  /** Can be autofilled if supplierId is provided. */
  supplierAddress1?: string;
  /** Can be autofilled if supplierId is provided. */
  supplierAddress2?: string;
  /** Can be autofilled if supplierId is provided. */
  supplierPostalCode?: string;
  /** Can be autofilled if supplierId is provided. */
  supplierCity?: string;
  /** Can be autofilled if supplierId is provided. */
  supplierCountryId?: string;
  iban?: string;
  bic?: string;
  /** Finnish or RF reference number */
  bankRefNo?: string;
  bankMessage?: string;
  /** 1 bankRefNo, 2 bankMessage. Can be autofilled if supplierId is provided. */
  bankMessageType?: string;
  /** dd.MM.yyyy */
  invoiceDate?: string;
  /** dd.MM.yyyy */
  bookingDate?: string;
  /** dd.MM.yyyy */
  dueDate?: string;
  total?: number;
  /** dd.MM.yyyy */
  cashDiscountDueDate?: string;
  cashDiscountPercent?: number;
  cashTotal?: number;
  currencyId?: string;
  /** Can be autofilled if currencyId is provided. */
  currencyRate?: number;
  paymentTermId?: number;
  originalInvoiceNo?: string;
  /** Can be autofilled if currencyId is provided. Values 1-5 is allowed. */
  paymentPriority?: string;
  clearingCode?: string;
  /** P urgent payment, K consolidated company payment, M payment order, Q SWIFT-cheque, B EU-payment (Osuuspanki), T Transfer between own accounts, S Cheque */
  crossBorderPaymentType?: string;
  /** T payer pays them, J shared */
  crossBorderBankFeeSharing?: string;
  bookkeepingAccount?: string;
  bookkeepingDimension1?: string;
  bookkeepingDimension2?: string;
  bookkeepingDimension3?: string;
  bookkeepingDimension4?: string;
  /** B = gross, N = net */
  vatType?: string;
  approvedForPaying?: boolean;
  ibanFrom?: string;
  workSiteKey?: number;
  additionalInfo1?: string;
  additionalInfo2?: string;
  additionalInfo3?: string;
  buyerRefId?: string;
  sellerRefId?: string;
}

// Fivaldi Schema = PurchaseInvoiceRowPost
export interface IPostPurchaseInvoiceRow {
  /** Fivaldi company id. */
  cuid?: number;
  /** Purchase invoice id. */
  invoiceId?: number;
  total?: number;
  totalVatIncluded?: number;
  bookkeepingCode?: string;
  bookkeepingAccount?: string;
  bookkeepingDimension1?: string;
  bookkeepingDimension2?: string;
  bookkeepingDimension3?: string;
  bookkeepingDimension4?: string;
  description?: string;
  vatPercentageCode?: string;
  vatStatus?: string;
  vatPercent?: number;
  vatDeductionPercent?: number;
  productCode?: string;
  productAmount?: number;
  productUnit?: string;
  exportType?: string;
  workSiteKey?: number;
}

// Fivaldi Schema = PurchaseInvoiceRowPut
export interface IUpdatePurchaseInvoiceRow {
  /** Fivaldi company id. */
  cuid: number;
  /** Purchase invoice id. */
  invoiceId: number;
  /** Purchase invoice row id. */
  rowId: number;
  total?: number;
  totalVatIncluded?: number;
  bookkeepingCode?: string;
  bookkeepingAccount?: string;
  bookkeepingDimension1?: string;
  bookkeepingDimension2?: string;
  bookkeepingDimension3?: string;
  bookkeepingDimension4?: string;
  description?: string;
  vatPercentageCode?: string;
  vatStatus?: string;
  vatPercent?: number;
  vatDeductionPercent?: number;
  productCode?: string;
  productAmount?: number;
  productUnit?: string;
  exportType?: string;
  workSiteKey?: number;
}

/// RESPONSE INTERFACES ///

// Fivaldi Schema = PurchaseInvoice
export interface IGetPurchaseInvoice {
  /** Id of Fivaldi company. */
  cuid?: string;
  /** Purchase invoice id */
  invoiceId?: number;
  /** Bookkeeping journal number. */
  journalNo?: string;
  chainId?: number;
  chain?: string;
  currentStepId?: number;
  currentStep?: string;
  invoiceStatus?: string;
  supplierId?: string;
  supplierName1?: string;
  supplierName2?: string;
  supplierAddress1?: string;
  supplierAddress2?: string;
  supplierPostalCode?: string;
  supplierCity?: string;
  supplierCountryId?: string;
  typeSepaOrCrossBorder?: string;
  typeInvoiceOrCashPayment?: string;
  iban?: string;
  bic?: string;
  bankRefNo?: string;
  bankMessage?: string;
  bankMessageType?: string;
  invoiceDate?: string;
  invoiceType?: string;
  bookingDate?: string;
  dueDate?: string;
  total?: number;
  cashDiscountDueDate?: string;
  cashDiscountPercent?: number;
  cashTotal?: number;
  currencyId?: string;
  currencyRate?: number;
  paymentTermId?: number;
  originalInvoiceNo?: string;
  paymentPriority?: string;
  clearingCode?: string;
  crossBorderPaymentType?: string;
  crossBorderBankFeeSharing?: string;
  deleted?: boolean;
  bookkeepingAccount?: string;
  bookkeepingDimension1?: string;
  bookkeepingDimension2?: string;
  bookkeepingDimension3?: string;
  bookkeepingDimension4?: string;
  approvedForPaying?: boolean;
  vatType?: string;
  ibanFrom?: string;
  workSiteKey?: number;
  additionalInfo1?: string;
  additionalInfo2?: string;
  additionalInfo3?: string;
  createTime?: string;
  createUser?: string;
  changeTime?: string;
  changeUser?: string;
  deleteTime?: string;
  deleteUser?: string;
  buyerRefId?: string;
  sellerRefId?: string;
  archiveFileIds?: number[];
  stepsLeft?: number;
}

// Fivaldi Schema = PurchaseInvoiceRow
export interface IPurchaseInvoiceRow {
  /** Fivaldi company id. */
  cuid?: number;
  /** Purchase invoice id. */
  invoiceId?: number;
  /** Purchase invoice row id. */
  rowId?: number;
  total?: number;
  totalVatIncluded?: number;
  bookkeepingCode?: string;
  bookkeepingAccount?: string;
  bookkeepingDimension1?: string;
  bookkeepingDimension2?: string;
  bookkeepingDimension3?: string;
  bookkeepingDimension4?: string;
  description?: string;
  vatPercentageCode?: string;
  vatStatus?: string;
  vatPercent?: number;
  vatDeductionPercent?: number;
  productCode?: string;
  productAmount?: number;
  productUnit?: string;
  exportType?: string;
  workSiteKey?: number;
  accrualNumber?: number;
  accrualBeginDate?: string;
  accrualEndDate?: string;
  accrualType?: string;
  accrualAccount?: string;
  accrualgVatIncluded?: boolean;
  createTime?: string;
  createUser?: string;
  changeTime?: string;
  changeUser?: string;
}

// Fivaldi Schema = PurchaseInvoiceResponseDTO
export interface IPurchaseInvoiceResponse {
  message?: string;
  warnings?: string[];
  invoiceDTO?: IPurchaseInvoice;
}

// Fivaldi Schema = PurchaseInvoiceDTO
interface IPurchaseInvoice {
  /** Id of Fivaldi company. */
  cuid?: string;
  /** Purchase invoice Fivaldi id. */
  invoiceId?: number;
  /** Bookkeeping journal number. */
  journalNo?: string;
  chainId?: number;
  invoiceStatus?: string;
  supplierId?: string;
  supplierName1?: string;
  supplierName2?: string;
  supplierAddress1?: string;
  supplierAddress2?: string;
  supplierPostalCode?: string;
  supplierCity?: string;
  supplierCountryId?: string;
  typeSepaOrCrossBorder?: string;
  typeInvoiceOrCashPayment?: string;
  iban?: string;
  bic?: string;
  bankRefNo?: string;
  bankMessage?: string;
  bankMessageType?: string;
  invoiceDate?: string;
  bookingDate?: string;
  dueDate?: string;
  total?: number;
  cashDiscountDueDate?: string;
  cashDiscountPercent?: number;
  cashTotal?: number;
  currencyId?: string;
  currencyRate?: number;
  paymentTermId?: number;
  originalInvoiceNo?: string;
  paymentPriority?: string;
  clearingCode?: string;
  crossBorderPaymentType?: string;
  crossBorderBankFeeSharing?: string;
  deleted?: boolean;
  bookkeepingAccount?: string;
  bookkeepingDimension1?: string;
  bookkeepingDimension2?: string;
  bookkeepingDimension3?: string;
  bookkeepingDimension4?: string;
  approvedForPaying?: boolean;
  vatType?: string;
  ibanFrom?: string;
  workSiteKey?: number;
  additionalInfo1?: string;
  additionalInfo2?: string;
  additionalInfo3?: string;
  createTime?: string;
  createUser?: string;
  changeTime?: string;
  changeUser?: string;
  deleteTime?: string;
  deleteUser?: string;
  buyerRefId?: string;
  sellerRefId?: string;
  comments?: IPurchaseInvoiceComment[];
}

// Fivaldi Schema = Comment
export interface IPurchaseInvoiceComment {
  /** Company identifier. */
  companyId?: number;
  /** Comment identifier (will be generated in the API). */
  commentId?: number;
  /** Invoice identifier. */
  invoiceId?: number;
  /** Node identifier. */
  nodeId?: number;
  /** Comment's text. */
  text?: string;
  /** Create time (date) of the comment (will be generated in the API). */
  createTime?: string;
  /** User that created the comment (checked by the API). */
  createUser?: string;
  /** Marks important comments. */
  isImportant?: boolean;
  /** Date when the comment is deleted. */
  deleteOn?: string;
}
