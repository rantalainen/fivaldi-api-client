export interface IGetSalesOrdersFilters {
  /** Limit results with created at date (dd.mm.yyyy) */
  fromDate?: string;
  /** Limit results with status DRAFT | INVOICED */
  status?: 'DRAFT' | 'INVOICED';
}

export interface ICreateOrdersResponse {
  externalBatchId?: string;
  errors?: any;
  [propName: string]: any;
}

export interface IBuyerDTO {
  /** Name of sales order buyer (Laskutusosoitteen nimi) */
  buyerOrganisationName?: string;
  /** Name2 of sales order buyer (Laskutusosoitteen nimi2) */
  buyerOrganisationName2?: string;
  /** Country code of buyer address with ISO 3166-1 standard (Laskutusosoitteen maakoodi) */
  countryCode?: string;
  /** Country description. Fivaldi will set this based on Country code (Laskutusosoitteen maan selite) */
  countryName?: string;
  /** Postal code of sales order buyer address (Laskutusosoitteen postinumero) */
  postCodeIdentifier?: string;
  /** Street name of sales order buyer address (Laskutusosoitteen lähiosoite) */
  streetName?: string;
  /** Street name2 of sales order buyer address (Laskutusosoitteen lähiosoite2) */
  streetName2?: string;
  /** Town name of sales order buyer address (Laskutusosoitteen postitoimipaikka) */
  townName?: string;
}

export interface IRecipientDTO {
  /** Country code of recipient address with ISO 3166-1 standard (Toimitusosoitteen maakoodi) */
  countryCode?: string;
  /** Country description. Fivaldi will set this based on Country code (Toimitusosoitteen maan selite) */
  countryName?: string;
  /** Postal code of sales order recipient address (Toimitusosoitteen postinumero) */
  postCodeIdentifier?: string;
  /** Name of sales order recipient (Toimitusosoitteen nimi) */
  recipientOrganisationName?: string;
  /** Name2 of sales order recipient (Toimitusosoitteen nimi2) */
  recipientOrganisationName2?: string;
  /** Street name of sales order recipient (Toimitusosoitteen lähiosoite) */
  streetName?: string;
  /** Street name2 of sales order recipient (Toimitusosoitteen lähiosoite2) */
  streetName2?: string;
  /** Town name of sales order recipient address (Toimitusosoitteen postitoimipaikka) */
  townName?: string;
}

export interface ISalesOrderRowDTO {
  /** Valid Account from Fivaldi company's Account dimensions (seurantakohde 1) */
  accountDimension1?: string;
  /** Valid Account from Fivaldi company's Account dimensions (seurantakohde 2) */
  accountDimension2?: string;
  /** Valid Account from Fivaldi company's Account dimensions (seurantakohde 3) */
  accountDimension3?: string;
  /** Valid Account from Fivaldi company's Account dimensions (seurantakohde 4) */
  accountDimension4?: string;
  /** Change time of sales order row (Muutosaika) */
  changeTime?: string;
  /** Change user of sales order row (Muutoskäyttäjä) */
  changeUser?: string;
  /** Description of product code, set value if not textRow (selite) */
  description?: string;
  /** Discount percent with maxium of 2 decimals for row, set value if not textRow (Alennusprosentti) */
  discountRate?: number;
  /** Internal description of product code, set value if not textRow (Sisäinen lisätieto) */
  internalDescription?: string;
  /** Valid product code from Fivaldi comany's product register, set value if not textRow (Tuotekoodi) */
  productCode?: string;
  /** Quantity of products on row, set value if not textRow (Määrä) */
  quantity?: number;
  /** Row free text, if textRow then this is it's value, if not, this is additional row free text to given product row (Lisätieto) */
  rowFreeText?: string;
  /** Boolean if row is product row or textrow (Tekstirivi) */
  textRow?: boolean;
  /** Give this value if you wan't to calculate row total sum based on this. UnitPriceExcludingTax and totalSumIncludingTax can not be given on same row! Unit price excluding tax with maxium 6 decimals. Fivaldi will calculate row total sum including tax based on this, discount percent and vat code from posting, set value if not textRow (Rivin verollinen summa yhteensä) */
  unitPriceExcludingTax?: number;
  /** Give this value if you wan't to calculate unit price based on this. UnitPriceExcludingTax and totalSumIncludingTax can not be given on same row! Row total sum including tax with 2 decimals. Fivaldi will calculate unit price based on this, discount percent and vat code from posting, set value if not textRow (Rivin verollinen summa yhteensä) */
  totalSumIncludingTax?: number;
  /** Valid id from Fivaldi company's units, set value if not textRow (Yksikkö) */
  unitId?: string;
}

