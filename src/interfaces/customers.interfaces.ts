/// PARAMS INTERFACES ///

export interface IGetAllCustomersParams {
  /** Limit results with search word */
  searchWord?: string;
  /** Limit results with changed at date is given date or newer (dd.mm.yyyy) */
  fromDate?: string;
  /** Filter fields of the response objects, only ones provided will be included on response */
  fields?: string;
}

/// RESPONSE & REQUEST INTERFACES ///

export interface ICustomerEntityDetailsDTO {
  /** Customer id is set by Fivaldi as next available customer number. */
  customerId?: string;
  businessId?: string;
  customerName?: string;
  customerName2?: string;
  email?: string;
  email2?: string;
  phoneNumber?: string;
  phoneNumber2?: string;
  changeTime?: string;
  changeUser?: string;
  accountDimension1?: string;
  accountDimension2?: string;
  accountDimension3?: string;
  accountDimension4?: string;
  currency?: string;
  customerSegment?: string;
  customerInterestPercent?: number;
  debtCollectionDisabled?: boolean;
  deliveryMethod?: string;
  externalId?: string;
  /** Buyerpartyidentifier (Ostajan asiakastunnukseksi). selitteet (O = OVT, A = Yritystunnus, M = Verkkolaskuosoitteessa annettu muu tunnus, null = Y-tunnus) */
  finvoiceBuyerPartyIdentifier?: 'O' | 'A' | 'M';
  /** Finvoice dimensiontext mask for purchase invoice circulation (Seurantakohde-ehdotuksen tulkintasääntö) */
  finvoiceDimensionTextMask?: string;
  /** Don't handle incoming Finvoice postings (Älä tuo Finvoicen tiliöintirivejä) */
  finvoiceNoPostingRows?: boolean;
  /** Receivers MessageReceiverDetails ToIdentifier on Finvoice (Vastaanottajan verkkolaskuosoitteen tunnus) */
  finvoiceOtherIdentifier?: string;
  fivaldiBankAccountId?: string;
  /** Customer language code (Asiakkaan kielikoodi). Selitteet (FIN = Suomi, ENG = Englanti, SWE = Ruotsi) */
  languageCode?: 'FIN' | 'SWE' | 'ENG';
  /** Purchase instant messaging type code (Pankkisiirto-Viestityyppi). Selitteet (1 = Viite, 2 = Viesti, 3 = Veroviesti) */
  instantMessagingType?: '1' | '2' | '3';
  interestDisabled?: boolean;
  intermediatorCode?: string;
  isCustomer?: boolean;
  ovtIdentifier?: string;
  /** Payment pririty for purchases (Ostojen maksuprioriteetti). Selitteet (1 = Kiireellinen, 2 = Tärkeä, 3 = Normaali, 4 = Ei niin tärkeä, 5 = Voi odottaa) */
  paymentPriority?: 1 | 2 | 3 | 4 | 5;
  purchasePaymentTerm?: string;
  supplierCustomerId?: string;
  purchasePostingGroup?: string;
  additionalInformation?: string;
  privateAdditionalInfo?: string;
  purchaseDeliveryMethodId?: string;
  purchasePostingCode?: string;
  salesPostingGroup?: string;
  purchaseDeliveryTermId?: string;
  responsablePerson?: string;
  /** Reference format (Viitenumeron muoto). Selitteet (LV = Laskunumero + vakio, VL = Vakio + laskunumero, VA = Vakioarvo) */
  referenceFormat?: 'LV' | 'VL' | 'VA';
  referenceDefaultValue?: string;
  salesPersonId?: string;
  salesPaymentTerm?: string;
  isSupplier?: boolean;
  salesDeliveryTermId?: string;
  transmissionTypeId?: string;
  website?: string;
  /** SpecificationIdentifier element on Finvoice (EU-normin mukainen verkkolaskukoodi) */
  specificationIdentifier?: string;
  buyerCountrySubdivision?: string;
  classificationCode?: string;
  classificationText?: string;
  agreementIdentifier?: string;
  buyerReferenceIdentifier?: string;
  accountDimensionText?: string;
  tenderReference?: string;
  isConsumer?: boolean;
  einvoiceDirectPaymentprintingType?: string;
  einvoiceDirectPayment?: boolean;
  customerEntityAddressDTOS?: ICustomerEntityAddressDTO[];
  customerEntityBankAccountDTOS?: ICustomerEntityBankAccountDTO[];
}

export interface ICustomerEntityAddressDTO {
  /** Address type (Osoitetyyppi). Selitteet (01 = Postiosoite, 02 = Käyntiosoite, 03 = Laskutusosoite, 04 = Toimitusosoite) */
  addressType?: '01' | '02' | '03' | '04';
  /** Fivaldi will set this id to new address */
  addressId?: number;
  streetAddress?: string;
  streetAddress2?: string;
  postalCode?: string;
  postalAddress?: string;
  /** Country code with ISO 3166-1 standard (Osoitteen maakoodi) */
  countryCode?: string;
  isMainAddress?: boolean;
  changeTime?: string;
  changeUser?: string;
}