export interface ISalesOrderDTO {
  /** Finvoice3 AccountDimensionText element (Tiliöintiviite) */
  accountDimensionText?: string;
  /** Finvoice3 agreement identifier (Sopimus) */
  agreementIdentifier?: string;
  buyer?: IBuyerDTO;
  /** Finvoice3 BuyerReferenceIdentifier element (Asiakkaan ilmoittama viite) */
  buyerReferenceIdentifier?: string;
  /** Change time of sales order (Muutosaika) */
  changeTime?: string;
  /** Change user of sales order (Muutoskäyttäjä) */
  changeUser?: string;
  /** Create time of sales order (Luontiaika) */
  createTime?: string;
  /** Create user of sales order (Luontikäyttäjä) */
  createUser?: string;
  /** Fivaldi company id (cuid) set by Fivaldi from endpoint authenticated url */
  cuid?: string;
  /** Currency of order / Only EUR supported (Valuutta) */
  currency?: string;
  /** Currency rate of currency / Only 1 supported (Kurssi) */
  currencyRate?: number;
  /** Customer id of customer on Fivaldi company's customer register (Asiakastunnus) */
  customerId?: string;
  /** Delivery date, format dd.mm.yyyy (Toimituspäivä) */
  deliveryDate?: string;
  /** Valid id from Fivaldi company's delivery methods (Toimitustapa) */
  deliveryMethodId?: string;
  /** Valid id from Fivaldi company's delivery terms (Toimitusehto) */
  deliveryTermId?: string;
  /** Unique batch id set by Fivaldi. Will be returned on response (Ulkoinen erä id) */
  externalBatchId?: string;
  /** External order number from 3rd party application (Ulkoinen tilausnumero) */
  externalOrderNumber?: string;
  /** Unique document id set by Fivaldi (Id) */
  id?: string;
  /** Invoice reference (Viitteemme) */
  invoiceReference?: string;
  /** Language code of sales order (Kieli) */
  languageCode?: string;
  /** Order date (dd.mm.yyyy) (Tilauspäivä) */
  orderDate?: string;
  /** Order identifier (Tilauksenne) */
  orderIdentifier?: string;
  /** Unique order number set by Fivaldi (Tilausnumero) */
  orderNumber?: string;
  /** Order status, new orders will be set as DRAFT by Fivaldi (Tilauksen tila) */
  orderStatus?: string;
  /** Valid id from Fivaldi company's payment terms (Maksuehto) */
  paymentTermId?: string;
  /** Valid id from Fivaldi company's posting groups (Tiliöintiryhmä) */
  postingGroupId?: string;
  /** Ready to invoice information (Laskutusvalmis) */
  readyToInvoice?: boolean;
  recipient?: IRecipientDTO;
  salesOrderRowDTOS?: ISalesOrderRowDTO[];
  /** Valid id from Fivaldi company's sales persons (Myyjä) */
  salesPersonId?: string;
  /** Finvoice3 TenderReference element (Tarjouspyynnön viite) */
  tenderReference?: string;
  /** Total vat amount of order calculated by Fivaldi from row total sums (Vero yhteensä) */
  totalVatAmount?: number;
  /** Total vat excluded amount of order calculated by Fivaldi from row total sums (Veroton summa yhteensä) */
  totalVatExcludedAmount?: number;
  /** Total vat included amount of order calculated by Fivaldi from row total sums (Verolinen summa yhteensä) */
  totalVatIncludedAmount?: number;
  /** Valid id from Fivaldi company's transmission types (Välitystapa) */
  transmissionTypeId?: string;
}