export interface ICustomerEntityBankAccountDTO {
  /** Fivaldi will set this id to new bank accounts */
  bankAccountId?: string;
  /** Fivaldi will set this based on IBAN- number if FI bank account and IBAN is given (Tilinumero) */
  bbanNumber?: string;
  bankAddress?: string;
  bankName?: string;
  changeTime?: string;
  changeUser?: string;
  clearingCode?: string;
  /** Country code of bank account with ISO 3166-1 standard (Pankkitilin maakoodi) */
  countryId: string;
  /** Foreign payment charge code (Valuuttamaksun palvelumaksut). Selitteet (J = Jaettu, T = Maksaja maksaa) */
  foreignPaymentCharge?: 'J' | 'T';
  /** Foreign payment type code (Valuuttamaksun maksutapa). Selitteet (M = Maksumääräys, P = Pikamääräys, Q = SWIFT- shekki, S = Shekki, T = Pankin sisäinen tilisiirto, K = Konsernimaksu, B = Eu-maksu OP) */
  foreignPaymentType?: 'M' | 'P' | 'Q' | 'S' | 'T' | 'K' | 'B';
  ibanNumber?: string;
  swift?: string;
}

export interface IProductRegisterBasicDetails {
  paymentTermDTOList: IPaymentTermDTO[];
  deliveryMethodDTOList: IDeliveryMethodDTO[];
  deliveryTermDTOList: IDeliveryTermDTO[];
  currencyDTOList: ICurrencyDTO[];
  salesPersonDTOList: ISalesPersonDTO[];
  salesPostingGroupDTOList: ISalesPostingGroupDTO[];
  purchasesPostingGroupDTOList: [];
  customerGroupAndSegmentsDTOList: [];
  fivaldiCompanyBankAccountDTOList: IFivaldiCompanyBankAccountDTO[];
  accountDimension1ValueDTOList: IAccountDimensionValueDTO[];
  accountDimension2ValueDTOList: IAccountDimensionValueDTO[];
  accountDimension3ValueDTOList: IAccountDimensionValueDTO[];
  accountDimension4ValueDTOList: IAccountDimensionValueDTO[];
  purchasePostingCodeDTOList: IPurchasePostingCodeDTO[];
  paymentPriorityDTOList: IPaymentPriorityDTO[];
  referenceFormatDTOList: IReferenceFormatDTO[];
  instantMessagingTypeDTOList: IInstantMessagingTypeDTO[];
  transmissionTypeDTOList: ITransmissionTypeDTO[];
  einvoiceDirectPaymentprintingTypeDTOList: ITransmissionTypeDTO[];
  addressTypeDTOList: IAddressTypeDTO[];
  foreignPaymentTypeDTOList: IForeignPaymentDTO[];
  foreignPaymentChargeDTOList: IForeignPaymentDTO[];
}

interface IPaymentTermDTO {
  paymentTermId: number;
  discountDates: number;
  discountPercent: number;
  netDueDate: number;
  defaultPaymentTerm: boolean;
  description: string;
}

interface IDeliveryMethodDTO {
  deliveryMethodId: string;
  defaultDeliveryMethod: string;
  description: string;
}

interface IDeliveryTermDTO {
  deliveryTermId: string;
  defaultDeliveryTerm: boolean;
  description: string;
  deliveryTermText: string;
}

interface ICurrencyDTO {
  currency: string;
  description: string;
  currencyRate: number;
}

interface ISalesPersonDTO {
  salesPersonId: string;
  name: string;
  email: string;
  phoneNumber: string;
}

interface ISalesPostingGroupDTO {
  postingGroupId: string;
  description: string;
  cashSales: boolean;
  defaultPostingGroupForSales: boolean;
  defaultPostingGroupForPurchases: boolean;
  defaultPostingId: string;
  accountsReceivableAccount: string;
  defaultSk1: string;
  defaultSk2: string;
  defaultSk3: string;
  defaultSk4: string;
}

interface IFivaldiCompanyBankAccountDTO {
  id: string;
  bankName: string;
  bankNameInvoice: string;
  iban: string;
  accountNumber: string;
  swift: string;
}

interface IAccountDimensionValueDTO {
  dimension: string;
  accountId: string;
  finAccountDescription: string;
  engAccountDescription: string;
  sweAccountDescription: string;
}

interface IPurchasePostingCodeDTO {
  accountingCode: string;
  accountingDescription: string;
}

interface IPaymentPriorityDTO {
  id: string;
  description: string;
}

interface IReferenceFormatDTO {
  id: string;
  description: string;
}

interface IInstantMessagingTypeDTO {
  id: string;
  description: string;
}

interface ITransmissionTypeDTO {
  transmissionTypeId: string;
  description: string;
  type: string;
}

interface IAddressTypeDTO {
  addressType: string;
  description: string;
}

interface IForeignPaymentDTO {
  type: string;
  description: string;
}

export interface ICustomerEntityDTO {
  customerId: string;
  businessId: string;
  customerName: string;
  customerName2: string;
  email: string;
  email2: string;
  phoneNumber: string;
  phoneNumber2: string;
  externalId: string;
  changeTime: string;
}
