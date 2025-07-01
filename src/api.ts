/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ProductEntityDTO {
  /**
   * Product code (Tuotekoodi)
   * @minLength 1
   * @maxLength 20
   */
  productCode?: string;
  /**
   * Product description. This is description of product using Fivaldi company's language (Selite)
   * @minLength 0
   * @maxLength 80
   */
  description?: string | null;
  /**
   * Ean-code (Ean-koodi)
   * @minLength 0
   * @maxLength 80
   */
  eanCode?: string | null;
  /**
   * Fivaldi will set this when product is inserted or updated (Muutosaika)
   * @minLength 0
   * @maxLength 40
   */
  changeTime?: string | null;
}

export interface ProductEntityDetailsDTO {
  /**
   * Product code (Tuotekoodi)
   * @minLength 1
   * @maxLength 20
   */
  productCode?: string;
  /**
   * Product description. This is description of product using Fivaldi company's language (Selite)
   * @minLength 0
   * @maxLength 80
   */
  description?: string | null;
  /**
   * Ean-code (Ean-koodi)
   * @minLength 0
   * @maxLength 80
   */
  eanCode?: string | null;
  /**
   * Fivaldi will set this when product is inserted or updated (Muutosaika)
   * @minLength 0
   * @maxLength 40
   */
  changeTime?: string | null;
  /**
   * Fivaldi will set this when product is inserted or updated (Muutoskäyttäjä)
   * @minLength 0
   * @maxLength 40
   */
  changeUser?: string | null;
  /**
   * Product group id for product (Tuoteryhmä)
   * @minLength 0
   * @maxLength 3
   */
  productGroup?: string | null;
  /**
   * Unit id for product (Yksikkö)
   * @minLength 0
   * @maxLength 10
   */
  unitId?: string | null;
  /** Is this product set as default to new sales orders (Vakiorivi myyntidokumentilla) */
  defaultToInvoice?: boolean;
  /**
   * Purchase cost price for this product with max. 6 decimals (Omakustannushinta)
   * @max 9999999999.999998
   */
  purchaseCostPrice?: number;
  /**
   * Sales price without tax for this product with max. 6 decimals (Myyntihinta)
   * @max 9999999999.999998
   */
  salesPrice?: number;
  /**
   * CN code for customs data (CN nimike)
   * @minLength 0
   * @maxLength 10
   */
  cnCode?: string | null;
  /**
   * CN unit for customs data (CN toinen paljous yksikkö)
   * @minLength 0
   * @maxLength 20
   */
  cnUnit?: string | null;
  /**
   * CN net weight(kg) for customs data with max. 6 decimals (CN nettopaino (kg))
   * @max 9999999999.999998
   */
  cnNetWeight?: number;
  /**
   * CN multiplier for Customs data with max. 6 decimals (Toinen paljous kerroin)
   * @max 9999999999.999998
   */
  cnMultiplier?: number;
  /**
   * Origin country code for customs data with ISO 3166-1 standard (Alkuperämaa)
   * @minLength 2
   * @maxLength 2
   */
  originCountry?: string | null;
  productEntityDescriptionDTOList?: ProductEntityDescriptionDTO[];
  productEntityPostingDTOList?: ProductEntityPostingDTO[];
}

export interface ProductEntityDescriptionDTO {
  /**
   * Description language code  (Kielikoodi). Selitteet (FIN = Suomi, ENG = Englanti, SWE = Ruotsi)
   * @minLength 3
   * @maxLength 3
   */
  languageCode?: 'FIN' | 'ENG' | 'SWE';
  /**
   * Product description with given language. Description of product using Fivaldi company's language will be shown on product description (Selite)
   * @minLength 0
   * @maxLength 80
   */
  description?: string | null;
  /**
   * Public description text. This will be set as extra description to product row on sales order row (Ulkoinen kuvaus)
   * @minLength 0
   * @maxLength 512
   */
  publicDescriptionText?: string | null;
  /**
   * Internal description text. This will be set as internal information to product row on sales order row (Sisäinen kuvaus)
   * @minLength 0
   * @maxLength 512
   */
  internalDescriptionText?: string | null;
  /**
   * Fivaldi will set this when product description is inserted or updated (Muutosaika)
   * @minLength 0
   * @maxLength 40
   */
  changeTime?: string | null;
  /**
   * Fivaldi will set this when product description is inserted or updated (Muutoskäyttäjä)
   * @minLength 0
   * @maxLength 30
   */
  changeUser?: string | null;
}

export interface ProductEntityPostingDTO {
  /**
   * Posting group id (Tiliöintiryhmä)
   * @minLength 1
   * @maxLength 10
   */
  postingGroupId?: string;
  /**
   * Posting id. If empty product uses posting groups default posting on sales order if it is set (Tiliöintikoodi)
   * @minLength 0
   * @maxLength 80
   */
  postingCodeId?: string | null;
  /**
   * Fivaldi will set this when product posting is inserted or updated (Muutosaika)
   * @minLength 0
   * @maxLength 40
   */
  changeTime?: string | null;
  /**
   * Fivaldi will set this when product posting is inserted or updated (Muutoskäyttäjä)
   * @minLength 0
   * @maxLength 30
   */
  changeUser?: string | null;
}

export interface CustomerEntityDTO {
  /**
   * Fivaldi will set this id to new customer (Asiakastunnus)
   * @minLength 1
   * @maxLength 10
   */
  customerId?: string | null;
  /**
   * Business id (Y-tunnus)
   * @minLength 0
   * @maxLength 30
   */
  businessId?: string | null;
  /**
   * Customer name (Asiakkaan nimi)
   * @minLength 0
   * @maxLength 40
   */
  customerName?: string | null;
  /**
   * Customer name2 (Asiakkaan nimi2)
   * @minLength 0
   * @maxLength 40
   */
  customerName2?: string | null;
  /**
   * Customer email address (Asiakkaan sähköposti)
   * @minLength 0
   * @maxLength 80
   */
  email?: string | null;
  /**
   * Customer email address2 (Asiakkaan sähköposti2)
   * @minLength 0
   * @maxLength 80
   */
  email2?: string | null;
  /**
   * Customer phone number (Asiakkaan puhelin)
   * @minLength 0
   * @maxLength 25
   */
  phoneNumber?: string | null;
  /**
   * Customer phone number2 (Asiakkaan puhelin2)
   * @minLength 0
   * @maxLength 25
   */
  phoneNumber2?: string | null;
  /**
   * External id of customer (Ulkoinen asiakastunnus)
   * @minLength 0
   * @maxLength 30
   */
  externalId?: string | null;
  /**
   * Fivaldi will set this when customer is inserted or updated (Muutosaika)
   * @minLength 0
   * @maxLength 40
   */
  changeTime?: string | null;
}

export interface CustomerEntityDetailsDTO {
  /**
   * Fivaldi will set this id to new customer (Asiakastunnus)
   * @minLength 1
   * @maxLength 10
   */
  customerId?: string | null;
  /**
   * Business id (Y-tunnus)
   * @minLength 0
   * @maxLength 30
   */
  businessId?: string | null;
  /**
   * Customer name (Asiakkaan nimi)
   * @minLength 0
   * @maxLength 40
   */
  customerName?: string | null;
  /**
   * Customer name2 (Asiakkaan nimi2)
   * @minLength 0
   * @maxLength 40
   */
  customerName2?: string | null;
  /**
   * Customer email address (Asiakkaan sähköposti)
   * @minLength 0
   * @maxLength 80
   */
  email?: string | null;
  /**
   * Customer email address2 (Asiakkaan sähköposti2)
   * @minLength 0
   * @maxLength 80
   */
  email2?: string | null;
  /**
   * Customer phone number (Asiakkaan puhelin)
   * @minLength 0
   * @maxLength 25
   */
  phoneNumber?: string | null;
  /**
   * Customer phone number2 (Asiakkaan puhelin2)
   * @minLength 0
   * @maxLength 25
   */
  phoneNumber2?: string | null;
  /**
   * Fivaldi will set this when customer is inserted or updated (Muutosaika)
   * @minLength 0
   * @maxLength 40
   */
  changeTime?: string | null;
  /**
   * Latest change user of customer details (Muutoskäyttäjä)
   * @minLength 0
   * @maxLength 40
   */
  changeUser?: string | null;
  /**
   * Default account dimension 1 value on sales (Seurantakohde 1)
   * @minLength 0
   * @maxLength 8
   */
  accountDimension1?: string | null;
  /**
   * Default account dimension 2 value on sales (Seurantakohde 2)
   * @minLength 0
   * @maxLength 8
   */
  accountDimension2?: string | null;
  /**
   * Default account dimension 3 value on sales (Seurantakohde 3)
   * @minLength 0
   * @maxLength 8
   */
  accountDimension3?: string | null;
  /**
   * Default account dimension 4 value on sales (Seurantakohde 4)
   * @minLength 0
   * @maxLength 8
   */
  accountDimension4?: string | null;
  /**
   * Currency or customer (Asiakkaan valuutta)
   * @minLength 3
   * @maxLength 3
   */
  currency?: string | null;
  /**
   * Customer segment of customer (Asiakassegmentti)
   * @minLength 0
   * @maxLength 10
   */
  customerSegment?: string | null;
  /**
   * Customer interest percent (Viivästyskorko)
   * @max 9999.999999
   */
  customerInterestPercent?: number;
  /** Is debt collection and reminders disabled for customer (Perintäkielto) */
  debtCollectionDisabled?: boolean;
  /**
   * Customer default delivery method (Toimitustapa)
   * @minLength 0
   * @maxLength 3
   */
  deliveryMethod?: string | null;
  /**
   * External id of customer (Ulkoinen asiakastunnus)
   * @minLength 0
   * @maxLength 30
   */
  externalId?: string | null;
  /**
   * Buyerpartyidentifier  (Ostajan asiakastunnukseksi). selitteet (O = OVT, A = Yritystunnus, M = Verkkolaskuosoitteessa annettu muu tunnus, null = Y-tunnus)
   * @minLength 0
   * @maxLength 1
   */
  finvoiceBuyerPartyIdentifier?: 'O' | 'A' | 'M' | null;
  /**
   * Finvoice dimensiontext mask for purchase invoice circulation (Seurantakohde-ehdotuksen tulkintasääntö)
   * @minLength 0
   * @maxLength 40
   */
  finvoiceDimensionTextMask?: string | null;
  /** Don't handle incoming Finvoice postings (Älä tuo Finvoicen tiliöintirivejä) */
  finvoiceNoPostingRows?: boolean;
  /**
   * Receivers MessageReceiverDetails ToIdentifier on Finvoice (Vastaanottajan verkkolaskuosoitteen tunnus)
   * @minLength 0
   * @maxLength 30
   */
  finvoiceOtherIdentifier?: string | null;
  /**
   * Fivaldi company's bank account id default to sales invoice (Pankkitili laskulle)
   * @minLength 0
   * @maxLength 4
   */
  fivaldiBankAccountId?: string | null;
  /**
   * Customer language code  (Asiakkaan kielikoodi). Selitteet (FIN = Suomi, ENG = Englanti, SWE = Ruotsi)
   * @minLength 3
   * @maxLength 3
   */
  languageCode?: 'FIN' | 'ENG' | 'SWE' | null;
  /**
   * Purchase instant messaging type code  (Pankkisiirto-Viestityyppi). Selitteet (1 = Viite, 2  = Viesti, 3 = Veroviesti)
   * @minLength 0
   * @maxLength 1
   */
  instantMessagingType?: '1' | '2' | '3' | null;
  /** Interest invoices disabled for customer (Korkokielto) */
  interestDisabled?: boolean;
  /**
   * Finvoice reciever MessageReceiverDetails ToIntermediator (Vastaanottajan välittäjän tunnus)
   * @minLength 0
   * @maxLength 30
   */
  intermediatorCode?: string | null;
  /** Is this customer marked as customer (Asiakas) */
  isCustomer?: boolean;
  /**
   * OVT-identifier for customer (OVT-tunnus)
   * @minLength 0
   * @maxLength 17
   */
  ovtIdentifier?: string | null;
  /**
   * Payment pririty for purchases (Ostojen maksuprioriteetti). Selitteet (1 = Kiireellinen, 2 = Tärkeä, 3 = Normaali, 4 = Ei niin tärkeä, 5 = Voi odottaa)
   * @max 9
   */
  paymentPriority?: 1 | 2 | 3 | 4 | 5 | null;
  /**
   * Purchase payment term (Maksuehto ostot)
   * @minLength 0
   * @maxLength 4
   */
  purchasePaymentTerm?: string | null;
  /**
   * Suppliers customer id (Ostojen oma asiakastunnus)
   * @minLength 0
   * @maxLength 20
   */
  supplierCustomerId?: string | null;
  /**
   * Posting group id for purchases (Ostojen tiliöintiryhmä)
   * @minLength 0
   * @maxLength 10
   */
  purchasePostingGroup?: string | null;
  /**
   * Additional info for customer (Lisätieto)
   * @minLength 0
   * @maxLength 2048
   */
  additionalInformation?: string | null;
  /**
   * Private additional info for customer (Sisäinen lisätieto)
   * @minLength 0
   * @maxLength 80
   */
  privateAdditionalInfo?: string | null;
  /**
   * Delivery method on purchases (Ostojen toimitustapa)
   * @minLength 0
   * @maxLength 10
   */
  purchaseDeliveryMethodId?: string | null;
  /**
   * Posting code for purchases (Ostojen tiliöintikoodi)
   * @minLength 0
   * @maxLength 4
   */
  purchasePostingCode?: string | null;
  /**
   * Posting group for sales (Myynnin tiliöintiryhmä)
   * @minLength 0
   * @maxLength 10
   */
  salesPostingGroup?: string | null;
  /**
   * Delivery term on purchases (Ostojen toimitusehto)
   * @minLength 0
   * @maxLength 10
   */
  purchaseDeliveryTermId?: string | null;
  /**
   * Responsable person for customer (Vastuuhenkilö)
   * @minLength 0
   * @maxLength 40
   */
  responsablePerson?: string | null;
  /**
   * Reference format (Viitenumeron muoto). Selitteet (LV = Laskunumero + vakio, VL = Vakio + laskunumero, VA = Vakioarvo)
   * @minLength 0
   * @maxLength 2
   */
  referenceFormat?: 'LV' | 'VL' | 'VA' | null;
  /**
   * Reference default value (Vakioviite)
   * @minLength 0
   * @maxLength 20
   */
  referenceDefaultValue?: string | null;
  /**
   * Sales person for customer (Myyjä)
   * @minLength 0
   * @maxLength 20
   */
  salesPersonId?: string | null;
  /**
   * Payment term for sales to this customer (Myynnin maksuehto)
   * @minLength 0
   * @maxLength 4
   */
  salesPaymentTerm?: string | null;
  /** Is customer a supplier (Toimittaja) */
  isSupplier?: boolean;
  /**
   * Sales delivery term (Myynnin toimitusehto)
   * @minLength 0
   * @maxLength 3
   */
  salesDeliveryTermId?: string | null;
  /**
   * Transmissiontype for sales (Välitystapa)
   * @minLength 0
   * @maxLength 10
   */
  transmissionTypeId?: string | null;
  /**
   * Website for customer (www-osoite)
   * @minLength 0
   * @maxLength 80
   */
  website?: string | null;
  /**
   * SpecificationIdentifier element on Finvoice (EU-normin mukainen verkkolaskukoodi)
   * @minLength 0
   * @maxLength 35
   */
  specificationIdentifier?: string | null;
  /**
   * BuyerCountrySubdivision element on Finvoice (Asiakkaan alueellinen yksikkö)
   * @minLength 2
   * @maxLength 35
   */
  buyerCountrySubdivision?: string | null;
  /**
   * ClassificationCode element on Finvoice (Turvalaskun koodi)
   * @minLength 0
   * @maxLength 10
   */
  classificationCode?: string | null;
  /**
   * ClassificationText element on Finvoice (Turvalaskun selite)
   * @minLength 0
   * @maxLength 70
   */
  classificationText?: string | null;
  /**
   * AgreementIdentifier element on Finvoice (Sopimus)
   * @minLength 0
   * @maxLength 70
   */
  agreementIdentifier?: string | null;
  /**
   * BuyerReferenceIdentifier element on Finvoice (Asiakkaan ilmoittama viite)
   * @minLength 0
   * @maxLength 70
   */
  buyerReferenceIdentifier?: string | null;
  /**
   * AccountDimensionText element on Finvoice (Tiliöintiviite)
   * @minLength 0
   * @maxLength 35
   */
  accountDimensionText?: string | null;
  /**
   * TenderReference element on Finvoice (Tarjouspyynnön viite)
   * @minLength 0
   * @maxLength 70
   */
  tenderReference?: string | null;
  /** Is customer a consumer (Kuluttaja-asiakas) */
  isConsumer?: boolean;
  /**
   * Direct payment printing type for e-invoice, can be used if eInvoiceDirectPayment is true (E-laskun suoramaksun tulostustapa)
   * @minLength 0
   * @maxLength 70
   */
  einvoiceDirectPaymentprintingType?: string | null;
  /** Direct payment for e-invoice, can be used if customer transmissiontype is e-invoice (E-laskun suoramaksu) */
  einvoiceDirectPayment?: boolean;
  customerEntityAddressDTOS?: CustomerEntityAddressDTO[];
  customerEntityBankAccountDTOS?: CustomerEntityBankAccountDTO[];
}

export interface CustomerEntityBankAccountDTO {
  /**
   * Fivaldi will set this id to new bank accounts (Id)
   * @minLength 1
   * @maxLength 10
   */
  bankAccountId?: string | null;
  /**
   * Fivaldi will set this based on IBAN- number if FI bank account and IBAN is given (Tilinumero)
   * @minLength 0
   * @maxLength 40
   */
  bbanNumber?: string | null;
  /**
   * Address of bank account (Pankin osoite)
   * @minLength 0
   * @maxLength 70
   */
  bankAddress?: string | null;
  /**
   * Name of bank account (Pankkitilin nimi)
   * @minLength 0
   * @maxLength 70
   */
  bankName?: string | null;
  /**
   * Fivaldi will set this when bank account is inserted or updated (Muutosaika)
   * @minLength 0
   * @maxLength 40
   */
  changeTime?: string | null;
  /**
   * Latest change user of bank account (Muutoskäyttäjä)
   * @minLength 0
   * @maxLength 30
   */
  changeUser?: string | null;
  /**
   * Clearing code of bank account (Clearing-koodi)
   * @minLength 0
   * @maxLength 35
   */
  clearingCode?: string | null;
  /**
   * Country code of bank account with ISO 3166-1 standard (Pankkitilin maakoodi)
   * @minLength 2
   * @maxLength 2
   */
  countryId?: string;
  /**
   * Foreign payment charge code (Valuuttamaksun palvelumaksut). Selitteet (J = Jaettu, T = Maksaja maksaa)
   * @minLength 0
   * @maxLength 1
   */
  foreignPaymentCharge?: 'J' | 'T' | null;
  /**
   * Foreign payment type code (Valuuttamaksun maksutapa). Selitteet (M = Maksumääräys, P = Pikamääräys, Q = SWIFT- shekki, S = Shekki, T = Pankin sisäinen tilisiirto, K = Konsernimaksu, B = Eu-maksu OP)
   * @minLength 0
   * @maxLength 1
   */
  foreignPaymentType?: 'M' | 'P' | 'Q' | 'S' | 'T' | 'K' | 'B' | null;
  /**
   * IBAN number of bank account if FI bank account (IBAN)
   * @minLength 0
   * @maxLength 50
   */
  ibanNumber?: string | null;
  /**
   * SWIFT / BIC of bank account (SWIFT)
   * @minLength 0
   * @maxLength 11
   */
  swift?: string | null;
}

export interface CustomerEntityAddressDTO {
  /**
   * Address type (Osoitetyyppi). Selitteet (01 = Postiosoite, 02 = Käyntiosoite, 03 = Laskutusosoite, 04 = Toimitusosoite)
   * @minLength 0
   * @maxLength 2
   */
  addressType?: '01' | '02' | '03' | '04' | null;
  /**
   * Fivaldi will set this id to new address (Id)
   * @minLength 1
   * @maxLength 10
   */
  addressId?: number | null;
  /**
   * Street address (Katuosoite)
   * @minLength 0
   * @maxLength 80
   */
  streetAddress?: string | null;
  /**
   * Street address2 (Katuosoite2)
   * @minLength 0
   * @maxLength 80
   */
  streetAddress2?: string | null;
  /**
   * Postal code (Postinumero)
   * @minLength 0
   * @maxLength 10
   */
  postalCode?: string | null;
  /**
   * Postal address of address (Postitoimipaikka)
   * @minLength 0
   * @maxLength 80
   */
  postalAddress?: string | null;
  /**
   * Country code with ISO 3166-1 standard (Osoitteen maakoodi)
   * @minLength 2
   * @maxLength 2
   */
  countryCode?: string | null;
  /** Main address of customer (Pääosoite) */
  isMainAddress?: boolean;
  /**
   * Fivaldi will set this when address is inserted or updated (Muutosaika)
   * @minLength 0
   * @maxLength 40
   */
  changeTime?: string | null;
  /**
   * Latest change user of address (Muutoskäyttäjä)
   * @minLength 0
   * @maxLength 30
   */
  changeUser?: string | null;
}

export interface SalesOrderDTO {
  /**
   * Finvoice3 AccountDimensionText element (Tiliöintiviite)
   * @minLength 0
   * @maxLength 35
   */
  accountDimensionText?: string | null;
  /**
   * Finvoice3 agreement identifier (Sopimus)
   * @minLength 0
   * @maxLength 70
   */
  agreementIdentifier?: string | null;
  buyer?: BuyerDTO;
  /**
   * Finvoice3 BuyerReferenceIdentifier element (Asiakkaan ilmoittama viite)
   * @minLength 0
   * @maxLength 70
   */
  buyerReferenceIdentifier?: string | null;
  /** Change time of sales order (Muutosaika) */
  changeTime?: string;
  /** Change user of sales order (Muutoskäyttäjä) */
  changeUser?: string;
  /** Create time of sales order (Luontiaika) */
  createTime?: string;
  /** Create user of sales order (Luontikäyttäjä) */
  createUser?: string;
  /**
   * Fivaldi company id (cuid) set by Fivaldi from endpoint authenticated url
   * @minLength 32
   * @maxLength 32
   */
  cuid?: string | null;
  /**
   * Currency of order / Only EUR supported (Valuutta)
   * @minLength 3
   * @maxLength 3
   */
  currency?: 'EUR';
  /** Currency rate of currency / Only 1 supported (Kurssi) */
  currencyRate?: number;
  /**
   * Customer id of customer on Fivaldi company's customer register (Asiakastunnus)
   * @minLength 1
   * @maxLength 10
   */
  customerId?: string;
  /**
   * Delivery date , format dd.mm.yyyy (Toimituspäivä)
   * @minLength 10
   * @maxLength 10
   */
  deliveryDate?: string | null;
  /**
   * Valid id from Fivaldi company's delivery methods (Toimitustapa)
   * @minLength 1
   * @maxLength 3
   */
  deliveryMethodId?: string | null;
  /**
   * Valid id from Fivaldi company's delivery terms (Toimitusehto)
   * @minLength 1
   * @maxLength 3
   */
  deliveryTermId?: string | null;
  /** Unique batch id set by Fivaldi. Will be returned on response (Ulkoinen erä id) */
  externalBatchId?: string | null;
  /**
   * External order number from 3rd party application (Ulkoinen tilausnumero)
   * @minLength 1
   * @maxLength 100
   */
  externalOrderNumber?: string | null;
  /** Unique document id set by Fivaldi (Id) */
  id?: string | null;
  /**
   * Invoice reference (Viitteemme)
   * @minLength 1
   * @maxLength 80
   */
  invoiceReference?: string | null;
  /**
   * Language code of sales order (Kieli)
   * @minLength 3
   * @maxLength 3
   */
  languageCode?: 'FIN' | 'SWE' | 'ENG';
  /**
   * Order date (dd.mm.yyyy) (Tilauspäivä)
   * @minLength 10
   * @maxLength 10
   */
  orderDate?: string | null;
  /**
   * Order identifier (Tilauksenne)
   * @minLength 0
   * @maxLength 70
   */
  orderIdentifier?: string | null;
  /** Unique order number set by Fivaldi (Tilausnumero) */
  orderNumber?: string | null;
  /**
   * Order status, new orders will be set as DRAFT by Fivaldi (Tilauksen tila)
   * @minLength 0
   * @maxLength 100
   */
  orderStatus?: 'DRAFT' | 'INVOICED' | null;
  /**
   * Valid id from Fivaldi company's payment terms (Maksuehto)
   * @minLength 0
   * @maxLength 70
   */
  paymentTermId?: string;
  /**
   * Valid id from Fivaldi company's posting groups (Tiliöintiryhmä)
   * @minLength 1
   * @maxLength 10
   */
  postingGroupId?: string;
  /** Ready to invoice information (Laskutusvalmis) */
  readyToInvoice?: boolean;
  recipient?: RecipientDTO;
  salesOrderRowDTOS?: SalesOrderRowDTO[];
  /**
   * Valid id from Fivaldi company's sales persons (Myyjä)
   * @minLength 0
   * @maxLength 10
   */
  salesPersonId?: string | null;
  /**
   * Finvoice3 TenderReference element (Tarjouspyynnön viite)
   * @minLength 0
   * @maxLength 70
   */
  tenderReference?: string | null;
  /**
   * Total vat amount of order calculated by Fivaldi from row total sums (Vero yhteensä)
   * @max 999999999999.99
   */
  totalVatAmount?: number;
  /**
   * Total vat excluded amount of order calculated by Fivaldi from row total sums (Veroton summa yhteensä)
   * @max 999999999999.99
   */
  totalVatExcludedAmount?: number;
  /**
   * Total vat included amount of order calculated by Fivaldi from row total sums (Verolinen summa yhteensä)
   * @max 999999999999.99
   */
  totalVatIncludedAmount?: number;
  /**
   * Valid id from Fivaldi company's transmission types (Välitystapa)
   * @minLength 10
   * @maxLength 10
   */
  transmissionTypeId?: string | null;
}

export interface SalesOrderRowDTO {
  /**
   * Valid accountId value from Fivaldi company's Account dimensions (seurantakohde 1)
   * @minLength 0
   * @maxLength 8
   */
  accountDimension1?: string | null;
  /**
   * Valid accountId value from Fivaldi company's Account dimensions (seurantakohde 2)
   * @minLength 0
   * @maxLength 8
   */
  accountDimension2?: string | null;
  /**
   * Valid accountId value from Fivaldi company's Account dimensions (seurantakohde 3)
   * @minLength 0
   * @maxLength 8
   */
  accountDimension3?: string | null;
  /**
   * Valid accountId value from Fivaldi company's Account dimensions (seurantakohde 4)
   * @minLength 0
   * @maxLength 8
   */
  accountDimension4?: string | null;
  /** Change time of sales order row (Muutosaika) */
  changeTime?: string;
  /** Change user of sales order row (Muutoskäyttäjä) */
  changeUser?: string;
  /**
   * Description of product code, set value if not textRow (selite)
   * @minLength 0
   * @maxLength 80
   */
  description?: string | null;
  /**
   * discount percent with maxium of 2 decimals for row, set value if not textRow (Alennusprosentti)
   * @max 100
   */
  discountRate?: number;
  /** Internal description of product code, set value if not textRow (Sisäinen lisätieto) */
  internalDescription?: string;
  /**
   * Valid product code from Fivaldi comany's product register, set value if not textRow (Tuotekoodi)
   * @minLength 0
   * @maxLength 20
   */
  productCode?: string | null;
  /**
   * Quoantity of products on row, set value if not textRow (Määrä)
   * @max 9999999999.999
   */
  quantity?: number;
  /**
   * Row free text, if textRow then this is it's value, if not, this is additional row free text to given product row (Lisätieto)
   * @minLength 0
   * @maxLength 512
   */
  rowFreeText?: string | null;
  /** Boolean if row is product row or textrow (Tekstirivi) */
  textRow?: boolean;
  /**
   * Give this value if you wan't to calculate row total sum based on this. UnitPriceExcludingTax and totalSumIncludingTax can not be given on same row! Unit price excluding tax with maxium 6 decimals. Fivaldi will calculate row total sum including tax based on this, discount percent and vat code from posting, set value if not textRow (Rivin verollinen summa yhteensä)
   * @max 9999999999.999998
   */
  unitPriceExcludingTax?: number;
  /**
   * Give this value if you wan't to calculate unit price based on this. UnitPriceExcludingTax and totalSumIncludingTax can not be given on same row! Row total sum including tax with 2 decimals. Fivaldi will calculate unit price based on this, discount percent and vat code from posting, set value if not textRow (Rivin verollinen summa yhteensä)
   * @max 999999999999.99
   */
  totalSumIncludingTax?: number;
  /**
   * Valid id from Fivaldi company's units, set value if not textRow (Yksikkö)
   * @minLength 0
   * @maxLength 10
   */
  unitId?: string | null;
}

export interface BuyerDTO {
  /**
   * Name of sales order buyer (Laskutusosoitteen nimi)
   * @minLength 0
   * @maxLength 40
   */
  buyerOrganisationName?: string | null;
  /**
   * Name2 of sales order buyer (Laskutusosoitteen nimi2)
   * @minLength 0
   * @maxLength 40
   */
  buyerOrganisationName2?: string | null;
  /**
   * Country code of buyer address with ISO 3166-1 starndard (Laskutusosoitteen maakoodi)
   * @minLength 2
   * @maxLength 2
   */
  countryCode?: string | null;
  /** Country description. Fivaldi will set this based on Country code (Laskutusosoitteen maan selite) */
  countryName?: string;
  /**
   * Postal code of sales order buyer address (Laskutusosoitteen postinumero)
   * @minLength 0
   * @maxLength 35
   */
  postCodeIdentifier?: string | null;
  /**
   * Street name of sales order buyer address (Laskutusosoitteen lähiosoite)
   * @minLength 0
   * @maxLength 35
   */
  streetName?: string | null;
  /**
   * Street name2 of sales order buyer address (Laskutusosoitteen lähiosoite2)
   * @minLength 0
   * @maxLength 35
   */
  streetName2?: string | null;
  /**
   * Town name of sales order buyer address (Laskutusosoitteen postitoimipaikka)
   * @minLength 0
   * @maxLength 35
   */
  townName?: string | null;
}

export interface RecipientDTO {
  /**
   * Country code of recipient address with ISO 3166-1 standard (Toimitusosoitteen maakoodi)
   * @minLength 2
   * @maxLength 2
   */
  countryCode?: string | null;
  /** Country description. Fivaldi will set this based on Country code (Toimitusosoitteen maan selite) */
  countryName?: string;
  /**
   * Postal code of sales order recipient address(Toimitusosoitteen postinumero)
   * @minLength 0
   * @maxLength 35
   */
  postCodeIdentifier?: string | null;
  /**
   * Name of sales order recipient (Toimitusosoitteen nimi)
   * @minLength 0
   * @maxLength 35
   */
  recipientOrganisationName?: string | null;
  /**
   * Name2 of sales order recipient (Toimitusosoitteen nimi2)
   * @minLength 0
   * @maxLength 35
   */
  recipientOrganisationName2?: string | null;
  /**
   * Street name of sales order recipient (Toimitusosoitteen lähiosoite)
   * @minLength 0
   * @maxLength 35
   */
  streetName?: string | null;
  /**
   * Street name2 of sales order recipient (Toimitusosoitteen lähiosoite2)
   * @minLength 0
   * @maxLength 35
   */
  streetName2?: string | null;
  /**
   * Town name of sales order recipient address(Toimitusosoitteen postitoimipaikka)
   * @minLength 0
   * @maxLength 35
   */
  townName?: string | null;
}

export interface Customer {
  customerId?: string;
  name1?: string;
  name2?: string;
  businessId?: string;
}

export interface Company {
  /** Fivaldi company id */
  companyId?: number;
  /** Fivaldi database schema */
  databaseId?: string;
  /** Fivaldi internal company id */
  cuid?: string;
  /** Fivaldi customer id */
  customerId?: string;
  name1?: string;
  name2?: string;
  streetAddress?: string;
  postalAddress?: string;
  countryId?: string;
  phone?: string;
  fax?: string;
  website?: string;
  email?: string;
  /** Y-tunnus */
  businessId?: string;
  currency?: string;
  city?: string;
  language?: 'FIN' | 'SWE' | 'ENG';
}

export interface ApiError {
  /** HTTP Status code */
  status?: object;
  /** Error message */
  message?: string;
}

export interface ApiErrorList {
  /** HTTP Status code */
  status?: object;
  /** Error message */
  message?: string;
  /** List of errors */
  errors?: string[];
}

export interface ApiErroCodeList {
  /** Error message text. */
  message?: string;
  errors?: ApiErrorCode[];
}

export interface ApiErrorCode {
  /** Error code that is described in ErrorCodes */
  errorCode?: number;
  message?: string;
}

export interface ErrorCodes {
  erorCode?:
    | '10. BINDING_PARAMETER_ERROR'
    | '20. ERROR_IMPORT_VOUCHERS'
    | '21. INVALID_DATE_INSIDE_VOUCHERS'
    | '22. INVALID_CUID_MISMATCH'
    | '23. INVALID_ACCOUNTING_TYPE_MISMATCH'
    | '30. DATE_MISMATCH_INSIDE_VOUCHER_ENTRIES'
    | '31. CUID_PARAMS_MISMATCH'
    | '32. ACCOUNTING_TYPE_PARAMS_MISMATCH'
    | '33. EXPORTING_ACCOUNTING_TYPE'
    | '34. INVALID_VAT_TYPE'
    | '35. VAT_CODE_NOT_EXIST'
    | '40. GETTING_ACCOUNT_BALANCES'
    | '41. INCORECT_ACCOUNT_PARAMETERS'
    | '42. INVALID_ACCOUNT INVALID_DIMENSION'
    | '43. INVALID_DIMENSION'
    | '44. INVALID_VOUCHER_NUMBER'
    | '45. INVALID_VOUCHER_MONTH'
    | '46. INVALID_VOUCHER_FISCAL_YEAR';
}

export interface ExternalBudgetResponseDTO {
  /** Unique id of budget */
  budgetId?: string;
  /** Identifier for the fiscal year */
  fiscalYearId?: number;
  /** Name of the budget */
  budgetName?: string;
  /** Fivaldi will set this when budget is inserted or updated in format "dd.MM.YYYY hh:mm:ss" (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when budget is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  budgetEntries?: ExternalBudgetEntryResponseDTO[];
}

export interface ExternalBudgetEntryResponseDTO {
  /**
   * Bookkeeping period for fiscal year.
   * @example 201101
   */
  bookkeepingPeriod?: number;
  /** Number of account in Fivaldi account chart */
  accountNumber?: string;
  /** Name of account in Fivaldi account chart */
  accountName?: string;
  sum?: number;
  /** Object of containing bookkeeping dimensions(seurantakohteet) and their names from Fivaldi account chart */
  dimension?: BudgetBookkeepingDimension;
  /** Fivaldi will set this when budget entry is inserted or updated in format "dd.MM.YYYY hh:mm:ss" (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when budget entry is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
}

export interface ExternalBudgetRequestDTO {
  /**
   * Id of the budget, must be unique
   * @minLength 1
   * @maxLength 20
   */
  budgetId?: string;
  /**
   * Fiscal year for the budget, must be existing for the company
   * @min 1950
   * @exclusiveMin true
   * @max 2100
   * @exclusiveMax true
   */
  fiscalYearId?: number;
  /**
   * Name of the budget
   * @maxLength 255
   */
  budgetName?: string | null;
  budgetEntries?: ExternalBudgetEntryRequestDTO[];
}

export interface ExternalBudgetEntryRequestDTO {
  /**
   * Bookkeeping period for fiscal year.
   * @min 200001
   * @exclusiveMin true
   * @max 209912
   * @exclusiveMax true
   * @example 209901
   */
  bookkeepingPeriod?: number;
  /**
   * Number of the account in Fivaldi account chart
   * @minLength 1
   * @maxLength 8
   */
  accountNumber?: string;
  /** Budget sum */
  sum?: number;
  dimension?: {
    /** Object that contains keys for the dimensions 1-4 (Seurantakohteet), if key is given it must exist on Fivaldi account chart */
    description?: BudgetDimensionsDTO;
  };
}

/** Object of containing bookkeeping dimensions(seurantakohteet) and their names from Fivaldi account chart */
export interface BudgetBookkeepingDimension {
  dimension1?: string;
  dimension1Name?: string;
  dimension2?: string;
  dimension2Name?: string;
  dimension3?: string;
  dimension3Name?: string;
  dimension4?: string;
  dimension4name?: string;
}

/** Object that contains keys for the dimensions 1-4 (Seurantakohteet), if key is given it must exist on Fivaldi account chart */
export type BudgetDimensionsDTO = {
  /**
   * Seurantakohde1 key
   * @minLength 1
   * @maxLength 8
   */
  dimension1?: string | null;
  /**
   * Seurantakohde2 key
   * @minLength 1
   * @maxLength 8
   */
  dimension2?: string | null;
  /**
   * Seurantakohde3 key
   * @minLength 1
   * @maxLength 8
   */
  dimension3?: string | null;
  /**
   * Seurantakohde4 key
   * @minLength 1
   * @maxLength 8
   */
  dimension4?: string | null;
};

export interface PurchaseInvoice {
  /** Id of Fivaldi company */
  cuid?: string;
  /** Purchase invoice id */
  invoiceId?: number;
  /** Bookkeeping journal number */
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

export interface PurchaseInvoiceResponseDTO {
  message?: string;
  warnings?: string[];
  invoiceDTO?: PurchaseInvoiceDTO;
}

export interface PurchaseInvoiceDTO {
  /** Id of Fivaldi company */
  cuid?: string;
  /** Purchase invoice Fivaldi id */
  invoiceId?: number;
  /** Bookkeeping journal number */
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
  comments?: Comment[];
}

export interface PurchaseInvoicePostPutPatch {
  /** @maxLength 10 */
  supplierId?: string;
  /**
   * Can be autofilled if supplierId is provided
   * @maxLength 40
   */
  supplierName1?: string;
  /**
   * Can be autofilled if supplierId is provided
   * @maxLength 40
   */
  supplierName2?: string;
  /**
   * Can be autofilled if supplierId is provided
   * @maxLength 80
   */
  supplierAddress1?: string;
  /**
   * Can be autofilled if supplierId is provided
   * @maxLength 80
   */
  supplierAddress2?: string;
  /**
   * Can be autofilled if supplierId is provided
   * @maxLength 10
   */
  supplierPostalCode?: string;
  /**
   * Can be autofilled if supplierId is provided
   * @maxLength 80
   */
  supplierCity?: string;
  /**
   * Can be autofilled if supplierId is provided.
   * @maxLength 2
   */
  supplierCountryId?: string;
  /** @maxLength 50 */
  iban?: string;
  bic?: string;
  /**
   * Finnish or RF reference number
   * @maxLength 25
   */
  bankRefNo?: string;
  /** @maxLength 420 */
  bankMessage?: string;
  /** 1 bankRefNo, 2 bankMessage. Can be autofilled if supplierId is provided. */
  bankMessageType?: '1' | '2' | '3';
  /** @example "dd.MM.yyyy" */
  invoiceDate?: string;
  /** @example "dd.MM.yyyy" */
  bookingDate?: string;
  /** @example "dd.MM.yyyy" */
  dueDate?: string;
  total?: number;
  /** @example "dd.MM.yyyy" */
  cashDiscountDueDate?: string;
  cashDiscountPercent?: number;
  cashTotal?: number;
  /** @maxLength 3 */
  currencyId?: string;
  /** Can be autofilled if currencyId is provided. */
  currencyRate?: number;
  paymentTermId?: number;
  /** @maxLength 20 */
  originalInvoiceNo?: string;
  /** Can be autofilled if supplierId is provided. */
  paymentPriority?: '1' | '2' | '3' | '4' | '5';
  /** @maxLength 35 */
  clearingCode?: string;
  /** P urgent payment, K consolidated company payment, M payment order, Q SWIFT-cheque, B EU-payment (Osuuspanki), T Transfer between own accounts, S Cheque */
  crossBorderPaymentType?: 'P' | 'K' | 'M' | 'Q' | 'B' | 'T' | 'S';
  /** T payer pays them, J shared */
  crossBorderBankFeeSharing?: 'T' | 'J';
  /** @maxLength 8 */
  bookkeepingAccount?: string;
  /** @maxLength 8 */
  bookkeepingDimension1?: string;
  /** @maxLength 8 */
  bookkeepingDimension2?: string;
  /** @maxLength 8 */
  bookkeepingDimension3?: string;
  /** @maxLength 8 */
  bookkeepingDimension4?: string;
  /** @maxLength 1 */
  vatType?: 'B' | 'N';
  /** @maxLength 8 */
  approvedForPaying?: boolean;
  /** @maxLength 50 */
  ibanFrom?: string;
  workSiteKey?: number;
  /** @maxLength 80 */
  additionalInfo1?: string;
  /** @maxLength 80 */
  additionalInfo2?: string;
  /** @maxLength 80 */
  additionalInfo3?: string;
  /** @maxLength 70 */
  buyerRefId?: string;
  /** @maxLength 70 */
  sellerRefId?: string;
}

export interface PurchaseInvoiceRow {
  /** Fivaldi company id */
  cuid?: number;
  /** Purchase invoice id */
  invoiceId?: number;
  /** Purchase invoice row id */
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

export interface PurchaseInvoiceRowPost {
  /** Fivaldi company id */
  cuid?: number;
  /** Purchase invoice id */
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

export interface PurchaseInvoiceRowPut {
  /** Fivaldi company id */
  cuid?: number;
  /** Purchase invoice id */
  invoiceId?: number;
  /** Purchase invoice row id */
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
}

export interface AccrualDataPost {
  /** Fivaldi company id */
  cuid?: number;
  /** Purchase invoice id */
  invoiceId?: number;
  /** Purchase invoice row id */
  rowId?: number;
  beginDate?: string;
  endDate?: string;
  type?: string;
  account?: string;
  vatIncluded?: boolean;
}

export interface AccrualDataPut {
  /** Fivaldi company id */
  cuid?: number;
  /** Purchase invoice id */
  invoiceId?: number;
  /** Purchase invoice row id */
  rowId?: number;
  /** Accrual data number */
  accrualNumber?: number;
  beginDate?: string;
  endDate?: string;
  type?: string;
  account?: string;
  vatIncluded?: boolean;
}

export interface ChartOfAccounts {
  /** Fivaldi company id */
  cuid?: number;
  /** Language code of the account descriptions */
  lang?: string;
  dimensions?: BookkeepingDimension[];
  accounts?: BookkeepingAccount[];
}

export interface ExternalAccountInformationDTO {
  /** @maxLength 8 */
  account?: string;
  /** @maxLength 80 */
  finDescription?: string;
  /** @maxLength 80 */
  sweDescription?: string | null;
  /** @maxLength 80 */
  engDescription?: string | null;
  inUseBookkeeping?: boolean;
  inUseEstate?: boolean;
  inUsePurchases?: boolean;
  inUseSalaries?: boolean;
  inUseSales?: boolean;
}

export interface BookkeepingAccount {
  dimension?: string;
  account?: string;
  description?: string;
  inUseBookkeeping?: boolean;
  inUseEstate?: boolean;
  inUsePurchases?: boolean;
  inUseSalaries?: boolean;
  inUseSales?: boolean;
}

export interface BookkeepingDimension {
  dimension?: string;
  description?: string;
  inUseBookkeeping?: boolean;
  inUseEstate?: boolean;
  inUsePurchases?: boolean;
  inUseSalaries?: boolean;
  inUseSales?: boolean;
}

export interface VoucherType {
  /** Account type id. */
  id?: number;
  /** Account type usage. */
  usage?: string;
  description?: string;
}

export interface FiscalYear {
  /** Fiscal year id */
  id?: number;
  /** Begin date of fiscal year in "yyyy-mm-dd" format. */
  startDate?: string;
  /** End date of fiscal year in "yyyy-mm-dd" format. */
  endDate?: string;
  fiscalYearStatus?: 'OPEN' | 'CLOSED' | 'PERMANENTLY_CLOSED';
}

export interface BookkeepingMonth {
  /** Bookkeeping month id. */
  bookkeepingMonth?: number;
  status?: 'OPEN' | 'CLOSED';
  /** Corresponding fiscal year. */
  fiscalYear?: number;
}

export interface ArchiveAppDocumentPutResponse {
  branchId?: number;
  hasErrors?: boolean;
  errorMessage?: string;
}

export interface VoucherAttachmentResponse {
  searchId?: number;
  searchCount?: number;
  hasErrors?: boolean;
  errorMessage?: string;
  /** List of attachment files */
  archiveObjects?: ArchiveObjectResponse[];
}

export interface ArchiveObjectResponse {
  objectId?: string;
  objectDescription?: string;
  sizeBytes?: number;
  mimeType?: string;
}

export interface VatCodeResponse {
  /** Vat id in Fivaldi. */
  vatId?: number;
  vatAccount?: number;
  vatAccount2?: number;
  /** List of vat percentages order descending by start date. */
  vatPercentages?: VatPercentageResponse[];
}

export interface VatPercentageResponse {
  /** Vat code in Fivaldi. */
  vatPercentageCode?: string;
  percentage?: number;
  deductionPercentage?: number;
  description?: string;
  /**
   * Vat percentage start date.
   * @format date
   */
  startDate?: string;
}

export interface FetchVoucherResponse {
  /** Id of voucher type. */
  voucherType?: number;
  /** Voucher Type name. */
  voucherTypeName?: string;
  /** Fivaldi voucher number. */
  voucherNumber?: string;
  /**
   * Date when voucher was issued.
   * @format date
   */
  voucherDate?: string;
  /**
   * Voucher due date.
   * @format date
   */
  dueDate?: string;
  /** Voucher period id yyyyMM format. */
  accountingPeriod?: number;
  /** fiscal year id */
  fiscalYearId?: string;
  /** Customer id */
  customerId?: string;
  /** Customer name */
  customerName?: string;
  /** flag for deleted status */
  isDeleted?: boolean;
  voucherEntries?: VoucherEntryResponse[];
}

export interface VoucherEntryResponse {
  /** Voucher entry number inside voucher. */
  entryNumber?: number;
  /** Description of the voucher entry. */
  description?: string;
  /** Ammount of the voucher entry. */
  amount?: number;
  /** Balance code of the voucher entry. */
  balanceCode?: number;
  /** Account number of the voucher entry. */
  accountNumber?: number;
  /** Account name of the voucher entry. */
  accountName?: string;
  dimension?: VoucherEntryDimension;
  vat?: EntryVat;
}

export interface EntryVat {
  /** Fivaldi vat code of the voucher entry. */
  vatCode?: string;
  /** Vat amount of the voucher entry. */
  vatAmount?: number;
  /** Vat account number of the voucher entry. */
  vatAccount?: string;
  /** Vat account name of the voucher entry. */
  vatAccountName?: string;
  /** Second vat account number of the voucher entry. */
  vatAccount2?: string;
  /** Second vat account name of the voucher entry. */
  vatAccount2Name?: string;
}

export interface VoucherEntryDimension {
  /** First dimension of the voucher entry */
  dimension1?: string;
  /** Name of the first dimension in the voucher entry */
  dimension1Name?: string;
  /** Second dimension of the voucher entry */
  dimension2?: string;
  /** Name of the second dimension in the voucher entry */
  dimension2Name?: string;
  /** Voucher entry's third dimension */
  dimension3?: string;
  /** Name of the third dimension in the voucher entry */
  dimension3Name?: string;
  /** Voucher entry's fourth dimension */
  dimension4?: string;
  /** Name of the fourth dimension in the voucher entry */
  dimension4Name?: string;
}

export interface VoucherImportRequest {
  /** Id of voucher type. It can be fetched using GET voucher type endpoint. */
  voucherTypeId?: number;
  /** Voucher number generated by client. */
  originalVoucherNumber?: string;
  /**
   * Date of voucher.
   * @format date (yyyy-MM-dd)
   */
  voucherDate?: string;
  /**
   * Bookkeeping month in yyyyMM format.
   * @min 200001
   * @max 209912
   */
  bookkeepingMonth?: number;
  /** Voucher vat type. CALCULATED- Fivaldi will not make any calculation. AUTO- Fivaldi will calculate vat based on default settings. */
  vatType?: 'CALCULATED' | 'AUTO';
  /** A flag that instructs Fivaldi if it should validate sum of voucher entries belonging to a voucher to be 0. */
  validateEntrySum?: boolean | null;
  voucherEntries?: VoucherEntryRequest[];
}

export interface VoucherEntryRequest {
  /** Amount of voucher entry. */
  amount?: number;
  /** Account number of the voucher entry. */
  accountNumber?: string;
  /**
   * Balance code of the voucher entry.
   * @maxLength 2
   */
  balanceCode?: string | null;
  /** First dimension's value of the voucher entry */
  dimensionValue1?: string | null;
  /** Second dimension's value of the voucher entry */
  dimensionValue2?: string | null;
  /** Third dimension's value of the voucher entry */
  dimensionValue3?: string | null;
  /** Fourth dimension's value of the voucher entry */
  dimensionValue4?: string | null;
  /** Description of the voucher entry. */
  description?: string | null;
  vat?: VoucherEntryVatRequest;
}

export interface VoucherEntryVatRequest {
  /** Vat code in Fivaldi. */
  vatCode?: string | null;
  /** Voucher entry vat amount. */
  vatAmount?: number | null;
  /** Vat account number of the voucher entry. */
  account?: string | null;
  /** Second vat account number of the voucher entry. */
  account2?: string | null;
}

export interface VoucherImportResponse {
  /** A voucher number that will be generated by Fivaldi. */
  fivaldiVoucherNumber?: number;
}

export interface AccountBalance {
  /** Account number */
  account?: string;
  /** Account balance */
  balance?: number;
  /** Account credit sum */
  debitSum?: number;
  /** Account debit sum */
  creditSum?: number;
}

export type PurchaseInvoiceComments = Comment[];

export interface Comment {
  /** Company identifier */
  companyId?: number;
  /** Comment identifier (will be generated in the API) */
  commentId?: number;
  /** Invoice identifier */
  invoiceId?: number;
  /** Node identifier */
  nodeId?: number;
  /** Comment's text */
  text?: string;
  /**
   * Create time of the comment (will be generated in the API)
   * @pattern date
   */
  createTime?: string;
  /** User that created the comment (checked by the API) */
  createUser?: string;
  /** Marks important comments */
  isImportant?: boolean;
  /**
   * Date when the comment is deleted
   * @pattern date
   */
  deleteOn?: string;
}

export interface GeneralResponseEnvelope {
  /** Status of the http request */
  status?: string;
  /** HTTP status code */
  httpResponseCode?: string;
  /** Fetch time in milliseconds */
  fetchedAt?: string;
  /** List of errors */
  errors?: ResponseError[];
}

export interface ResponseError {
  /** Unique error code */
  code?: string;
  /** Name of the field (if applicable) where error occured */
  fieldName?: string;
  /** error message */
  errorMsg?: string;
}

export interface ExternalAddressResponseDTO {
  /** Fivaldi will set this when address is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when address is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Name of country that correspond to countryCode (Maa) */
  country?: string;
  /** Country code for address with ISO 3166-1 standard (VAT-maakoodi) */
  countryCode?: string;
  /** Address id */
  id?: number;
  /** Address pecific person name to address (Yhteyshenkilön nimi) */
  name?: string;
  /** Person id links the address to person */
  personId?: number;
  /** Address pecific phone number to address (Yhteyshenkilön numero) */
  phoneNumber?: string;
  /** Postal address (Postitoimipaikka) */
  postalAddress?: string;
  /** Postal code (Postinumero) */
  postalCode?: string;
  /** Street address (Lähiosoite) */
  streetAddress?: string;
  /** Type of the address (Osoitetyyppi) */
  type?: 'MAILING_ADDRESS' | 'STREET_ADDRESS' | 'TEMPORARY_ADDRESS' | 'PREVIOUS_ADDRESS';
  /** Address type description */
  typeDescription?: string;
  /** Address is valid until. (Voimassa) */
  validEnd?: string;
  /** Address validity starts. (Voimassa) */
  validStart?: string;
}

export interface ExternalSendingGroupsResponseDTO {
  /** Fivaldi will set this when address is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when address is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Person id links the address to person */
  personId?: number;
  /** Person id links the address to person */
  sendingGroupId?: number;
  /** Default sending method */
  defaultSendingMethod?: 'PRINTING' | 'EMAIL' | 'PRINTING_SERVICE';
  /** Sending method */
  sendingMethod?: 'PRINTING' | 'EMAIL' | 'PRINTING_SERVICE' | 'DEFAULT_SENDING_METHOD';
  /** Name of the sending group */
  sendingGroupName?: string;
}

export interface ExternalEInvoiceAddressResponseDTO {
  /** Fivaldi will set this when e-invoice address is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when e-invoice address is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Direct debit (Suoramaksu) */
  directDebit?: boolean;
  /** Invoice method id in Fivaldi (Välitystapa) */
  invoiceTransmissionType?: string;
  /** Invoice recipient address (Verkkolaskuosoite) */
  invoiceRecipientAddress?: string;
  /** Invoice recipient intermediator address (Välittäjätunnus) */
  invoiceRecipientIntermediatorAddress?: string;
  /** Person id links the invoice address to person */
  personId?: number;
}

export interface ExternalEstatePersonResponseDTO {
  /** Additional information for person */
  additionalInformation?: string;
  /** Business id (Y-tunnus) */
  businessId?: string;
  /** Fivaldi will set this when person is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when person is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Date of birth. values can be null or date of birth. Format dd.mm.yyyy (Syntymäaika) */
  dateOfBirth?: string;
  /** E-mail (Sähköposti) */
  email?: string;
  /** First name (Etunimi) */
  firstName?: string;
  /** Last name (Sukunimi) */
  lastName?: string;
  /** Mobile phone number (Matkapuhelin) */
  mobilePhoneNumber?: string;
  /** ationality for person with ISO 3166-1 standard (Kansalaisuus) */
  nationality?: string;
  /** Person other names (Muut nimet) */
  otherNames?: string;
  /** Id that identifies person in Fivaldi */
  personId?: number;
  /** Person previous name (Entinen nimi) */
  previousName?: string;
  /** True if person is non-disclosure for personal safety reasons (Turvakiellossa) */
  securityRestriction?: boolean;
  /** Social security number. values=null or full social security number. (Henkilötunnus) */
  socialSecurityNumber?: string;
  /** VAT country code (VAT-maakoodi) */
  vatCountryCode?: string;
  /** Work phone number (Työpuhelin) */
  workPhoneNumber?: string;
}

export interface ExternalEstatePersonDetailsResponseDTO {
  /** Additional information for person */
  additionalInformation?: string;
  addresses?: ExternalAddressResponseDTO[];
  /** Business id (Y-tunnus) */
  businessId?: string;
  /** Fivaldi will set this when Person is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when person is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Date of birth. values can be null or date of birth. Format dd.mm.yyyy (Syntymäaika) */
  dateOfBirth?: string;
  einvoiceInformation?: ExternalEInvoiceAddressResponseDTO[];
  /** Business id (Y-tunnus) */
  email?: string;
  /** First name (Etunimi) */
  firstName?: string;
  /** Home phone number (Kotipuhelin) */
  homePhoneNumber?: string;
  /** Last name (Sukunimi) */
  lastName?: string;
  /** Mobile phone number (Matkapuhelin) */
  mobilePhoneNumber?: string;
  /** ationality for person with ISO 3166-1 standard (Kansalaisuus) */
  nationality?: string;
  /** Person other names (Muut nimet) */
  otherNames?: string;
  personId?: number;
  personRoles?: ExternalPersonRoleResponseDTO[];
  /** Person previous name (Entinen nimi) */
  previousName?: string;
  /** True if person is non-disclosure for personal safety reasons (Turvakiellossa) */
  securityRestriction?: boolean;
  /** Social security number. values=null or full social security number. (Sosiaaliturvatunnus) */
  socialSecurityNumber?: string;
  /** VAT country code (VAT-maakoodi) */
  vatCountryCode?: string;
  /** Work phone number (Työpuhelin) */
  workPhoneNumber?: string;
  sendingGroups?: ExternalSendingGroupsResponseDTO[];
}

export interface ExternalPersonRoleResponseDTO {
  /** Fivaldi will set this when person role is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when person role is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Person role end date (Voimassa) */
  endDate?: string;
  /** Fivaldi role id. List of role id's can be fetched from /companies/{cuid}/estate-person/getCompanyPersonRolesInUse API. */
  roleId?: number;
  /** Person role name (Henkilörooli) */
  personGroupName?: string;
  /** Person id links the role to person */
  personId?: number;
  /** Start date of person role (Voimassa) */
  startDate?: string;
}

export interface ExternalAddressRequestDTO {
  /**
   * Name of country that correspond to countryCode (Maa)
   * @minLength 0
   * @maxLength 60
   */
  country?: string | null;
  /**
   * Country code for address with ISO 3166-1 standard (VAT-maakoodi)
   * @minLength 0
   * @maxLength 3
   */
  countryCode?: string | null;
  /**
   * Address pecific person name to address (Yhteyshenkilön nimi)
   * @minLength 0
   * @maxLength 60
   */
  name?: string | null;
  /**
   * Address pecific phone number to address (Yhteyshenkilön numero)
   * @minLength 0
   * @maxLength 25
   */
  phoneNumber?: string | null;
  /**
   * Postal address (Postitoimipaikka)
   * @minLength 0
   * @maxLength 60
   */
  postalAddress?: string | null;
  /**
   * Postal code (Postinumero)
   * @minLength 0
   * @maxLength 10
   */
  postalCode?: string | null;
  /**
   * Street address (Lähiosoite)
   * @minLength 0
   * @maxLength 60
   */
  streetAddress?: string;
  /** Address type (Osoitetyyppi) */
  type?: 'MAILING_ADDRESS' | 'STREET_ADDRESS' | 'TEMPORARY_ADDRESS' | 'PREVIOUS_ADDRESS';
  /**
   * Address type description
   * @minLength 0
   * @maxLength 30
   */
  typeDescription?: string | null;
  /** Address is valid until. Format dd.mm.yyyy (Voimassa) */
  validEnd?: string | null;
  /** Address is validity starts. Format dd.mm.yyyy (Voimassa) */
  validStart?: string | null;
}

export interface ExternalEInvoiceAddressRequestDTO {
  /** Direct debit (Suoramaksu) */
  directDebit?: boolean | null;
  /**
   * Invoice method id in Fivaldi (Välitystapa)
   * @minLength 1
   * @maxLength 10
   */
  invoiceTransmissionType?: string;
  /**
   * Invoice recipient address (Verkkolaskuosoite)
   * @minLength 1
   * @maxLength 35
   */
  invoiceRecipientAddress?: string;
  /**
   * Invoice recipient intermediator address (Välittäjätunnus)
   * @minLength 1
   * @maxLength 30
   */
  invoiceRecipientIntermediatorAddress?: string;
}

export interface ExternalEInvoiceAddressUpdateRequestDTO {
  /** Direct debit (Suoramaksu) */
  directDebit?: boolean | null;
  /**
   * Invoice recipient address (Verkkolaskuosoite)
   * @minLength 1
   * @maxLength 35
   */
  invoiceRecipientAddress?: string;
  /**
   * Invoice recipient intermediator address (Välittäjätunnus)
   * @minLength 1
   * @maxLength 30
   */
  invoiceRecipientIntermediatorAddress?: string;
}

export interface ExternalEstatePersonRequestDTO {
  /**
   * Additional information for person (Lisätiedot)
   * @minLength 0
   * @maxLength 4000
   */
  additionalInformation?: string | null;
  /**
   * Business id (Y-tunnus)
   * @minLength 0
   * @maxLength 12
   */
  businessId?: string | null;
  /** Date of birth. Values can be null or date of birth in format dd.mm.yyyy (Syntymäaika) */
  dateOfBirth?: string | null;
  /**
   * E-mail (Sähköposti)
   * @minLength 0
   * @maxLength 128
   */
  email?: string | null;
  /**
   * First name (Etunimi)
   * @minLength 0
   * @maxLength 60
   */
  firstName?: string | null;
  /**
   * Home phone number (Kotipuhelin))
   * @minLength 0
   * @maxLength 25
   */
  homePhoneNumber?: string | null;
  /**
   * Last name (Sukunimi)
   * @minLength 0
   * @maxLength 60
   */
  lastName?: string;
  /**
   * Mobile phone number (Matkapuhelin)
   * @minLength 0
   * @maxLength 25
   */
  mobilePhoneNumber?: string | null;
  /**
   * Nationality for person with ISO 3166-1 standard  (Kansalaisuus)
   * @minLength 0
   * @maxLength 3
   */
  nationality?: string;
  /**
   * Person other names (Muut nimet)
   * @minLength 0
   * @maxLength 60
   */
  otherNames?: string | null;
  /**
   * Person previous name (Entinen nimi)
   * @minLength 0
   * @maxLength 60
   */
  previousName?: string | null;
  /**
   * Social security number. values=null or full social security number. (Henkilötunnus)
   * @minLength 0
   * @maxLength 4
   */
  socialSecurityNumber?: string;
  /**
   * VAT country code (VAT-maakoodi)
   * @minLength 0
   * @maxLength 2
   */
  vatCountryCode?: string | null;
  /**
   * Work phone number (Työpuhelin)
   * @minLength 0
   * @maxLength 25
   */
  workPhoneNumber?: string | null;
}

export interface ExternalEstatePersonDetailsRequestDTO {
  /**
   * Additional information for person (Lisätiedot)
   * @minLength 0
   * @maxLength 4000
   */
  additionalInformation?: string | null;
  addresses?: ExternalAddressRequestDTO[] | null;
  /**
   * Business id (Y-tunnus)
   * @minLength 0
   * @maxLength 12
   */
  businessId?: string | null;
  /** Date of birth. Values can be null or date of birth in format dd.mm.yyyy (Syntymäaika) */
  dateOfBirth?: string | null;
  einvoiceInformation?: ExternalEInvoiceAddressRequestDTO[];
  /**
   * E-mail (Sähköposti)
   * @minLength 0
   * @maxLength 128
   */
  email?: string | null;
  /**
   * First name (Etunimi)
   * @minLength 0
   * @maxLength 60
   */
  firstName?: string | null;
  /**
   * Home phone number (Kotipuhelin)
   * @minLength 0
   * @maxLength 25
   */
  homePhoneNumber?: string | null;
  /**
   * Last name (Sukunimi)
   * @minLength 0
   * @maxLength 60
   */
  lastName?: string;
  /**
   * Mobile phone number (Matkapuhelin)
   * @minLength 0
   * @maxLength 25
   */
  mobilePhoneNumber?: string | null;
  /**
   * Nationality for person with ISO 3166-1 standard (Kansalaisuus)
   * @minLength 0
   * @maxLength 3
   */
  nationality?: string;
  /**
   * Person other names (Muut nimet)
   * @minLength 0
   * @maxLength 60
   */
  otherNames?: string | null;
  personRoles?: ExternalPersonRoleRequestDTO[] | null;
  /**
   * Person previous name (Entinen nimi)
   * @minLength 0
   * @maxLength 60
   */
  previousName?: string | null;
  /**
   * Social security number. values=null or full social security number. (Henkilötunnus)
   * @minLength 0
   * @maxLength 4
   */
  socialSecurityNumber?: string;
  /**
   * VAT country code (VAT-maakoodi)
   * @minLength 0
   * @maxLength 2
   */
  vatCountryCode?: string | null;
  /**
   * Work phone number (Työpuhelin)
   * @minLength 0
   * @maxLength 25
   */
  workPhoneNumber?: string | null;
}

export interface ExternalPersonRoleRequestDTO {
  /** Person role end date. Format dd.mm.yyyy (Voimassa) */
  endDate?: string | null;
  /** Fivaldi role id. */
  roleId?: number;
  /** Start date of person role. Format dd.mm.yyyy (Voimassa) */
  startDate?: string | null;
}

export interface ExternalPersonRoleUpdateRequestDTO {
  /** Person role end date. Format dd.mm.yyyy (Voimassa) */
  endDate?: string | null;
  /** Person role start date. Format dd.mm.yyyy (Voimassa) */
  startDate?: string | null;
}

export interface ExternalCompanyPersonRoleResponseDTO {
  /** Fivaldi will set this when company person role is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when company person role is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Fivaldi role id */
  companyPersonGroupId?: number;
  /** Person role name (Henkilörooli) */
  name?: string;
}

export interface TransmissionTypeDTO {
  /**
   * Fivaldi invoice method id (Välitystapa id)
   * @minLength 0
   * @maxLength 10
   */
  transmissionId?: string | null;
  /**
   * Fivaldi invoice method id description (Välitystapa)
   * @minLength 0
   * @maxLength 40
   */
  description?: string | null;
  /**
   * Fivaldi invoice method id type (Tyyppi id)
   * @minLength 2
   * @maxLength 2
   */
  type?: string | null;
}

export interface ExternalApartmentResponseDTO {
  /**
   * Fivaldi will set this when apartment is inserted or updated (Muutosaika)
   * @format date-time
   */
  changeTime?: string | null;
  /**
   * Fivaldi will set this when apartment is inserted or updated (Muutoskäyttäjä)
   * @maxLength 30
   */
  changeUser?: string | null;
  /**
   * Apartment id
   * @min 1
   * @max 999999999
   */
  apartmentId?: number | null;
  /**
   * Building id
   * @max 999
   */
  buildingId?: number | null;
  /**
   * Apartment identifier (Tunnus)
   * @maxLength 20
   */
  apartmentIdentifier?: string | null;
  /**
   * Apartment floor (Kerros)
   * @maxLength 6
   */
  floor?: string | null;
  /**
   * Building stair (Porras)
   * @maxLength 2
   */
  stair?: string | null;
  /**
   * Apartment type. Apartment type created in Fivaldi (Huoneistotyyppi)
   * @maxLength 2
   */
  apartmentType?: string | null;
  /**
   * Apartment sort (Yhtiöjärjestyksen mukainen käyttötarkoitus. AS = Asuinhuoneisto, AH = Autohallipaikka, A = Autotalli, L = Liikehuoneisto, M = Muu, T = Tehda- tai työhuoneisto, K = Toimistohuoneisto, V = Varasto)
   * @maxLength 2
   */
  apartmentSort?: 'AS' | 'AH' | 'A' | 'L' | 'M' | 'T' | 'K' | 'V' | null;
  /**
   * Other premises (Muut tilat)
   * @maxLength 30
   */
  otherPremises?: string | null;
  /**
   * Other restrictions (Muu rajoitus)
   * @maxLength 30
   */
  otherRestrictions?: string | null;
  /**
   * Other posession restriction (Muu hallintarajoitus)
   * @maxLength 30
   */
  otherPosessionRestriction?: string | null;
  /** Right of possession (Lesken hallintaoikeus) */
  widowRightOfPosession?: boolean | null;
  /**
   * Special finance form (Erityinen rahoitusmuoto)
   * @maxLength 80
   */
  specialFinancingForm?: string | null;
  /**
   * Significant failure (Huomattava vika)
   * @maxLength 80
   */
  significantFailure?: string | null;
  /**
   * Confiscation description (Haltuunotto selite)
   * @maxLength 30
   */
  confiscation?: string | null;
  /**
   * Confiscation start. Format dd.MM.yyyy HH:mm:ss (Haltuunottoaika alku)
   * @format date-time
   */
  confiscationStart?: string | null;
  /**
   * Confiscation end. Format dd.MM.yyyy HH:mm:ss (Haltuunottoaika loppu)
   * @format date-time
   */
  confiscationEnd?: string | null;
  /** Confiscation company rent (Yhtiön toimesta vuokrattu) */
  confiscationCompanyRent?: boolean | null;
  /**
   * Expropriate right (Lunastusoikeus)
   * @maxLength 30
   */
  rightToExpropriate?: string | null;
  /**
   * Order number (Järjestysnumero)
   * @max 999999999
   */
  orderNumber?: number | null;
  /**
   * Valid start (Huoneisto voimassa alku)
   * @format date-time
   */
  validStart?: string | null;
  /**
   * Valid end (Huoneisto voimassa loppu)
   * @format date-time
   */
  validEnd?: string | null;
  /** Is apartment shown in house managers certificate (Ilmoita isännöitsijäntodistuksella) */
  isInHouseManagersCertificate?: boolean | null;
  /** Company owned (Yhtiön omistama) */
  ownedByCompany?: boolean | null;
  /**
   * Share holders apartment type (Osakkeenomistajan ilmoittama huoneistotyyppi)
   * @maxLength 2
   */
  shareholdersApartmentType?: string | null;
  /** Applied as VAT taxable (Hakeutunut ALV-verolliseksi) */
  appliedForVatTaxable?: boolean;
  /** Share group type (Osakeryhmätunnus) */
  shareGroupType?: string;
  /**
   * Apartment usage as reported in building permit (Rakennusluvan mukainen käyttötarkoitus. AS = Asuinhuoneisto, AH = Autohallipaikka, A = Autotalli, L = Liikehuoneisto, M = Muu, T = Tehda- tai työhuoneisto, K = Toimistohuoneisto, V = Varasto)
   * @maxLength 2
   */
  buildingPermitApartmentSort?: 'AS' | 'AH' | 'A' | 'L' | 'M' | 'T' | 'K' | 'V' | null;
  /** Purposed use (Käyttötarkoitus) */
  purposedUse?: string;
  /** Management target type (Hallintakohdetyyppi) */
  managementTargetType?: string;
  /** Other purposed use description (Muu käyttötarkoitus selite) */
  otherPurposedUseDescription?: string;
  /** Electronic registration of ownership for an apartment in the Residential and Commercial Property Information System (Sähköinen omistajamerkintä) */
  electronicRegistrationOfOwnership?: boolean;
}

export interface ExternalApartmentDetailsResponseDTO {
  /** Fivaldi will set this when apartment is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when apartment is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Apartment id */
  apartmentId?: number;
  /** Building id */
  buildingId?: number;
  /** Apartment identifier (Tunnus) */
  apartmentIdentifier?: string;
  /** Apartment floor (Kerros) */
  floor?: string;
  /** Building stair (Porras) */
  stair?: string;
  /** Apartment type. Apartment type created in Fivaldi (Huoneistotyyppi) */
  apartmentType?: string;
  /** Apartment sort (Yhtiöjärjestyksen mukainen käyttötarkoitus. AS = Asuinhuoneisto, AH = Autohallipaikka, A = Autotalli, L = Liikehuoneisto, M = Muu, T = Tehda- tai työhuoneisto, K = Toimistohuoneisto, V = Varasto) */
  apartmentSort?: 'AS' | 'AH' | 'A' | 'L' | 'M' | 'T' | 'K' | 'V';
  /** Other premises (Muut tilat) */
  otherPremises?: string;
  /** Other restrictions (Muu rajoitus) */
  otherRestrictions?: string;
  /** Other posession restriction (Muu hallintarajoitus) */
  otherPosessionRestriction?: string;
  /** Right of possession (Lesken hallintaoikeus) */
  widowRightOfPosession?: boolean;
  /** Special finance form (Erityinen rahoitusmuoto) */
  specialFinancingForm?: string;
  /** Significant failure (Huomattava vika) */
  significantFailure?: string;
  /** Confiscation description (Haltuunotto selite) */
  confiscation?: string;
  /** Confiscation start. Format dd.mm.yyyy (Haltuunottoaika alku) */
  confiscationStart?: string;
  /** Confiscation end. Format dd.mm.yyyy (Haltuunottoaika loppu) */
  confiscationEnd?: string;
  /** Confiscation company rent (Yhtiön toimesta vuokrattu) */
  confiscationCompanyRent?: boolean;
  /** Expropriate right (Lunastusoikeus) */
  rightToExpropriate?: string;
  /** Order number (Järjestysnumero) */
  orderNumber?: number;
  /** Valid start (Huoneisto voimassa alku) */
  validStart?: string;
  /** Valid end (Huoneisto voimassa loppu) */
  validEnd?: string;
  /** Is apartment shown in house managers certificate (Ilmoita isännöitsijäntodistuksella) */
  isInHouseManagersCertificate?: boolean;
  /** Company owned (Yhtiön omistama) */
  ownedByCompany?: boolean;
  /** Share holders apartment type (Osakkeenomistajan ilmoittama huoneistotyyppi) */
  shareholdersApartmentType?: string;
  /** Applied as VAT taxable (Hakeutunut ALV-verolliseksi) */
  appliedForVatTaxable?: boolean;
  /** Purposed use (Käyttötarkoitus) */
  purposedUse?: string;
  /** Management target type (Hallintakohdetyyppi) */
  managementTargetType?: string;
  /** Other purposed use description (Muu käyttötarkoitus selite) */
  otherPurposedUseDescription?: string;
  /** Share group type (Osakeryhmätunnus) */
  shareGroupType?: string;
  /** Electronic registration of ownership for an apartment in the Residential and Commercial Property Information System (Sähköinen omistajamerkintä) */
  electronicRegistrationOfOwnership?: boolean;
  /** Apartment usage as reported in building permit (Rakennusluvan mukainen käyttötarkoitus. AS = Asuinhuoneisto, AH = Autohallipaikka, A = Autotalli, L = Liikehuoneisto, M = Muu, T = Tehda- tai työhuoneisto, K = Toimistohuoneisto, V = Varasto) */
  buildingPermitApartmentSort?: 'AS' | 'AH' | 'A' | 'L' | 'M' | 'T' | 'K' | 'V';
  shareseries?: ExternalApartmentShareSeriesDTO[];
  apartmentAmounts?: ExternalApartmentAmountsDTO[];
  additionalInfo?: ExternalAdditionalInfoDTO;
  apartmentNotInUsePeriods?: ExternalApartmentNotInUsePeriodsDTO[];
  apartmentChangingAmounts?: ExternalApartmentChangingAmountsDTO[];
  building?: ExternalBuildingResponseDTO;
}

export interface ExternalAdditionalInfoDTO {
  /** Fivaldi will set this when person additional information is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when person additional information is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** If these are company level additional informations then typeNumber is 0. If these are additional informations for apartment then typeNumber will be apartment id. */
  typeNumber?: number;
  /** Text that will show in both house certificate and rent house certificate. (Molemmille isännöitsijäntodistuksille) */
  bothHouseCertificates?: string;
  /** Text that will show in house managers certificate. (Isännöitsijäntodistukselle) */
  houseCertificate?: string;
  /** Text that will show in rent house managers certificate. (Isännöitsijäntodistukselle vuokrausta varten) */
  rentHouseCertificate?: string;
  /** Other additional information. Won't show in house managers certificate. (Muut lisätiedot) */
  other?: string;
  /** Text that will show in register of occupants. (Talonkirjaotteelle) */
  registerOfOccupants?: string;
}

export interface ExternalApartmentAmountsDTO {
  /** Fivaldi will set this when apartment amount is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when apartment amount is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Apartment id in Fivaldi */
  apartmentId?: number;
  /** Apartment amount id in Fivaldi (P = Pinta-ala, J = Jyvitetty pinta-ala, T = Tarkistettu pinta-ala, M = Muu, K = Kerrostasoala) */
  apartmentAmountId?: 'P' | 'J' | 'T' | 'M' | 'K';
  /** Name (Määrän perusteen nimi) */
  name?: string;
  /** Amount (Määrän perusteen määrä) */
  amount?: number;
  /** Unit (Yksikkö) */
  unit?: string;
  /** Unit description (Yksikön selite) */
  unitDescription?: string;
  /** Order in which amounts are returned (Määrän perusteiden tulostusjärjestys) */
  order?: number;
}

export interface ExternalApartmentChangingAmountsDTO {
  /** Fivaldi will set this when apartment changing amount is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when apartment changing amount is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Apartment id */
  apartmentId?: number;
  /** Apartment changing amount id */
  apartmentChangingAmountId?: number;
  /** Start date. Format dd.mm.yyyy (Alkamisaika) */
  startDate?: string;
  /** Amount (Määrä) */
  amount?: number;
}

export interface ExternalApartmentNotInUsePeriodsDTO {
  /** Fivaldi will set this when apartment not in use period is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when apartment not in use period is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Apartment id */
  apartmentId?: number;
  /** Apartment not in use id */
  apartmentNotInUseId?: number;
  /** Start date (Pois käytöstä alku) */
  startDate?: string;
  /** End date (Pois käytöstä loppu) */
  endDate?: string;
  /** Description (Selite) */
  description?: string;
}

export interface ExternalApartmentShareSeriesDTO {
  /** Fivaldi will set this when apartment share series is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when apartment share series is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Apartment id */
  apartmentId?: number;
  /** Apartment share series id */
  apartmentShareSeriesId?: number;
  /** Share series id (Osakesarja) */
  shareSeriesId?: string;
  /** different date of issue (Poikkeava antopäivä) */
  differentDateOfIssue?: string;
  /** begin (Asakkeet alkavat) */
  begin?: number;
  /** end (Osakkeet päättyvät) */
  end?: number;
  /** sum (Yhteensä) */
  sum?: number;
}

export interface ExternalBondResponseDTO {
  /** Fivaldi will set this when bond is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when bond is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Apartment id */
  apartmentId?: number;
  /** Person id */
  personId?: number;
  /** Bond type (Sidostyyppi. OWNER = Omistaja, TENANT = Vuokralainen, OTHER = Muu) */
  type?: 'OWNER' | 'TENANT' | 'OTHER';
  /** Apartment usage (Käyttö. OWNER = Omistaja, RENTED = Vuokrattu) */
  apartmentUsage?: 'OWNER' | 'RENTED';
  /** Bond begin date. Format dd.mm.yyyy (Voimassa alku) */
  beginDate?: string;
  /** Bond end date. Format dd.mm.yyyy (Voimassa loppu) */
  endDate?: string;
  /** Moving in date. Format dd.mm.yyyy (Muuttopäivä) */
  movingInDate?: string;
  /** Leaving date. Format dd.mm.yyyy (Lähtöpäivä) */
  leavingDate?: string;
  /** Trading date. Format dd.mm.yyyy (Kauppapäivä) */
  tradingDate?: string;
  /** Marking date. Format dd.mm.yyyy (Merkintäpäivä) */
  markingDate?: string;
  /** Owner share numerator (Omistusosuus osoittaja) */
  ownersShareNumerator?: number;
  /** Owner share denominator (Omistusosuus nimittäjä) */
  ownersShareDenominator?: number;
  /** Regulation habit (Osakkeiden Saantotapa) */
  regulationHabit?: string;
  /** Old owner share numerator (Vanha omistusosuus osoittaja) */
  oldOwnersShareNumerator?: number;
  /** Old owner share numerator (Vanha omistusosuus nimittäjä) */
  oldOwnersShareDenominator?: string;
  /** Bond id (Sidosnumero) */
  referenceNumber?: number;
  /** deviant due day (Poikkeava eräpäivä) */
  deviantDueDay?: number;
  /** Print (Tuloste. COMPANY_DEFAULT = Käytetään yrityksen oletusta, WIRE_TRANSFER = Tilisiirto, WIRE_TRANSFER_MONTHLY_COMBINED = Tilisiirto, kk yhdistetty, PAYMENT_LIST = Maksulista, PAYMENT_LIST_MONTHLY_COMBINED = Maksu, kk yhdistetty) */
  print?: 'COMPANY_DEFAULT' | 'WIRE_TRANSFER' | 'WIRE_TRANSFER_MONTHLY_COMBINED' | 'PAYMENT_LIST' | 'PAYMENT_LIST_MONTHLY_COMBINED';
  /** Bank (Pankkitili tilisiirrolla) */
  bank?: string;
  /** Inhabitant (Asuminen) */
  inhabitant?: boolean;
  /** Collection ban (Perintäkielto) */
  collectionBan?: boolean;
  /** Interest ban (Korkokielto) */
  interestBan?: boolean;
  /** Compines all payments bonds payments that has same person id under same payment slip (Yhdistä maksut) */
  combinePayment?: boolean;
  /** Bond can't be e-invoiced or direct debited. (Ei e-laskua eikä suoramaksua) */
  noEInvoice?: boolean;
  /** Old reference number (Vanha viitenumero) */
  oldReferenceNumber?: string;
  /** Iban (IBAN) */
  iban?: string;
  /** Bic (BIC) */
  bic?: string;
}

export interface ExternalBondDetailsResponseDTO {
  /** Fivaldi will set this when bond is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when bond is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Apartment id */
  apartmentId?: number;
  /** Person id */
  personId?: number;
  /** Bond type (Sidostyyppi. OWNER = Omistaja, TENANT = Vuokralainen, OTHER = Muu) */
  type?: 'OWNER' | 'TENANT' | 'OTHER';
  /** Apartment usage  (Käyttö. OWNER = Omistaja, TENANT = Vuokrattu) */
  apartmentUsage?: 'OWNER' | 'TENANT';
  /** Bond begin date. Format dd.mm.yyyy (Voimassa alku) */
  beginDate?: string;
  /** Bond end date. Format dd.mm.yyyy (Voimassa loppu) */
  endDate?: string;
  /** Moving in date. Format dd.mm.yyyy (Muuttopäivä) */
  movingInDate?: string;
  /** Leaving date. Format dd.mm.yyyy (Lähtöpäivä) */
  leavingDate?: string;
  /** Trading date. Format dd.mm.yyyy (Kauppapäivä) */
  tradingDate?: string;
  /** Marking date. Format dd.mm.yyyy (Merkintäpäivä) */
  markingDate?: string;
  /** Owner share numerator (Omistusosuus osoittaja) */
  ownersShareNumerator?: number;
  /** Owner share denominator (Omistusosuus nimittäjä) */
  ownersShareDenominator?: number;
  /** Regulation habit (Osakkeiden saantotapa) */
  regulationHabit?: string;
  /** Old owner share numerator (Vanha omistusosuus osoittaja) */
  oldOwnersShareNumerator?: number;
  /** Old owner share numerator (Vanha omistusosuus nimittäjä) */
  oldOwnersShareDenominator?: string;
  /** Bond id (Sidosnumero) */
  referenceNumber?: number;
  /** deviant due day (Poikkeava eräpäivä) */
  deviantDueDay?: number;
  /** Print (Tuloste. COMPANY_DEFAULT = Käytetään yrityksen oletusta, WIRE_TRANSFER = Tilisiirto, WIRE_TRANSFER_MONTHLY_COMBINED = Tilisiirto, kk yhdistetty, PAYMENT_LIST = Maksulista, PAYMENT_LIST_MONTHLY_COMBINED = Maksu, kk yhdistetty) */
  print?: 'COMPANY_DEFAULT' | 'WIRE_TRANSFER' | 'WIRE_TRANSFER_MONTHLY_COMBINED' | 'PAYMENT_LIST' | 'PAYMENT_LIST_MONTHLY_COMBINED';
  /** Bank (Pankkitili tilisiirrolla) */
  bank?: string;
  /** Inhabitant (Asuminen) */
  inhabitant?: boolean;
  /** Collection ban (Perintäkielto) */
  collectionBan?: boolean;
  /** Interest ban (Korkokielto) */
  interestBan?: boolean;
  /** Compines all payments bonds payments that has same person id under same payment slip (Yhdistä maksut) */
  combinePayment?: boolean;
  /** Bond can't be e-invoiced or direct debited. (Ei e-laskua ja suoramaksua) */
  noEInvoice?: boolean;
  /** Old reference number (Vanha viitenumero) */
  oldReferenceNumber?: string;
  /** Iban (IBAN) */
  iban?: string;
  /** Bic (BIC) */
  bic?: string;
  bondInfoTexts?: string[];
  personAdditionalInformation?: ExternalAdditionalInformationResponseDTO;
  paymentTypes?: ExternalBondPaymentTypeResponseDTO[];
}

export interface ExternalAdditionalInformationResponseDTO {
  /** Fivaldi will set this when additional information is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when additional information is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Person additional information (Henkilötietojen lisätieto) */
  additionalInfo?: string;
}

export interface ExternalBondPaymentTypeResponseDTO {
  /** Fivaldi will set this when bond payment type is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when bond payment type is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Start date (Voimassa alku) */
  startDate?: string;
  /** End date (Voimassa loppu) */
  endDate?: string;
  /** Basis for amount (Määrän peruste) */
  basisForAmount?: string;
  /** Description of the basis for amount  (Määrän perusteen selite) */
  basisForAmountDescription?: string;
  /** Number of the payment type (Maksulajin numero) */
  paymentTypeId?: number;
  /** Payment type name (Maksulajin nimi) */
  paymentTypeName?: string;
  /** Amount (Määrä) */
  amount?: number;
  /** Payment type multiplier (Maksulajin hintatiedon kerroin) */
  paymentTypeMultiplier?: number;
  /** Multiplier (Sidoksella maksulajin kerroin) */
  multiplier?: number;
  /** Unit price (A-hinta) */
  unitPrice?: number;
  /** Payment types unit (Yksikkö) */
  unit?: string;
}

export interface ExternalMeterResponseDTO {
  /** Fivaldi will set this when meter is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when meter is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Meter id (Mittari nro) */
  meterId?: number;
  /** Apartment id (Huoneisto) */
  apartmentId?: number;
  /** Connection id (Kytkentä. BUILDING = Rakennukseen, APARTMENT = Huoneistoon, COMPANY = Yhtiön mittari) */
  connectionId?: 'BUILDING' | 'APARTMENT' | 'COMPANY';
  /** Unit */
  unit?: string;
  /** category name (Kulutuslajin nimi) */
  categoryName?: string;
  /** Integer count (Kokonaislukujen määrä) */
  integerCount?: number;
  /** Decimal count (Desimaalien määrä) */
  decimalCount?: number;
  /** Multiplier (Kerroin) */
  multiplier?: number;
  /** Save type (Tallennustapa. METER = Mittarin lukema, CONSUMPTION = Kulutus) */
  saveType?: 'METER' | 'CONSUMPTION';
  /** Prepayment start date (Lähtötilanteessa ennakkojen alkupäivä) */
  prepaymentStartDate?: string;
  /** Prepayment sum (Lähtötilanteessa ennakkojen alkusumma) */
  prepaymentSum?: number;
  /** Status (Tila) */
  status?: string;
  /** Main meter (Päämittari) */
  mainMeter?: number;
  /** Building number (Rakennus) */
  buildingNumber?: number;
  /** Meter that is used for warm water usage (Lämpimän käyttöveden mittari) */
  warmWaterUsageMeter?: number;
  /** not to report (Ei kulutusraporttiin) */
  notToReport?: boolean;
  /** No measured input (Ei kulutuslukemien syöttöä) */
  noMeasureInput?: boolean;
  /** External meter id (Rajapinta id) */
  externalMeterId?: string;
}

export interface ExternalMeterConsumptionResponseDTO {
  /** Fivaldi will set this when meter consumption is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when meter consumption is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Fivaldi meter id */
  meterId?: number;
  /** Read date */
  readDate?: string;
  /** Start amount */
  startAmount?: number;
  /** Meter value is saved by meter reading and not with consumption */
  reading?: number;
  /** Meter value is saved by consumption and not with meter reading */
  consumption?: number;
}

export interface ExternalApartmentMeterConsumptionsDTO {
  /** Meter id */
  meterId?: number;
  /** category name (Kulutuslajin nimi) */
  categoryName?: string;
  consumptions?: ConsumptionDTO[];
}

export interface ConsumptionDTO {
  /** Read date */
  readDate?: string;
  /** Meter reading value */
  reading?: number;
  /** Meter consumption value */
  consumption?: number;
  /** Fivaldi will set this when meter consumption is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when meter consumption is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
}

export interface ExternalMeterConsumptionRequestDTO {
  /** Meter id (Mittari id) */
  meterId?: number;
  /**
   * Consumption unit. Can be found from ExternalMeterResponseDTO unit-field.
   * @minLength 1
   */
  consumptionUnit?: string;
  /**
   * Read date. Format dd.mm.yyyy
   * @format date
   */
  readDate?: string;
  /** Meter value is saved by meter reading and not with consumption. */
  reading?: number | null;
  /** Meter value is saved by consumption and not with meter reading. If this is used then reading should not be given. */
  consumption?: number | null;
  /** Has meter spined (Mittarinpyörähdys) */
  meterSpinFlag?: boolean;
  /** When true and readDate same as previous readDate then reading or consumpsion will replace lastly added value. */
  replacementValueFlag?: boolean;
}

export interface ExternalBondRentLedgerResponseDTO {
  /** Bond id */
  referenceNumber?: string;
  /** Amount of receivable */
  receivable?: number;
  /** Amount of prepayment */
  prepayment?: number;
}

export type ExternalBondRentLedgerWithApartmentResponseDTO = ExternalBondRentLedgerResponseDTO & {
  /** Apartment id */
  apartmentId?: number;
  /** Apartment identifier */
  apartmentIdentifier?: string;
};

export type ExternalBondRentLedgerWithPersonResponseDTO = ExternalBondRentLedgerResponseDTO & {
  /** Person id */
  personId?: number;
  /** Person's first name */
  firstName?: string;
  /** Person's last name */
  lastName?: string;
  /** Person's other names */
  otherNames?: string;
  /** Person's previous name */
  previousName?: string;
};

export interface ExternalPaymentTypeResponseDTO {
  /** Fivaldi will set this when housing company details is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when housing company details is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Name of the payment type (Maksulajin nimi) */
  name?: string;
  /** Number of the payment type (Maksulajin numero) */
  paymentTypeId?: number;
  /** Ending date for payment type (Maksulajin päättymispäivä). Format dd.mm.yyyy */
  endDate?: string;
  /** Consumption type of the payment type (Maksulajin kulutuslaji) */
  consumptionType?: string;
  /** Unit of the payment type (Maksulajin yksikkö) */
  unit?: string;
  accounts?: ExternalPaymentTypeAccountResponseDTO;
  dimensions?: ExternalPaymentTypeDimensionResponseDTO;
  /** Priority of the payment type (Kohdistusprioriteetti) */
  convergencePriority?: number;
  validityMonths?: ExternalPaymentTypeValidityDTO;
  priceInfos?: ExternalPaymentTypePriceResponseDTO[];
}

export interface ExternalPaymentTypeAccountResponseDTO {
  /** Account number (Tulotilin numero) */
  kpAccount?: string;
  /** Account name (Tulotilin selite) */
  kpAccountName?: string;
  /** Account number (Siirtosaamistilin numero) */
  incomingEarningAccount?: string;
  /** Account name (Siirtosaamistilin selite) */
  incomingEarningAccountName?: string;
  /** Account number (Siirtovelkatilin numero) */
  incomingDepthAccount?: string;
  /** Account name (Siirtovelkatilin selite) */
  incomingDepthAccountName?: string;
}

export interface ExternalPaymentTypeDimensionResponseDTO {
  /** Dimension 1 number (Seurantakohde 1) */
  dimension1?: string;
  /** Dimension 1 name */
  dimension1Name?: string;
  /** Dimension 2 number (Seurantakohde 2) */
  dimension2?: string;
  /** Dimension 2 name */
  dimension2Name?: string;
  /** Dimension 3 number (Seurantakohde 3) */
  dimension3?: string;
  /** Dimension 3 name */
  dimension3Name?: string;
  /** Dimension 4 number (Seurantakohde 4) */
  dimension4?: string;
  /** Dimension 4 name */
  dimension4Name?: string;
}

export interface ExternalPaymentTypePriceResponseDTO {
  /** Begin date of the payment type (Alkukuukausi) */
  beginDate?: string;
  /** Alv% of the payment type(alv-prosentti) */
  vatType?: string;
  /** Price of the payment type (A-hinta) */
  vatPrice?: string;
  /** Multiplier of the payment type (Kerroin) */
  multiplier?: string;
  /** Fivaldi will set this when housing company details is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when housing company details is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
}

export interface ExternalPaymentTypeValidityDTO {
  /** tammi */
  kk1?: boolean;
  /** helmi */
  kk2?: boolean;
  /** maalis */
  kk3?: boolean;
  /** huhti */
  kk4?: boolean;
  /** touko */
  kk5?: boolean;
  /** kesä */
  kk6?: boolean;
  /** heinä */
  kk7?: boolean;
  /** elo */
  kk8?: boolean;
  /** syys */
  kk9?: boolean;
  /** loka */
  kk10?: boolean;
  /** marras */
  kk11?: boolean;
  /** joulu */
  kk12?: boolean;
}

export interface ExternalHousingCompanyDetailsResponseDTO {
  /** Fivaldi will set this when housing company details is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when housing company details is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** First official name (Virallinen nimi) */
  officialName?: string;
  /** Second official name (Lisänimi) */
  officialName2?: string;
  /** Cadaster date (Kaupparekisteripäivämäärä) */
  cadasterDate?: string;
  /** Articles of association date (Yhtiöjärjestyksen päivämäärä) */
  articlesOfAssociationDate?: string;
  /** Deviant article of association (Poikkeava yhtiöjärjestys) */
  deviantArticlesOfAssociation?: boolean;
  /** Are shares in safety press (Osakkeet painettava turvapainossa) */
  sharesInSafetyPress?: boolean;
  /** Right to expropriate (Kunnan lunastusoikeus) */
  rightToExpropriate?: string;
  /** Loan share payable (Lainaosuus maksettavissa) */
  loanSharePayable?: string;
  /** Consumption heat (Kulutus lämpö) */
  consumptionHeat?: number;
  /** Consumption electricity (Kulutus sähkö) */
  consumptionElectricity?: number;
  /** Consumption water (Kulutus vesi) */
  consumptionWater?: number;
  /** Consumption year (Kulutus vuosi) */
  consumptionYear?: number;
  /** Antenna system (Antennijärjestelmä) */
  antennaSystem?: string;
  /** Full value insurance (Täysarvovakuutus) */
  fullValueInsurance?: boolean;
  /** Other insurances (Muut vakuutukset) */
  otherInsurances?: string;
  /** Insurance value (Vakuuutusksen arvo EUR) */
  insuranceValue?: number;
  /** Apartment register changed (Huoneistoluettelo muutettu 1.5.1972 jälkeen) */
  apartmentRegisterChanged?: boolean;
  /** Is expropriate share holder (Lunastusoikeus osakkaalla) */
  expropriationShareholder?: boolean;
  /** Is expropriation company (Lunastusoikeus yhtiöllä) */
  expropriationCompany?: boolean;
  /** Other expropriation (Muu lunastusoikeus) */
  otherExpropriation?: string;
  /** Mortgages (Kiinnitykset) */
  mortgages?: number;
  /** Is arava funded (Arava-rahoitettu) */
  aravaFunded?: boolean;
  /** Has same maintenance fee (Kaikilla huoneistoilla sama vasikeperuste) */
  sameMaintenanceFee?: boolean;
  /** Real estate maintenance system (Kiinteistönhoitojärjestelmä) */
  realEstateMaintenanceSystem?: string;
  /** VAT taxable company (ALV-verollinen yhtiö. NO = Ei, YES = Kyllä, PARTLY = Osittain) */
  vatTaxableCompany?: 'NO' | 'YES' | 'PARTLY';
  /** Telecommunication system (Tietoliikennejärjestelmä) */
  telecommunicationSystem?: string;
  /** Are all apartments in house manager certificate (Kaikki rakennukset näytetään isännöitsijäntodistuksella) */
  allApartmentsHouseManagersCertificate?: boolean;
  /** Is in apartment data system in use (Osakehuoneistorekisteri käytössä) */
  apartmentDataSystem?: boolean;
  /** Company type (Yhtiön tyyppi) */
  companyType?: string;
  vendors?: ExternalCompanyVendorResponseDTO[];
  shareSeries?: ExternalCompanyShareSeriesResponseDTO[];
  lots?: ExternalCompanyLotResponseDTO[];
  buildings?: ExternalBuildingResponseDTO[];
  realPropertyUnits?: ExternalRealPropertyUnitResponseDTO[];
}

export interface ExternalCompanyVendorResponseDTO {
  /** Fivaldi will set this when vendor is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when vendor is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Party type name (Tyyppi) */
  partyTypeName?: string;
  /** Customer name (Toimittaja) */
  customerName?: string;
  /** Customer person name (Henkilö) */
  customerPersonName?: string;
  /** In house manager certificate (Näytetään isannoitsijantodistuksella) */
  onHouseManagerCertificate?: boolean;
}

export interface ExternalCompanyShareSeriesResponseDTO {
  /** Share series id (Osakesarja) */
  shareSeriesId?: string;
  /** Fivaldi will set this when share series is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when share series is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** type of the share series (Tyyppi) */
  type?: 'Huoneisto osakkeet' | 'Kiinteistö osakkeet';
  /** Description (Selite) */
  description?: string;
  /** Series identifier (Tunnus) */
  seriesIdentifier?: string;
  /** Where share series starts (Numerot alku) */
  start?: number;
  /** Where share series ends (Numerot loppu) */
  end?: number;
  /** Total number of share series (Yhteensä) */
  together?: number;
  /** Nominal value (Nimellisarvo) */
  nominalValue?: number;
  /** Taxable value (Verotusarvo) */
  taxableValue?: number;
  /** Issued date (Antopäivä) */
  issuedDate?: string;
}

export interface ExternalCompanyLotResponseDTO {
  /** Lot id */
  lotId?: string;
  /** Fivaldi will set this when lot is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when lot is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Lot name (Mimi) */
  lotName?: string;
  /** lot number (Tontin numero) */
  lotNumber?: number;
  /** Town name (Kunnan nimi) */
  townName?: string;
  /** Town number (Kunnan numero) */
  townNumber?: number;
  /** District name (Kaupunginosan nimi) */
  districtName?: string;
  /** District number (Kaupunginosan numero) */
  districtNumber?: number;
  /** Block name (Korttelin nimi) */
  blockName?: string;
  /** Block number (Korttelin numero) */
  blockNumber?: number;
  /** Checksum (Tarkiste) */
  checksum?: string;
  /** Size of a lot (Pinta-ala) */
  lotSize?: number;
  /** Footprint (Kerrosala) */
  footprint?: number;
  /** Footprint not used (Käyttämätön rakennusoikeus) */
  footprintUnused?: number;
  /** Ownership status (Omistus) */
  ownershipStatus?: 'Vuokratontti' | 'Oma tontti';
  /** Rent period (Vuokra-aika) */
  rentPeriod?: number;
  /** When the rent time is ending (Vuokra-ajan päättymisvuosi) */
  rentEndingYear?: number;
  /** Rent inspection ground (Vuokran tarkistusperuste) */
  rentInspectionGrounds?: string;
  /** Rent amount (Vuosivuokra) */
  rentSum?: number;
  /** Owner of the rent lot (Vuokratontin omistaja) */
  owner?: string;
}

export interface ExternalBuildingResponseDTO {
  /** Building id */
  buildingId?: number;
  /** Fivaldi will set this when building is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when building is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Name (Nimi) */
  name?: string;
  /** Street address (Lähiosoite) */
  streetAddress?: string;
  /** Postal code (Postinumero) */
  postalCode?: string;
  /** Post office (Postiosoite) */
  postalAddress?: string;
  /** Building type (Talotyyppi) */
  buildingType?: string;
  /** Building material (Rakennusaine) */
  buildingMaterial?: string;
  /** Roof type (Kattotyyppi) */
  roofType?: string;
  /** Roofing material (Kateaine) */
  roofingMaterial?: string;
  /** heating (Lämmitys) */
  heating?: string;
  /** Air conditioning (Ilmanvaihto) */
  airConditioning?: string;
  /** Heat distribution method (Lämmönjakotapa) */
  heatDistributionMethod?: string;
  /** Cooling system (Jäähdytysjärjestelmä) */
  coolingSystem?: string;
  /** Building completed year (Valmistumisvuosi) */
  buildingCompletedYear?: number;
  /** Condition survey (Kuntoarvio) */
  conditionSurvey?: number;
  /** Management plan start (PTS tehty alkuvuosi) */
  managementPlanStart?: number;
  /** Management plan end (PTS tehty loppuvuosi) */
  managementPlanEnd?: number;
  /** Account dimension 1 (Seurantakohde 1) */
  accountDimension1?: string;
  /** Account dimension 2 (Seurantakohde 2) */
  accountDimension2?: string;
  /** Account dimension 3 (Seurantakohde 3) */
  accountDimension3?: string;
  /** Account dimension 4 (Seurantakohde 4) */
  accountDimension4?: string;
  /** lot name (Nimi) */
  lotName?: string;
  /** Is shown in house managers certificate (Näytetään isännöitsijäntodistuksella) */
  onHouseManagerCertificate?: boolean;
  /** Lot id */
  lotId?: string;
}

export interface ExternalRealPropertyUnitResponseDTO {
  /** Fivaldi will set this when real property unit is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when real property unit is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Unit name (Arvon yksikön nimi) */
  unitName?: string;
  /** Type (Tilan tyyppi) */
  type?: string;
  /** Is shown in house manager certificate (Näytetään isännöitsijäntodistuksella) */
  onHouseManagerCertificate?: boolean;
  description?: ExternalRealPropertyUnitDescriptionResponseDTO;
  /** Amount (Arvo) */
  amount?: number;
}

export interface ExternalRealPropertyUnitDescriptionResponseDTO {
  /** Fivaldi will set this when real property unit description is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when real property unit description is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Description (Nimi) */
  description?: string;
}

export interface ExternalApartmentRepairResponseDTO {
  /** Fivaldi will set this when apartment repair is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when apartment repair is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Repair id */
  repairId?: number;
  /** Repair heading (Otsikko) */
  heading?: string;
  /** Repair description (Selite) */
  text?: string;
  /** Fivaldi apartment id */
  apartmentId?: number;
  /** Repair status (Tila. PLANNED = Suunniteltu, WITHOUT_DECISION = Odottaa päätöstä, DECISION_RECEIVED = Päätös tehty, STARTED = Aloitettu, FINISHED = Valmis) */
  status?: 'PLANNED' | 'WITHOUT_DECISION' | 'DECISION_RECEIVED' | 'STARTED' | 'FINISHED';
  /** Decision date. Format dd.mm.yyyy (Ilmoitettu) */
  decisionDate?: string;
  /** Begin date. Format dd.mm.yyyy (Ilmoitus hyväksytty) */
  beginDate?: string;
  /** Finished date. Format dd.mm.yyyy (Valmis) */
  finishedDate?: string;
  /** House manager certificate status (Tila. NOTIFIED = Ilmoitettu, NOTIFICATION_APPROVED = Ilmoitus hyväksytty, FINISHED = Valmis) */
  houseManagersCertificateStatus?: 'NOTIFIED' | 'NOTIFICATION_APPROVED' | 'FINISHED';
  /** Accuracy of repair date (Päivämäärän tarkkuus. DAY = Päivä, MONTH = Kuukausi, YEAR = Vuosi) */
  houseManagersCertificateDateType?: 'DAY' | 'MONTH' | 'YEAR';
  /** Internal text (Sisäiset tiedot) */
  internalText?: string;
  /** On extract of the register of occupants (Näytetään talonkirjaotteella) */
  onExtractOfTheRegisterOfOccupants?: boolean;
  /** On house managers certificate apartment information (Näytetään isännöitsijäntodistuksella huoneiston tiedoissa) */
  onApartmentInformation?: boolean;
  /** On house managers certificate for renting (Näytetään isännöitsijäntodistuksella vuokrausta varten) */
  onHouseManagersCertificateForRenting?: boolean;
}

export interface ExternalCompanyRepairResponseDTO {
  /** Fivaldi will set this when company repair is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when company repair is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Repair id */
  repairId?: number;
  /** Repair heading (Otsikko) */
  heading?: string;
  /** Repair description (Selite) */
  text?: string;
  /** Apartment id */
  apartmentId?: number;
  /** Repair status (Tila. PLANNED = Suunniteltu, WITHOUT_DECISION = Odottaa päätöstä, DECISION_RECEIVED = Päätös tehty, STARTED = Aloitettu, FINISHED = Valmis) */
  status?: 'PLANNED' | 'WITHOUT_DECISION' | 'DECISION_RECEIVED' | 'STARTED' | 'FINISHED';
  /** Decision date. Format dd.mm.yyyy (Suunnitteilla) */
  decisionDate?: string;
  /** Begin date. Format dd.mm.yyyy (Päätös tehty) */
  beginDate?: string;
  /** Finished date. Format dd.mm.yyyy (Valmis) */
  finishedDate?: string;
  /** House manager certificate status (IN_PLANNING = Suunnitteilla, DECISION_MADE = Päätös tehty, FINISHED = Valmis) */
  houseManagersCertificateStatus?: 'IN_PLANNING' | 'DECISION_MADE' | 'FINISHED';
  /** Accuracy of repair date (Päivämäärän tarkkuus. DAY = Päivä, MONTH = Kuukausi, YEAR = Vuosi) */
  houseManagersCertificateDateType?: 'DAY' | 'MONTH' | 'YEAR';
  /** Internal text (Sisäiset tiedot) */
  internalText?: string;
  /** On extract of the register of occupants (Näytetään talonkirjaotteella) */
  onExtractOfTheRegisterOfOccupants?: boolean;
  /** On house managers certificate company information (Näytetään isännöitsijäntodistuksella yhtiön tiedoissa) */
  onCompanyInformation?: boolean;
  /** On house managers certificate apartment information (Näytetään isännöitsijäntodistuksella vuokrausta varten) */
  onApartmentInformation?: boolean;
  /** On house managers certificate for renting (Näytetään isännöitsijäntodistuksella vuokrausta varten) */
  onHouseManagersCertificateForRenting?: boolean;
}

export interface ExternalApartmentRepairRequestDTO {
  /**
   * Repair heading (Otsikko)
   * @maxLength 60
   */
  heading?: string | null;
  /**
   * Repair description (Selite)
   * @maxLength 4000
   */
  text?: string | null;
  /**
   * Apartment id
   * @max 999999999
   */
  apartmentId?: number;
  /** Repair status (Tila. PLANNED = Suunniteltu, WITHOUT_DECISION = Odottaa päätöstä, DECISION_RECEIVED = Päätös tehty, STARTED = Aloitettu, FINISHED = Valmis) */
  status?: 'PLANNED' | 'WITHOUT_DECISION' | 'DECISION_RECEIVED' | 'STARTED' | 'FINISHED';
  /** Decision date. Format dd.mm.yyyy (Ilmoitettu) */
  decisionDate?: string | null;
  /** Begin date. Format dd.mm.yyyy (Ilmoitus hyväksytty) */
  beginDate?: string | null;
  /** Finished date. Format dd.mm.yyyy (Valmis) */
  finishedDate?: string | null;
  /** House manager certificate status (Tila. NOTIFIED = Ilmoitettu, NOTIFICATION_APPROVED = Ilmoitus hyväksytty, FINISHED = Valmis) */
  houseManagersCertificateStatus?: 'NOTIFIED' | 'NOTIFICATION_APPROVED' | 'FINISHED';
  /** Accuracy of repair date (Päivämäärän tarkkuus. DAY = Päivä, MONTH = Kuukausi, YEAR = Vuosi) */
  houseManagersCertificateDateType?: 'DAY' | 'MONTH' | 'YEAR';
  /**
   * Internal text (Sisäiset tiedot)
   * @maxLength 4000
   */
  internalText?: string | null;
  /** On extract of the register of occupants (Näytetään talonkirjaotteella) */
  onExtractOfTheRegisterOfOccupants?: boolean | null;
  /** On house managers certificate apartment information (Näytetään isännöitsijäntodistuksella huoneiston tiedoissa) */
  onApartmentInformation?: boolean | null;
  /** On house managers certificate for renting (Näytetään isännöitsijäntodistuksella vuokrausta varten) */
  onHouseManagersCertificateForRenting?: boolean | null;
}

export interface ExternalCompanyRepairRequestDTO {
  /**
   * Repair heading (Otsikko)
   * @maxLength 60
   */
  heading?: string | null;
  /**
   * Repair description (Selite)
   * @maxLength 4000
   */
  text?: string | null;
  /** Repair status (Tila. PLANNED = Suunniteltu, WITHOUT_DECISION = Odottaa päätöstä, DECISION_RECEIVED = Päätös tehty, STARTED = Aloitettu, FINISHED = Valmis) */
  status?: 'PLANNED' | 'WITHOUT_DECISION' | 'DECISION_RECEIVED' | 'STARTED' | 'FINISHED';
  /** Decision date. Format dd.mm.yyyy (Suunnitteilla) */
  decisionDate?: string | null;
  /** Begin date. Format dd.mm.yyyy (Päätös tehty) */
  beginDate?: string | null;
  /** Finished date. Format dd.mm.yyyy (Valmis) */
  finishedDate?: string | null;
  /** House manager certificate status (IN_PLANNING = Suunnitteilla, DECISION_MADE = Päätös tehty, FINISHED = Valmis) */
  houseManagersCertificateStatus?: 'IN_PLANNING' | 'DECISION_MADE' | 'FINISHED';
  /** Accuracy of repair date (Päivämäärän tarkkuus. DAY = Päivä, MONTH = Kuukausi, YEAR = Vuosi) */
  houseManagersCertificateDateType?: 'DAY' | 'MONTH' | 'YEAR';
  /**
   * Internal text (Sisäiset tiedot)
   * @maxLength 4000
   */
  internalText?: string | null;
  /** On extract of the register of occupants (Näytetään talonkirjaotteella) */
  onExtractOfTheRegisterOfOccupants?: boolean | null;
  /** On house managers certificate company information (Näytetään isännöitsijäntodistuksella yhtiön tiedoissa) */
  onCompanyInformation?: boolean | null;
  /** On house managers certificate apartment information (Näytetään isännöitsijäntodistuksella vuokrausta varten) */
  onApartmentInformation?: boolean | null;
  /** On house managers certificate for renting (Näytetään isännöitsijäntodistuksella vuokrausta varten) */
  onHouseManagersCertificateForRenting?: boolean | null;
}

export interface SalesOrderAttachmentResponseDTO {
  /** @default false */
  hasErrors?: boolean;
  errorMessage?: string;
}

export interface ExternalPayrollEmployeeDTO {
  personalInformation?: ExternalPersonalInformationDTO;
  employmentInformation?: ExternalEmploymentInformationDTO[];
  addresses?: ExternalEmployeeAddressDTO[];
  bankAccounts?: ExternalEmployeeBankAccountDTO[];
  taxCards?: ExternalEmployeeTaxCardDTO[];
}

export interface ExternalPersonalInformationDTO {
  /** Id of the employee */
  employeeId?: string;
  /** Employee's first name (Etunimi) */
  firstName?: string;
  /** Employee's last name (Sukunimi) */
  lastName?: string;
  /** Employee's middle or other names (Muut nimet) */
  otherNames?: string;
  /** Two-letter language code according to ISO 3166-1 standard representing the employee's nationality (Kansalaisuus) */
  nationality?: string;
  /** Three-letter language code according to ISO 3166-1 standard (Kielikoodi) */
  languageCode?: string;
  /** Employee's date of birth in format dd.MM.yyyy (Syntymäaika) */
  dateOfBirth?: string;
  /** Last part of the Finnish social security number meaning the separator, individual number and the control character (Hetun loppuosa) */
  endOfSocialSecurityNumber?: string;
  /** Social security or identification number for non-Finnish citizens (Ulkomaalainen hetu) */
  foreignSocialSecurityNumber?: string;
  /** Employee's gender (Sukupuoli) */
  gender?: 'Male' | 'Female';
  /** Business ID if the employee is a company (Y-tunnus) */
  businessId?: string;
  /** Employee's email address (Sähköposti) */
  email?: string;
  /** Incomes Register code for additional income earner type (Lisätieto) */
  additionalIncomeEarnerInformation?: string;
  /** Tax identification number in employee's home country (Asuinvaltion verotunniste (TIN)) */
  homeCountryTaxIdentificationNumber?: string;
  /** Method of sending payslips to the employee (Palkkalaskelmien lähtystapa) */
  payslipSendMethod?: 'Tulostus' | 'Massatulostuspalvelu' | 'Visma Verkkopalkka';
  /** Dimensions returned if (Käytä ylläolevia oletusseurantakohteita palkkalaskelmissa) selected */
  dimension1?: string;
  /** Dimensions returned if (Käytä ylläolevia oletusseurantakohteita palkkalaskelmissa) selected */
  dimension2?: string;
  /** Dimensions returned if (Käytä ylläolevia oletusseurantakohteita palkkalaskelmissa) selected */
  dimension3?: string;
  /** Dimensions returned if (Käytä ylläolevia oletusseurantakohteita palkkalaskelmissa) selected */
  dimension4?: string;
  /** Type of tax card used for the employee (Verokortin tyyppi) */
  taxCardType?: 'Palkkatulo' | 'Lähdevero' | 'Rajoitetusti verovelvollinen' | 'Muu';
  /** List of employee's phone numbers (Puhelinnumerot) */
  phoneNumbers?: string[];
}

export interface ExternalEmploymentInformationDTO {
  /** Employment start date in format dd.MM.yyyy (Alkupvm.) */
  employmentStartDate?: string;
  /** Employment end date in format dd.MM.yyyy (Loppupvm.) */
  employmentEndDate?: string;
  /** Type of code register used for end reason codes (Palvelusuhteen päättymisen syykoodisto) */
  employmentEndReasonCode?: 'Kevan koodisto' | 'Suomen Pankin koodisto' | 'Tulorekisterin koodisto';
  /** Incomes Register code for employment end reason (Tulorekisteri päättymissyy) */
  incomesRegisterEmploymentEndReasonCode?: string;
  /** Free-text description of the employment end reason (Päättymistyyppi) */
  employmentEndReason?: string;
  /** Type of employment (Tyyppi) */
  employmentType?:
    | 'Vakituinen'
    | 'Sijainen'
    | 'Määräaikainen'
    | 'Tilapäinen virka'
    | 'Työllistetty'
    | 'Oppisopimus'
    | 'Harjoittelija'
    | 'Suojatyöntekijä'
    | 'Kokoaikainen'
    | 'Osa-aikainen'
    | 'Tietoa ei ole saatavilla';
  /** If true, the start date of continuous employment is based on the previous employments' start date (for example employee´s company start date). (Työsuhde jatkuu edellisestä) */
  employmentContinuesFromPrevious?: boolean;
  /** Indicates if no employment relationship exists for employee (Ei palvelusuhteessa) */
  noEmploymentRelationship?: boolean;
  /** Whether the employee has limited tax liability in Finland. Selections in Fivaldi that map to true value are listed below (Suorituslaji) */
  limitedTaxLiability?:
    | 'Johtajanpalkkio (AD)'
    | 'Palkka(muu kuin kohdass AS tarkoitettu) (A1)'
    | 'Julkisyhteisön maksama palkka (A2)'
    | 'Rojalti,esim.tekijänoikeuskorvaus (A3)'
    | 'Työkorvaus(muulle kuin luonnolliselle hlölle) (A4)'
    | 'Esiintyvän taiteiljoan henk.koht. toiminnasta maks korv (A5)'
    | 'Urheilijan hen.koht.toiminnasta maks korv (A6)'
    | 'Ns. avainhenkilölain (1551/1995)muk palkka (A7)'
    | 'Ulkomaisen kons.yhtiön tms maks palkka (A8)'
    | 'Ulkom.vuokratyöntekijän palkkatulo (A9)'
    | 'Raj.verovelvollisen enn.pid.alainen palkka (AR)'
    | 'Suomessa teht työhön per työsuhdeoptio (AS)';
  /** Percentage number of part-time work e.g. 60 for 60% (Osa-aik. %) */
  partTimePercentage?: number;
  /** Identifier for the applicable collective agreement (Työehtosopimus) */
  collectiveAgreementId?: string;
  /** Trade union branch (Ammattiliiton osasto) */
  tradeUnionBranch?: string;
  insurances?: ExternalEmploymentInsuranceDTO[];
  /** Income Register profession code (Tulorekisteri ammattinimike) */
  incomeRegisterProfessionId?: string;
  /** Id of the professionm, for example Keva profession code (Ammattinimike) */
  professionId?: string;
  /** Name of the profession, for example Keva profession name (Ammattinimike) */
  professionName?: string;
  /** Code register used by registrationBasisId field (Rekisteröinnin perusteen tyyppi) */
  registrationBasisType?: string;
  /** Identifier for the registration basis (Rekisteröinnin perusteen tunniste) */
  registrationBasisId?: 'Kevan rekisteröinnin peruste' | 'Suomen pankin rekisteröinnin peruste';
}

export interface ExternalEmploymentInsuranceDTO {
  /** Name of the insurance provider (Vakuutusyhtiö) */
  insuranceCompany?: string;
  /** Insurance identifier (Vakuutusnumero) */
  insuranceNumber?: string;
  /** Type of insurance */
  insuranceType?: 'TyEL' | 'MYEL' | 'YEL' | 'Tapaturmavakuutus';
}

export interface ExternalEmployeeAddressDTO {
  /** Start date from which this address is valid in format dd.MM.yyyy (Alkupvm.) */
  startDate?: string;
  /** End date until which this address is valid in format dd.MM.yyyy (Loppupvm.) */
  endDate?: string;
  /** Primary address line of the employee (Lähiosoite) */
  address1?: string;
  /** Secondary address line, such as apartment or suite (Lähiosoite 2) */
  address2?: string;
  /** Postal code (Postinumero) */
  postalCode?: string;
  /** Postal address (Postitoimipaikka) */
  postalAddress?: string;
  /** Two-letter country code according to ISO 3166-1 standard (Maa) */
  country?: string;
}

export interface ExternalEmployeeBankAccountDTO {
  /** Indicates if this is the employee's default bank account (Oletus) */
  defaultBankAccount?: boolean;
  /** Description for the bank account (Selite) */
  description?: string;
  /** Bank account number in local format (Tili) */
  accountNumber?: string;
  /** International Bank Account Number (IBAN) */
  iban?: string;
  /** Bank Identifier Code (BIC) */
  bic?: string;
}

export interface ExternalEmployeeTaxCardDTO {
  /** Start date of the tax card (Alkupvm.) */
  startDate?: string;
  /** End date of the tax card (Loppupvm.) */
  endDate?: string;
  /** Tax at source (Lähdevero) */
  taxAtSource?: boolean;
  taxCardSteps?: ExternalEmployeeTaxCardStepDTO[];
  /** Cumulative salary for the tax card (Palkka yht.) */
  cumulativeSalary?: string;
  /** Cumulative tax amount for the tax card (Ennakonpidätys yht.) */
  cumulativeTax?: string;
  /** Cumulative tax days for the tax card (Veropäivät yht.) */
  cumulativeTaxDays?: string;
}

export interface ExternalEmployeeTaxCardStepDTO {
  /** Bottom limit for the tax card step (Alaraja) */
  bottomLimit?: string;
  /** Top limit for this tax card step (Yläraja) */
  topLimit?: string;
  /** Tax percentage applied up to the top limit (Veroprosentti) */
  taxPercentage?: string;
}

export interface ExternalPayrollTransactionImportBatchDTO {
  /**
   * Unique identifier for the payroll transaction batch
   * @maxLength 20
   */
  payrollBatchId: string;
  transactionRows?: ExternalPayrollTransactionRowDTO[];
}

export interface ExternalPayrollTransactionRowDTO {
  /**
   * Social security id of the employee. If given externalEmployeeId is not handled
   * @maxLength 11
   */
  employeeSSID?: string;
  /**
   * External employee identifier (Palkansaajan ulkoisen järj. tunnus)
   * @maxLength 20
   */
  externalEmployeeId?: string;
  /**
   * Id of paycode (Palkkalajin tunnus). If given externalPayCodeId is not handled
   * @maxLength 8
   */
  payCodeId?: string;
  /**
   * External id of paycode (Palkkalajin ulkoisen järj. tunnus)
   * @maxLength 8
   */
  externalPayCodeId?: string;
  /** Date of payroll transaction in format dd.MM.yyyy */
  payrollDate: string;
  /** Quantity of the payroll transaction */
  quantity: number;
  /** Multiplier for calculation */
  multiplier?: number;
  /** Price per unit */
  unitPrice?: number;
  /**
   * Description of the transaction
   * @maxLength 200
   */
  description?: string;
  /**
   * Value for dimension level 1. Primary given value is used, secondary employee's default value
   * @maxLength 8
   */
  dimensionValue1?: string;
  /**
   * Value for dimension level 2. Primary given value is used, secondary employee's default value
   * @maxLength 8
   */
  dimensionValue2?: string;
  /**
   * Value for dimension level 3. Primary given value is used, secondary employee's default value
   * @maxLength 8
   */
  dimensionValue3?: string;
  /**
   * Value for dimension level 4. Primary given value is used, secondary employee's default value
   * @maxLength 8
   */
  dimensionValue4?: string;
  /** Start date of earnings period in format dd.MM.yyyy (Ansainta-ajan alkupvm) */
  earningPeriodStart?: string;
  /** End date of earnings period in format dd.MM.yyyy (Ansainta-ajan loppupvm) */
  earningPeriodEnd?: string;
}

import type { AxiosInstance, AxiosRequestConfig, HeadersDefaults, ResponseType, AxiosResponse } from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  JsonApi = 'application/vnd.api+json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'https://api.fivaldi.net/customer/api' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { 'Content-Type': type } : {})
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    });
  };
}

import type { AxiosRequestConfig, AxiosResponse } from 'axios';
/**
 * @title Visma Fivaldi Customer API
 * @version 2.12.0
 * @termsOfService https://www.visma.com/trust-centre/smb/service-information/terms-of-service/
 * @baseUrl https://api.fivaldi.net/customer/api
 * @externalDocs https://support.fivaldi.fi/fi/support/solutions/articles/77000567542-visma-fivaldi-api
 *
 * API for 3rd party customers of Visma Fivaldi
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  customers = {
    /**
     * No description
     *
     * @tags Customer
     * @name CustomersList
     * @summary Get a list of Fivaldi customers
     * @request GET:/customers
     * @response `200` `(Customer)[]` OK
     * @response `401` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    customersList: (params: RequestParams = {}) =>
      this.request<Customer[], ApiError>({
        path: `/customers`,
        method: 'GET',
        format: 'json',
        ...params
      })
  };
  companies = {
    /**
     * No description
     *
     * @tags Companies
     * @name CompaniesList
     * @summary Get all companies, search by business id or Fivaldi customer id
     * @request GET:/companies
     * @response `200` `Company` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    companiesList: (
      query?: {
        /** Search by business id (Y-tunnus) */
        businessId?: string;
        /** Search by Fivaldi customer id */
        customerId?: string;
        /** Filter fields of the response objects, only ones provided will be included */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Company, ApiErrorList | ApiError>({
        path: `/companies`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesList
     * @summary Get all purchase invoices
     * @request GET:/companies/{cuid}/purchases/invoices
     * @response `200` `(PurchaseInvoice)[]` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    purchasesInvoicesList: (
      cuid: string,
      query?: {
        /** Language code for chain and step descriptions, defaults to FIN */
        lang?: 'FIN' | 'SWE' | 'ENG';
        /** Filter invoices by how they have been brought to system. True = manually added, false = e-invoices. If no parameter is provided then returns all. */
        addedManually?: boolean;
        /** Filter invoices by invoice status, S = entering, K = handling, H = accepted */
        invoiceStatus?: 'S' | 'K' | 'H';
        /**
         * Filter invoices by create time, dd.mm.yyyy%20hh:mm:ss
         * @example "01.12.2019%2000:00:00"
         */
        createTimeAfter?: string;
        /**
         * Filter invoices by create time, dd.mm.yyyy%20hh:mm:ss
         * @example "01.12.2021%2000:00:00"
         */
        createTimeBefore?: string;
        /**
         * Filter invoices by change time, dd.mm.yyyy%20hh:mm:ss
         * @example "01.12.2019%2000:00:00"
         */
        changeTimeAfter?: string;
        /**
         * Filter invoices by change time, dd.mm.yyyy%20hh:mm:ss
         * @example "01.12.2021%2000:00:00"
         */
        changeTimeBefore?: string;
        /** Whether to include all invoice related changes in change time filter. */
        fetchAllChangeTimes?: boolean;
        /** Whether to include row change times in change time filter. This parameter is unnecessary if fetchAllChangeTimes is used. */
        includeRowChangeTimes?: boolean;
        /** Include attachment ids related to invoices, increases query time */
        includeAttachments?: boolean;
        /** Filter fields of the response objects, only ones provided will be included */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoice[], ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * @description Post endpoint to import purchase invoices to Fivaldi purchase invoice circulation. Imported invoices get new/no approval chain defined/"syötössä" -status.
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesCreate
     * @summary Create a new purchase invoice
     * @request POST:/companies/{cuid}/purchases/invoices
     * @response `201` `PurchaseInvoiceResponseDTO` Created
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesCreate: (cuid: string, data: PurchaseInvoicePostPutPatch, params: RequestParams = {}) =>
      this.request<PurchaseInvoiceResponseDTO, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesDetail
     * @summary Get a purchase invoice
     * @request GET:/companies/{cuid}/purchases/invoices/{invoiceId}
     * @response `200` `PurchaseInvoice` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    purchasesInvoicesDetail: (
      cuid: string,
      invoiceId: number,
      query?: {
        /** Language code for chain and step descriptions, defaults to FIN */
        lang?: 'FIN' | 'SWE' | 'ENG';
        /** Include attachment ids related to this invoice, increases query time */
        includeAttachments?: boolean;
        /** Filter fields of the response objects, only ones provided will be included */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoice, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * @description Update all the information in a purchase invoice. Missing properties or null values will delete previous data.  If supplierId is provided, supplier properties(names, addresses, paymentPriority, refNumber, bankMessageType) will get autofilled, if not also explicitly provided. If supplierId, workSiteKey, paymentTermId or currencyId(other than EUR) are provided, corresponding id must be already created in Fivaldi. If bookkeepingAccount is provided it must be found and be activated for purchase in Fivaldi. BankMessageType (provided with query or based on supplier) determines if bankRefNo is required(1) or bankMessage is required (2). If vatType is provided it must correspond to company settings.
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesUpdate
     * @summary Update a purchase invoice
     * @request PUT:/companies/{cuid}/purchases/invoices/{invoiceId}
     * @response `200` `PurchaseInvoiceResponseDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesUpdate: (cuid: string, invoiceId: number, data: PurchaseInvoicePostPutPatch, params: RequestParams = {}) =>
      this.request<PurchaseInvoiceResponseDTO, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Update some of the properties in a purchase invoice. Missing properties or null values will have no effect. Note however, that if supplierId is provided, supplier names and addresses will get overridden, if not also explicitly provided. If supplierId, workSiteKey, paymentTermId or currencyId(other than EUR) are provided, corresponding id must be already created in Fivaldi. If bookkeepingAccount is provided it must be found and be activated for purchase in Fivaldi. BankMessageType (provided with query or based on supplier) determines if bankRefNo is required(1) or bankMessage is required (2). If vatType is provided it must correspond to company settings.
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesPartialUpdate
     * @summary Update a purchase invoice
     * @request PATCH:/companies/{cuid}/purchases/invoices/{invoiceId}
     * @response `200` `PurchaseInvoiceResponseDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesPartialUpdate: (cuid: string, invoiceId: number, data: PurchaseInvoicePostPutPatch, params: RequestParams = {}) =>
      this.request<PurchaseInvoiceResponseDTO, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesApproveCreate
     * @summary Approve current step of a purchase invoice
     * @request POST:/companies/{cuid}/purchases/invoices/{invoiceId}/approve
     * @response `204` `void` No content
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesApproveCreate: (
      cuid: string,
      invoiceId: number,
      query: {
        /** Current step id of a purchase invoice */
        stepId: number;
        /** Language code for messages, defaults to FIN */
        lang?: 'FIN';
      },
      params: RequestParams = {}
    ) =>
      this.request<void, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/approve`,
        method: 'POST',
        query: query,
        ...params
      }),

    /**
     * @description Invoice must already be in Fivaldi before sending attachments. Attachments can only be attached to invoices that have new/no approval chain defined/"syötössä" -status. Maximum number of attachments per invoice is 10. Attachments get new filename in Fivaldi according to what is defined in company` s archive settings (for example [documenttype]-[invoiceId]-[supplierId]). If supplierId is defined as a required field in company's archive settings, the related invoice must have supplierId set before sending attachments.
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesAttachmentCreate
     * @summary postPurchaseInvoiceAttachment
     * @request POST:/companies/{cuid}/purchases/invoices/{invoiceId}/attachment
     * @response `200` `ApiError` OK
     * @response `201` `void` Created
     * @response `400` `ApiErrorList`
     * @response `401` `void` Unauthorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `any`
     */
    purchasesInvoicesAttachmentCreate: (
      cuid: string,
      invoiceId: number,
      data: {
        /**
         * Allowed file types are pdf, jpg, jpeg, jpe, png, gif, tif, doc, xls, xsl, txt, xml, htm, html, csv, docx, xlsx. Maximum filesize is 5 MB. Filename can contain following characters A-Z, 0-9, - and _.
         * @format binary
         */
        file: File;
        /** Decides the order in which the attachments are shown in UI. If not provided the attachment gets the last number. */
        attachmentOrderNo?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApiError, ApiErrorList | void>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/attachment`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesCommentsList
     * @summary Get the comments related to a purchase invoice
     * @request GET:/companies/{cuid}/purchases/invoices/{invoiceId}/comments
     * @response `200` `PurchaseInvoiceComments` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    purchasesInvoicesCommentsList: (
      cuid: number,
      invoiceId: number,
      query?: {
        /** Filter fields of the response objects, only ones provided will be included */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoiceComments, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/comments`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesCommentsCreate
     * @summary Add a comment to a purchase invoice
     * @request POST:/companies/{cuid}/purchases/invoices/{invoiceId}/comments
     * @response `200` `Comment` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesCommentsCreate: (cuid: number, invoiceId: number, data: Comment, params: RequestParams = {}) =>
      this.request<Comment, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/comments`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsList
     * @summary Get all rows of a purchase invoice
     * @request GET:/companies/{cuid}/purchases/invoices/{invoiceId}/rows
     * @response `200` `(PurchaseInvoiceRow)[]` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    purchasesInvoicesRowsList: (
      cuid: number,
      invoiceId: number,
      query?: {
        /** Filter fields of the response objects, only ones provided will be included */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoiceRow[], ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsCreate
     * @summary Add a purchase invoice row
     * @request POST:/companies/{cuid}/purchases/invoices/{invoiceId}/rows
     * @response `200` `PurchaseInvoiceRow` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesRowsCreate: (cuid: number, invoiceId: number, data: PurchaseInvoiceRowPost, params: RequestParams = {}) =>
      this.request<PurchaseInvoiceRow, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsDetail
     * @summary Get a purchase invoice row
     * @request GET:/companies/{cuid}/purchases/invoices/{invoiceId}/rows/{rowId}
     * @response `200` `PurchaseInvoiceRow` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    purchasesInvoicesRowsDetail: (
      cuid: number,
      invoiceId: number,
      rowId: number,
      query?: {
        /** Filter fields of the response objects, only ones provided will be included */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoiceRow, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows/${rowId}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * @description Update all the information in a purchase invoice row. Missing properties or null values will delete previous data. Cuid, invoiceId and rowId provided in the parameters take precedence over the corresponding object properties in case of conflict.
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsUpdate
     * @summary Update a purchase invoice row
     * @request PUT:/companies/{cuid}/purchases/invoices/{invoiceId}/rows/{rowId}
     * @response `200` `PurchaseInvoiceRow` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesRowsUpdate: (
      cuid: number,
      invoiceId: number,
      rowId: number,
      data: PurchaseInvoiceRowPut,
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoiceRow, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows/${rowId}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Update some of the properties in a purchase invoice row. Missing properties or null values will have no effect. Cuid, invoiceId and rowId provided in the parameters take precedence over the corresponding object properties in case of conflict.
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsPartialUpdate
     * @summary Update a purchase invoice row
     * @request PATCH:/companies/{cuid}/purchases/invoices/{invoiceId}/rows/{rowId}
     * @response `200` `PurchaseInvoiceRow` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesRowsPartialUpdate: (
      cuid: number,
      invoiceId: number,
      rowId: number,
      data: PurchaseInvoiceRowPut,
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoiceRow, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows/${rowId}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsDelete
     * @summary Delete a purchase invoice row
     * @request DELETE:/companies/{cuid}/purchases/invoices/{invoiceId}/rows/{rowId}
     * @response `204` `void` No content, invoice row deleted successfully
     * @response `401` `any`
     * @response `403` `any`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesRowsDelete: (cuid: number, invoiceId: number, rowId: number, params: RequestParams = {}) =>
      this.request<void, ApiErrorList>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows/${rowId}`,
        method: 'DELETE',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsAccrualDataCreate
     * @summary Add a purchase invoice row accrual data
     * @request POST:/companies/{cuid}/purchases/invoices/{invoiceId}/rows/accrualData
     * @response `200` `PurchaseInvoiceRow` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesRowsAccrualDataCreate: (cuid: number, invoiceId: number, data: AccrualDataPost, params: RequestParams = {}) =>
      this.request<PurchaseInvoiceRow, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows/accrualData`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Update all the information in a purchase invoice row accrual data. Missing properties or null values will delete previous data. Cuid, invoiceId, rowId and accrualNumber provided in the parameters take precedence over the corresponding object properties in case of conflict.
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsAccrualDataUpdate
     * @summary Update a purchase invoice row accrual data
     * @request PUT:/companies/{cuid}/purchases/invoices/{invoiceId}/rows/{rowId}/accrualData/{accrualNumber}
     * @response `200` `PurchaseInvoiceRow` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesRowsAccrualDataUpdate: (
      cuid: number,
      invoiceId: number,
      rowId: number,
      accrualNumber: number,
      data: AccrualDataPut,
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoiceRow, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows/${rowId}/accrualData/${accrualNumber}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Update some of the properties in a purchase invoice row accrual data. Missing properties or null values will have no effect. Cuid, invoiceId, rowId and accrualNumber provided in the parameters take precedence over the corresponding object properties in case of conflict.
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsAccrualDataPartialUpdate
     * @summary Update a purchase invoice row accrual data
     * @request PATCH:/companies/{cuid}/purchases/invoices/{invoiceId}/rows/{rowId}/accrualData/{accrualNumber}
     * @response `200` `PurchaseInvoiceRow` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesRowsAccrualDataPartialUpdate: (
      cuid: number,
      invoiceId: number,
      rowId: number,
      accrualNumber: number,
      data: AccrualDataPut,
      params: RequestParams = {}
    ) =>
      this.request<PurchaseInvoiceRow, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows/${rowId}/accrualData/${accrualNumber}`,
        method: 'PATCH',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Purchase invoices
     * @name PurchasesInvoicesRowsAccrualDataDelete
     * @summary Delete a purchase invoice row accrual data
     * @request DELETE:/companies/{cuid}/purchases/invoices/{invoiceId}/rows/{rowId}/accrualData/{accrualNumber}
     * @response `204` `void` No content, invoice row deleted successfully
     * @response `401` `any`
     * @response `403` `any`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    purchasesInvoicesRowsAccrualDataDelete: (
      cuid: number,
      invoiceId: number,
      rowId: number,
      accrualNumber: number,
      params: RequestParams = {}
    ) =>
      this.request<void, ApiErrorList>({
        path: `/companies/${cuid}/purchases/invoices/${invoiceId}/rows/${rowId}/accrualData/${accrualNumber}`,
        method: 'DELETE',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingVouchersAttachmentsList
     * @summary Get a list of voucher attachments for specific company
     * @request GET:/companies/{cuid}/bookkeeping/vouchers/attachments
     * @response `200` `VoucherAttachmentResponse` OK
     * @response `429` `any`
     */
    bookkeepingVouchersAttachmentsList: (
      cuid: string,
      query: {
        /** Voucher number */
        voucherNumber: string;
        /** Voucher type */
        voucherType: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<VoucherAttachmentResponse, any>({
        path: `/companies/${cuid}/bookkeeping/vouchers/attachments`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingVouchersAddAttachmentsCreate
     * @summary Add an attachment to a voucher in Fivaldi bookkeeping
     * @request POST:/companies/{cuid}/bookkeeping/vouchers/addAttachments
     * @response `200` `ArchiveAppDocumentPutResponse` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    bookkeepingVouchersAddAttachmentsCreate: (
      cuid: string,
      query: {
        /** Journal number */
        journalNo: string;
        /** Voucher type */
        voucherType: number;
      },
      data: {
        /**
         * Allowed file types are "doc", "docx", "xls", "xlsx", "ppt", "pptx", "odt", "ods", "odp", "txt", "rtf", "jpg", "jpeg", "jpe", "gif", "png", "pdf". Maximum filesize is 15 MB. Filename can contain following characters "A-Z, a-z, 0-9" and one "."
         * @format binary
         */
        file: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<ArchiveAppDocumentPutResponse, ApiErrorList>({
        path: `/companies/${cuid}/bookkeeping/vouchers/addAttachments`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingVoucherTypesList
     * @summary Get a list of voucher types for specific company
     * @request GET:/companies/{cuid}/bookkeeping/voucherTypes
     * @response `200` `(VoucherType)[]` OK
     * @response `429` `any`
     */
    bookkeepingVoucherTypesList: (
      cuid: string,
      query?: {
        /** Fetches voucher types with given usage */
        usage?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<VoucherType[], any>({
        path: `/companies/${cuid}/bookkeeping/voucherTypes`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingVatCodesList
     * @summary Get a list of vat codes and vat categories defined in Fivaldi.
     * @request GET:/companies/{cuid}/bookkeeping/vatCodes
     * @response `200` `(VatCodeResponse)[]` OK
     * @response `429` `any`
     */
    bookkeepingVatCodesList: (cuid: string, params: RequestParams = {}) =>
      this.request<VatCodeResponse[], any>({
        path: `/companies/${cuid}/bookkeeping/vatCodes`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingFiscalYearsList
     * @summary Get a list of fiscal years for specific company
     * @request GET:/companies/{cuid}/bookkeeping/fiscalYears
     * @response `200` `(FiscalYear)[]` OK
     * @response `429` `any`
     */
    bookkeepingFiscalYearsList: (cuid: string, params: RequestParams = {}) =>
      this.request<FiscalYear[], any>({
        path: `/companies/${cuid}/bookkeeping/fiscalYears`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingMonthStatusList
     * @summary Get a list of bookkeeping month status.
     * @request GET:/companies/{cuid}/bookkeeping/monthStatus
     * @response `200` `(BookkeepingMonth)[]` OK
     * @response `429` `any`
     */
    bookkeepingMonthStatusList: (
      cuid: string,
      query: {
        /** Bookkeeping start month in yyyymm format. */
        startMonth: number;
        /** Bookkeeping end month in yyyymm format. */
        endMonth: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<BookkeepingMonth[], any>({
        path: `/companies/${cuid}/bookkeeping/monthStatus`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingVouchersList
     * @summary Get a list of vouchers.
     * @request GET:/companies/{cuid}/bookkeeping/vouchers
     * @response `200` `(FetchVoucherResponse)[]` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    bookkeepingVouchersList: (
      cuid: string,
      query: {
        /**
         * fetches vouchers after this date.
         * @format date
         */
        startDate: string;
        /**
         * fetches voucher before this date.
         * @format date
         */
        endDate: string;
        /** fetches voucher entries having account number greater or same than minAccount. */
        minAccount?: number;
        /** fetches voucher entries having account number smaller or same than maxAccount. */
        maxAccount?: number;
        /** fetches voucher entries having provided dimension1. */
        dimension1?: string;
        /** fetches voucher entries having provided dimension2. */
        dimension2?: string;
        /** fetches voucher entries having provided dimension3. */
        dimension3?: string;
        /** fetches voucher entries having provided dimension4. */
        dimension4?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<FetchVoucherResponse[], ApiErrorList | ApiError>({
        path: `/companies/${cuid}/bookkeeping/vouchers`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingVouchersCreate
     * @summary Imports one voucher into Fivaldi bookkeeping.
     * @request POST:/companies/{cuid}/bookkeeping/vouchers
     * @response `200` `VoucherImportResponse` OK
     * @response `400` `ApiErroCodeList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    bookkeepingVouchersCreate: (cuid: string, data: VoucherImportRequest, params: RequestParams = {}) =>
      this.request<VoucherImportResponse, ApiErroCodeList | ApiError | ApiErrorList>({
        path: `/companies/${cuid}/bookkeeping/vouchers`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingVouchersDetail
     * @summary Get one voucher by voucher id.
     * @request GET:/companies/{cuid}/bookkeeping/vouchers/{voucherNumber}
     * @response `200` `FetchVoucherResponse` OK
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    bookkeepingVouchersDetail: (cuid: string, voucherNumber: string, params: RequestParams = {}) =>
      this.request<FetchVoucherResponse, ApiError | ApiErrorList>({
        path: `/companies/${cuid}/bookkeeping/vouchers/${voucherNumber}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingAccountBalanceList
     * @summary Get a list of account balances, credit and debit sums.
     * @request GET:/companies/{cuid}/bookkeeping/accountBalance
     * @response `200` `AccountBalance` OK
     * @response `429` `any`
     */
    bookkeepingAccountBalanceList: (
      cuid: string,
      query: {
        /** Fetches accounts data for this month in yyyy/mm format. */
        month: number;
        /** Fetches accounts data having account number greater or same than minAccount. */
        minAccount?: string;
        /** Fetches accounts data having account number smaller or same than maxAccount. */
        maxAccount?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AccountBalance, any>({
        path: `/companies/${cuid}/bookkeeping/accountBalance`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingBudgetList
     * @summary Get a list of company budgets for a fiscal year.
     * @request GET:/companies/{cuid}/bookkeeping/budget
     * @response `200` `(ExternalBudgetResponseDTO)[]` OK
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    bookkeepingBudgetList: (
      cuid: string,
      query: {
        /**
         * Budgets to be fetched for this fiscal year id.
         * @min 1950
         * @exclusiveMin true
         * @max 2100
         * @exclusiveMax true
         */
        fiscalYearId: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<ExternalBudgetResponseDTO[], ApiError | ApiErrorList>({
        path: `/companies/${cuid}/bookkeeping/budget`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Bookkeeping
     * @name BookkeepingBudgetCreate
     * @summary Budget to be imported. FiscalYearId needs to exist for the company, bookkeepingPeriod needs to be on that fiscalYearId.
     * @request POST:/companies/{cuid}/bookkeeping/budget
     * @response `200` `ExternalBudgetResponseDTO` OK
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `409` `ApiErrorList`
     * @response `429` `any`
     */
    bookkeepingBudgetCreate: (cuid: string, data: ExternalBudgetRequestDTO, params: RequestParams = {}) =>
      this.request<ExternalBudgetResponseDTO, ApiError | ApiErrorList>({
        path: `/companies/${cuid}/bookkeeping/budget`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Chart of accounts and dimensions
     * @name ChartOfAccountsList
     * @summary Get all bookkeeping accounts
     * @request GET:/companies/{cuid}/chart-of-accounts
     * @response `200` `ChartOfAccounts` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    chartOfAccountsList: (
      cuid: number,
      query?: {
        /** Account dimension, defaults to 0 */
        dimension?:
          | 'all'
          | '0 (default. accounts)'
          | '1 (customer defined dimension)'
          | '2 (customer defined dimension)'
          | '3 (customer defined dimension)'
          | '4 (customer defined dimension)';
        /** Language code, defaults to FIN */
        lang?: 'FIN' | 'SWE' | 'ENG';
        /** Return accounts and dimensions used in bookkeeping */
        inUseBookkeeping?: boolean;
        /** Return accounts and dimensions used in estate */
        inUseEstate?: boolean;
        /** Return accounts and dimensions used in purchases */
        inUsePurchases?: boolean;
        /** Return accounts and dimensions used in salaries */
        inUseSalaries?: boolean;
        /** Return accounts and dimensions used in sales */
        inUseSales?: boolean;
        /** Filter fields of the response objects, only ones provided will be included */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ChartOfAccounts, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/chart-of-accounts`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Chart of accounts and dimensions
     * @name ChartOfAccountsDimensionsCreate
     * @summary Add accounts for a single dimension
     * @request POST:/companies/{cuid}/chart-of-accounts/dimensions
     * @response `200` `ExternalAccountInformationDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    chartOfAccountsDimensionsCreate: (
      cuid: number,
      query: {
        /** Dimension */
        dimension:
          | '1 (customer defined dimension)'
          | '2 (customer defined dimension)'
          | '3 (customer defined dimension)'
          | '4 (customer defined dimension)';
      },
      data: ExternalAccountInformationDTO[],
      params: RequestParams = {}
    ) =>
      this.request<ExternalAccountInformationDTO, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/chart-of-accounts/dimensions`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Archive
     * @name ArchiveFilesDetail
     * @summary Get download url for a file
     * @request GET:/companies/{cuid}/archive/files/{fileId}
     * @response `200` `string` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    archiveFilesDetail: (cuid: number, fileId: number, params: RequestParams = {}) =>
      this.request<string, ApiErrorList>({
        path: `/companies/${cuid}/archive/files/${fileId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Sales orders
     * @name SalesCompanyInvoicingDetailsList
     * @summary Get Fivaldi Company invoicing details
     * @request GET:/companies/{cuid}/sales/company-invoicing-details
     * @response `200` `string` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    salesCompanyInvoicingDetailsList: (cuid: string, params: RequestParams = {}) =>
      this.request<string, ApiErrorList>({
        path: `/companies/${cuid}/sales/company-invoicing-details`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Sales orders
     * @name SalesSalesOrdersBatchDetail
     * @summary Get sales orders from batch
     * @request GET:/companies/{cuid}/sales/sales-orders/batch/{externalBatchId}
     * @response `200` `(SalesOrderDTO)[]` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    salesSalesOrdersBatchDetail: (cuid: string, externalBatchId: string, params: RequestParams = {}) =>
      this.request<SalesOrderDTO[], ApiErrorList>({
        path: `/companies/${cuid}/sales/sales-orders/batch/${externalBatchId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Sales orders
     * @name SalesSalesOrdersList
     * @summary Get sales orders
     * @request GET:/companies/{cuid}/sales/sales-orders
     * @response `200` `(SalesOrderDTO)[]` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    salesSalesOrdersList: (
      cuid: string,
      query?: {
        /** Limit results with created at date (dd.mm.yyyy) */
        fromDate?: string;
        /** Limit results with status DRAFT | INVOICED */
        status?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<SalesOrderDTO[], ApiErrorList>({
        path: `/companies/${cuid}/sales/sales-orders`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Sales orders
     * @name SalesSalesOrderDetail
     * @summary Get unique sales order
     * @request GET:/companies/{cuid}/sales/sales-order/{id}
     * @response `200` `SalesOrderDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    salesSalesOrderDetail: (cuid: string, id: string, params: RequestParams = {}) =>
      this.request<SalesOrderDTO, ApiErrorList>({
        path: `/companies/${cuid}/sales/sales-order/${id}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Sales orders
     * @name SalesSalesOrderUpdate
     * @summary Update unique sales order. Sums to order will be calculated eihter based on Row total sum with tax or unit price excluding tax. Only one of those can be given on row details.
     * @request PUT:/companies/{cuid}/sales/sales-order/{id}
     * @response `200` `SalesOrderDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    salesSalesOrderUpdate: (cuid: string, id: string, data: SalesOrderDTO, params: RequestParams = {}) =>
      this.request<SalesOrderDTO, ApiErrorList>({
        path: `/companies/${cuid}/sales/sales-order/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Sales orders
     * @name SalesSalesOrderCreate
     * @summary Create sales order. Sums to order will be calculated eihter based on Row total sum with tax or unit price excluding tax. Only one of those can be given on row details.
     * @request POST:/companies/{cuid}/sales/sales-order
     * @response `200` `object` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    salesSalesOrderCreate: (cuid: string, data: SalesOrderDTO, params: RequestParams = {}) =>
      this.request<object, ApiErrorList>({
        path: `/companies/${cuid}/sales/sales-order`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Sales orders
     * @name SalesMultipleSalesOrdersCreate
     * @summary Create multiple sales orders with one batch. Sums to order will be calculated eihter based on Row total sum with tax or unit price excluding tax. Only one of those can be given on row details.
     * @request POST:/companies/{cuid}/sales/multiple-sales-orders
     * @response `200` `string` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    salesMultipleSalesOrdersCreate: (cuid: string, data: SalesOrderDTO[], params: RequestParams = {}) =>
      this.request<string, ApiErrorList>({
        path: `/companies/${cuid}/sales/multiple-sales-orders`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Sales orders
     * @name SalesSalesOrderAttachmentCreate
     * @summary Add an attachment to a sales order. Order must be on Draft state (Attachment can not be added to a invoiced sales order)
     * @request POST:/companies/{cuid}/sales/sales-order/{id}/attachment
     * @response `200` `SalesOrderAttachmentResponseDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    salesSalesOrderAttachmentCreate: (
      cuid: string,
      id: string,
      data: {
        /**
         * Allowed file types are "pdf". Maximum filesize is 5 MB. Filename can contain following characters "A-Z, a-z, 0-9" and one "."
         * @format binary
         */
        file: File;
      },
      params: RequestParams = {}
    ) =>
      this.request<SalesOrderAttachmentResponseDTO, ApiErrorList>({
        path: `/companies/${cuid}/sales/sales-order/${id}/attachment`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Customer register
     * @name CustomersGetCustomerRegisterBasicDetailsList
     * @summary Fivaldi Company's basic details for using correct id values on customer
     * @request GET:/companies/{cuid}/customers/getCustomerRegisterBasicDetails
     * @response `200` `string` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    customersGetCustomerRegisterBasicDetailsList: (
      cuid: string,
      query?: {
        /** Filter fields of the response objects, only ones provided will be included on response */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<string, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/customers/getCustomerRegisterBasicDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Customer register
     * @name CustomersList
     * @summary Get list of Fivaldi company's customers
     * @request GET:/companies/{cuid}/customers
     * @response `200` `(CustomerEntityDTO)[]` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    customersList: (
      cuid: string,
      query?: {
        /** Limit results with search word */
        searchWord?: string;
        /** Limit results with changed at date is given date or newer (dd.mm.yyyy) */
        fromDate?: string;
        /** Filter fields of the response objects, only ones provided will be included on response */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerEntityDTO[], ApiErrorList | ApiError>({
        path: `/companies/${cuid}/customers`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Customer register
     * @name CustomersDetail
     * @summary Get Fivaldi company's unique customer with all details from register
     * @request GET:/companies/{cuid}/customers/{id}
     * @response `200` `CustomerEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    customersDetail: (
      cuid: string,
      id: string,
      query?: {
        /** Filter fields of the response objects, only ones provided will be included on response */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerEntityDetailsDTO, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/customers/${id}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * @description Customer id is set by Fivaldi as next available customer number.
     *
     * @tags Customer register
     * @name CustomersCreateCustomerCreate
     * @summary Create Customer with addresses and bank accounts
     * @request POST:/companies/{cuid}/customers/createCustomer
     * @response `200` `CustomerEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    customersCreateCustomerCreate: (cuid: string, data: CustomerEntityDetailsDTO, params: RequestParams = {}) =>
      this.request<CustomerEntityDetailsDTO, ApiErrorList>({
        path: `/companies/${cuid}/customers/createCustomer`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Update existing Customer details. Addresses and bank accounts will not be updated (they have own endpoints).
     *
     * @tags Customer register
     * @name CustomersUpdateCustomerAllFieldsCreate
     * @summary Update existing Customer details
     * @request POST:/companies/{cuid}/customers/{id}/updateCustomerAllFields
     * @response `200` `CustomerEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    customersUpdateCustomerAllFieldsCreate: (cuid: string, id: string, data: CustomerEntityDetailsDTO, params: RequestParams = {}) =>
      this.request<CustomerEntityDetailsDTO, ApiErrorList>({
        path: `/companies/${cuid}/customers/${id}/updateCustomerAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Update existing Customer details only with given fields. Addresses and bank accounts will not be updated (they have own endpoints).
     *
     * @tags Customer register
     * @name CustomersUpdateCustomerCreate
     * @summary Update existing Customer details with given fields
     * @request POST:/companies/{cuid}/customers/{id}/updateCustomer
     * @response `200` `CustomerEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    customersUpdateCustomerCreate: (cuid: string, id: string, data: CustomerEntityDetailsDTO, params: RequestParams = {}) =>
      this.request<CustomerEntityDetailsDTO, ApiErrorList>({
        path: `/companies/${cuid}/customers/${id}/updateCustomer`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Creates a new address for existing customer. Address id will be created by Fivaldi. If address is marked as main address, existing main address will be set as not main address.
     *
     * @tags Customer register
     * @name CustomersCreateAddressCreate
     * @summary Create new address for existing Customer
     * @request POST:/companies/{cuid}/customers/{id}/createAddress
     * @response `200` `CustomerEntityAddressDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    customersCreateAddressCreate: (cuid: string, id: string, data: CustomerEntityAddressDTO, params: RequestParams = {}) =>
      this.request<CustomerEntityAddressDTO, ApiErrorList>({
        path: `/companies/${cuid}/customers/${id}/createAddress`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Updates address for existing customer. Address id that is updated will be taken from url. If address is marked as main address, existing main address will be set as not main address.
     *
     * @tags Customer register
     * @name CustomersAddressAddressIdUpdateAddressAllFieldsCreate
     * @summary Update existing address for existing Customer
     * @request POST:/companies/{cuid}/customers/{id}/address/{address-id}/updateAddressAllFields
     * @response `200` `CustomerEntityAddressDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    customersAddressAddressIdUpdateAddressAllFieldsCreate: (
      cuid: string,
      id: string,
      addressId: string,
      data: CustomerEntityAddressDTO,
      params: RequestParams = {}
    ) =>
      this.request<CustomerEntityAddressDTO, ApiErrorList>({
        path: `/companies/${cuid}/customers/${id}/address/${addressId}/updateAddressAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Creates a new bank account for existing customer. Bank account id will be created by Fivaldi. If iban is given, bban and swift will be set based on IBAN. If IBAN is not given, IBAN and swift will be set based on bban.
     *
     * @tags Customer register
     * @name CustomersCreateBankAccountCreate
     * @summary Create new bank account for existing Customer
     * @request POST:/companies/{cuid}/customers/{id}/createBankAccount
     * @response `200` `CustomerEntityBankAccountDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    customersCreateBankAccountCreate: (cuid: string, id: string, data: CustomerEntityBankAccountDTO, params: RequestParams = {}) =>
      this.request<CustomerEntityBankAccountDTO, ApiErrorList>({
        path: `/companies/${cuid}/customers/${id}/createBankAccount`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Updates bank account for existing customer. Bank account id that is updated will be taken from url. If iban is given, bban and swift will be set based on IBAN. If IBAN is not given, IBAN and swift will be set based on bban.
     *
     * @tags Customer register
     * @name CustomersBankAccountAccountIdUpdateBankAccountAllFieldsCreate
     * @summary Update existing bank account for existing Customer
     * @request POST:/companies/{cuid}/customers/{id}/bank-account/{account-id}/updateBankAccountAllFields
     * @response `200` `CustomerEntityBankAccountDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    customersBankAccountAccountIdUpdateBankAccountAllFieldsCreate: (
      cuid: string,
      id: string,
      accountId: string,
      data: CustomerEntityBankAccountDTO,
      params: RequestParams = {}
    ) =>
      this.request<CustomerEntityBankAccountDTO, ApiErrorList>({
        path: `/companies/${cuid}/customers/${id}/bank-account/${accountId}/updateBankAccountAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Endpoint returns list of id values and descriptions for product groups, units, posting groups and posting codes
     *
     * @tags Product register
     * @name ProductsGetProductRegisterBasicDetailsList
     * @summary Fivaldi Company's basic details for using correct id values on product
     * @request GET:/companies/{cuid}/products/getProductRegisterBasicDetails
     * @response `200` `string` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    productsGetProductRegisterBasicDetailsList: (
      cuid: string,
      query?: {
        /** Filter fields of the response objects, only ones provided will be included on response */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<string, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/products/getProductRegisterBasicDetails`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags Product register
     * @name ProductsList
     * @summary Get Fivaldi company's product register
     * @request GET:/companies/{cuid}/products
     * @response `200` `(ProductEntityDTO)[]` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    productsList: (
      cuid: string,
      query?: {
        /** Limit results with search word */
        searchWord?: string;
        /** Limit results with changed at date is given date or newer (dd.mm.yyyy) */
        fromDate?: string;
        /** Filter fields of the response objects, only ones provided will be included on response */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductEntityDTO[], ApiErrorList | ApiError>({
        path: `/companies/${cuid}/products`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * @description Endpoint returns complete product details, product descriptions with languages, product postings
     *
     * @tags Product register
     * @name ProductsDetail
     * @summary (Deprecated) Get Fivaldi Company's unique product with all details from register
     * @request GET:/companies/{cuid}/products/{id}
     * @response `200` `ProductEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    productsDetail: (
      cuid: string,
      id: string,
      query?: {
        /** Filter fields of the response objects, only ones provided will be included on response */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductEntityDetailsDTO, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/products/${id}`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * @description Endpoint returns complete product details, product descriptions with languages, product postings
     *
     * @tags Product register
     * @name ProductsGetProductList
     * @summary Get Fivaldi Company's unique product with all details from register
     * @request GET:/companies/{cuid}/products/getProduct
     * @response `200` `ProductEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `404` `ApiError`
     * @response `429` `any`
     */
    productsGetProductList: (
      cuid: string,
      query: {
        /** Product code of product from register encoded format (supports special characters on productCode). Max length 20 */
        productCode: string;
        /** Filter fields of the response objects, only ones provided will be included on response */
        fields?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductEntityDetailsDTO, ApiErrorList | ApiError>({
        path: `/companies/${cuid}/products/getProduct`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
     * @description If descriptions is not given, Fivaldi will create one description with Company's language. Fivaldi will set missing posting groups to product that are not given.
     *
     * @tags Product register
     * @name ProductsCreateProductCreate
     * @summary Create Product with descriptions and postings
     * @request POST:/companies/{cuid}/products/createProduct
     * @response `200` `ProductEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    productsCreateProductCreate: (cuid: string, data: ProductEntityDetailsDTO, params: RequestParams = {}) =>
      this.request<ProductEntityDetailsDTO, ApiErrorList>({
        path: `/companies/${cuid}/products/createProduct`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Update existing product details. Descriptions and accountings will not be updated even if they exist on request body. They have their own endpoints. ProductEntityDetailsDTO's productCode (product that will be updated) must exist on Company product register
     *
     * @tags Product register
     * @name ProductsUpdateProductAllFieldsCreate
     * @summary Update Product details
     * @request POST:/companies/{cuid}/products/updateProductAllFields
     * @response `200` `ProductEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    productsUpdateProductAllFieldsCreate: (cuid: string, data: ProductEntityDetailsDTO, params: RequestParams = {}) =>
      this.request<ProductEntityDetailsDTO, ApiErrorList>({
        path: `/companies/${cuid}/products/updateProductAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Update existing product details only with given fields, also null values will be updated. Descriptions and accountings will not be updated. They have their own endpoints. Query parameter productCode (product that will be updated) must exist on Company product register
     *
     * @tags Product register
     * @name ProductsUpdateProductCreate
     * @summary Update Product details with given fields
     * @request POST:/companies/{cuid}/products/updateProduct
     * @response `200` `ProductEntityDetailsDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    productsUpdateProductCreate: (
      cuid: string,
      query: {
        /** Product code where to update given fields */
        productCode: string;
      },
      data: ProductEntityDetailsDTO,
      params: RequestParams = {}
    ) =>
      this.request<ProductEntityDetailsDTO, ApiErrorList>({
        path: `/companies/${cuid}/products/updateProduct`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Creates new description to product with given language. Description on product with given language must not exist. Product code will be given on query parameter. Language code must exist on ProductEntityDescriptionDTO - object (description will be added with that language).
     *
     * @tags Product register
     * @name ProductsCreateProductDescriptionCreate
     * @summary Create Product description to existing product
     * @request POST:/companies/{cuid}/products/createProductDescription
     * @response `200` `ProductEntityDescriptionDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    productsCreateProductDescriptionCreate: (
      cuid: string,
      query: {
        /** Product code where to add new description with given language */
        productCode: string;
      },
      data: ProductEntityDescriptionDTO,
      params: RequestParams = {}
    ) =>
      this.request<ProductEntityDescriptionDTO, ApiErrorList>({
        path: `/companies/${cuid}/products/createProductDescription`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Updates description to product with given language. Description on product with given language must exist. Product code will be given on query parameter. Language code must exist on ProductEntityDescriptionDTO - object (description with that language will be updated).
     *
     * @tags Product register
     * @name ProductsUpdateProductDescriptionAllFieldsCreate
     * @summary Update Product description to existing products existing description
     * @request POST:/companies/{cuid}/products/updateProductDescriptionAllFields
     * @response `200` `ProductEntityDescriptionDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    productsUpdateProductDescriptionAllFieldsCreate: (
      cuid: string,
      query: {
        /** Product code where to update existing description with given language */
        productCode: string;
      },
      data: ProductEntityDescriptionDTO,
      params: RequestParams = {}
    ) =>
      this.request<ProductEntityDescriptionDTO, ApiErrorList>({
        path: `/companies/${cuid}/products/updateProductDescriptionAllFields`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * @description Updates posting to product with given posting group. Posting group with given posting group id must exist. Product code will be given on query parameter. Posting group id must exist on ProductEntityPostingDTO - object.
     *
     * @tags Product register
     * @name ProductsUpdateProductPostingAllFieldsCreate
     * @summary Update Product posting to existing products existing posting
     * @request POST:/companies/{cuid}/products/updateProductPostingAllFields
     * @response `200` `ProductEntityPostingDTO` OK
     * @response `400` `ApiErrorList`
     * @response `401` `any`
     * @response `403` `any`
     * @response `429` `any`
     */
    productsUpdateProductPostingAllFieldsCreate: (
      cuid: string,
      query: {
        /** Product code where to update existing posting with given posting group */
        productCode: string;
      },
      data: ProductEntityPostingDTO,
      params: RequestParams = {}
    ) =>
      this.request<ProductEntityPostingDTO, ApiErrorList>({
        path: `/companies/${cuid}/products/updateProductPostingAllFields`,
        method: 'POST',
        query: query,
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
 * @description Returns all persons for a Fivaldi company or all persons whose data has been changed if changedAfter-parameter has been used. This endpoint also returns persons who have non-disclosure for personal safety reasons (securityRestriction (Turvakielto)) activated in Fivaldi person register.
 *
 * @tags Estate person
 * @name EstatePersonPersonsList
 * @summary Get list of Fivaldi estate persons
 * @request GET:/companies/{cuid}/estate-person/persons
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalEstatePersonResponseDTO)[],

})` Response
 */
    estatePersonPersonsList: (
      cuid: string,
      query?: {
        /**
         * Only returns persons that has been changed at this date or after this date. Format dd.MM.yyyy
         * @format date
         */
        changedAfter?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalEstatePersonResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-person/persons`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Returns person's all information. This endpoint also returns addresses for persons who have non-disclosure for personal safety reasons (securityRestriction (Turvakielto)) activated in Fivaldi person register.
 *
 * @tags Estate person
 * @name EstatePersonPersonsDetail
 * @summary Get Fivaldi estate person
 * @request GET:/companies/{cuid}/estate-person/persons/{id}
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalEstatePersonDetailsResponseDTO,

})` Response
 */
    estatePersonPersonsDetail: (cuid: string, id: number, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalEstatePersonDetailsResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${id}`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Create a new person to the Fivaldi estate person registry.
 *
 * @tags Estate person
 * @name EstatePersonPersonsCreatePersonCreate
 * @summary Create estate person
 * @request POST:/companies/{cuid}/estate-person/persons/createPerson
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalEstatePersonDetailsResponseDTO,

})` Response
 */
    estatePersonPersonsCreatePersonCreate: (cuid: string, data: ExternalEstatePersonDetailsRequestDTO, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalEstatePersonDetailsResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/createPerson`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Add a new address for a person in the Fivaldi person register.
 *
 * @tags Estate person
 * @name EstatePersonPersonsAddAddressCreate
 * @summary Add address for a estate person
 * @request POST:/companies/{cuid}/estate-person/persons/{id}/addAddress
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalAddressResponseDTO,

})` Response
 */
    estatePersonPersonsAddAddressCreate: (cuid: string, id: number, data: ExternalAddressRequestDTO, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalAddressResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${id}/addAddress`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Add a person role for a person in the Fivaldi person register. Person role is typically used for indicating if a person is a member of board in an apartment housing company. List of Fivaldi person roles that can be assigned to a person can be found by using endpoint <GET /companies/{cuid}/estate-person/getCompanyPersonRolesInUse>
 *
 * @tags Estate person
 * @name EstatePersonPersonsAddPersonRoleCreate
 * @summary Add person role for a estate person
 * @request POST:/companies/{cuid}/estate-person/persons/{id}/addPersonRole
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalPersonRoleResponseDTO,

})` Response
 */
    estatePersonPersonsAddPersonRoleCreate: (cuid: string, id: number, data: ExternalPersonRoleRequestDTO, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalPersonRoleResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${id}/addPersonRole`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Add e-invoice information for a person in the Fivaldi person register. Parameter “directDebit” stands for “Suoramaksu”. “Suoramaksu” is used when you don’t have a netbank and you want to have paper invoices.
 *
 * @tags Estate person
 * @name EstatePersonPersonsAddEInvoiceInformationCreate
 * @summary Add einvoice information for a estate person
 * @request POST:/companies/{cuid}/estate-person/persons/{id}/addEInvoiceInformation
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalEInvoiceAddressResponseDTO,

})` Response
 */
    estatePersonPersonsAddEInvoiceInformationCreate: (
      cuid: string,
      id: number,
      data: ExternalEInvoiceAddressRequestDTO,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalEInvoiceAddressResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${id}/addEInvoiceInformation`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Update person details for a Fivaldi person register.
 *
 * @tags Estate person
 * @name EstatePersonPersonsUpdatePersonAllFieldsCreate
 * @summary Update estate person
 * @request POST:/companies/{cuid}/estate-person/persons/{id}/updatePersonAllFields
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalEstatePersonResponseDTO,

})` Response
 */
    estatePersonPersonsUpdatePersonAllFieldsCreate: (
      cuid: string,
      id: number,
      data: ExternalEstatePersonRequestDTO,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalEstatePersonResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${id}/updatePersonAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Update address for a Fivaldi person register. Parameter "type" stands for “Osoitetyyppi”. Parameter "typeDescription" stands for type of address (“Posti osoite”, “Käynti osoite”, “Väliaikainen osoite”, “Edellinen osoite”). Parameter "validEnd" stands for “Loppupvm”. Parameter "validStart" stands for “Alkupvm”.
 *
 * @tags Estate person
 * @name EstatePersonPersonsAddressUpdateAddressAllFieldsCreate
 * @summary Update address for a estate person
 * @request POST:/companies/{cuid}/estate-person/persons/{id}/address/{addressId}/updateAddressAllFields
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalAddressResponseDTO,

})` Response
 */
    estatePersonPersonsAddressUpdateAddressAllFieldsCreate: (
      cuid: string,
      id: number,
      addressId: number,
      data: ExternalAddressRequestDTO,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalAddressResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${id}/address/${addressId}/updateAddressAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Update a person role for a person in the Fivaldi person register. Person role is typically used for indicating if a person is a member of board in an apartment housing company. List of Fivaldi person roles that can be assigned to a person can be found by using endpoint <GET /companies/{cuid}/estate-person/getCompanyPersonRolesInUse>
 *
 * @tags Estate person
 * @name EstatePersonPersonsPersonRoleUpdatePersonRoleAllFieldsCreate
 * @summary Update person role for a estate person
 * @request POST:/companies/{cuid}/estate-person/persons/{id}/person-role/{personRoleId}/updatePersonRoleAllFields
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalPersonRoleResponseDTO,

})` Response
 */
    estatePersonPersonsPersonRoleUpdatePersonRoleAllFieldsCreate: (
      cuid: string,
      id: number,
      personRoleId: number,
      data: ExternalPersonRoleUpdateRequestDTO,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalPersonRoleResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${id}/person-role/${personRoleId}/updatePersonRoleAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Update e-invoice information for a person in Fivaldi person register.
 *
 * @tags Estate person
 * @name EstatePersonPersonsEinvoiceAddressUpdateEInvoiceInformationAllFieldsCreate
 * @summary Update einvoice information for a estate person
 * @request POST:/companies/{cuid}/estate-person/persons/{id}/einvoice-address/{addressId}/updateEInvoiceInformationAllFields
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalEInvoiceAddressResponseDTO,

})` Response
 */
    estatePersonPersonsEinvoiceAddressUpdateEInvoiceInformationAllFieldsCreate: (
      cuid: string,
      id: number,
      addressId: number,
      data: ExternalEInvoiceAddressUpdateRequestDTO,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalEInvoiceAddressResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${id}/einvoice-address/${addressId}/updateEInvoiceInformationAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Get a list of Fivaldi person roles that can be assigned to a person for a Fivaldi company. These person roles can then be assigned to persons in Fivaldi person register by using the endpoint <POST /companies/{cuid}/estate-person/persons/{id}/addPersonRole> by using "Person id" as a parameter.
 *
 * @tags Estate person
 * @name EstatePersonGetCompanyPersonRolesInUseList
 * @summary Get list of Fivaldi person roles that can be assigned to a person
 * @request GET:/companies/{cuid}/estate-person/getCompanyPersonRolesInUse
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalCompanyPersonRoleResponseDTO)[],

})` Response
 */
    estatePersonGetCompanyPersonRolesInUseList: (cuid: string, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalCompanyPersonRoleResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-person/getCompanyPersonRolesInUse`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get list of Fivaldi transmission types (Välitystapa). “Välitystapa” is used to define how invoices are sent (AutoInvoice, e-invoice, paper invoice, etc).
 *
 * @tags Estate person
 * @name EstatePersonGetTransmissionTypesList
 * @summary Get list of Fivaldi transmission types
 * @request GET:/companies/{cuid}/estate-person/getTransmissionTypes
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (TransmissionTypeDTO)[],

})` Response
 */
    estatePersonGetTransmissionTypesList: (cuid: string, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: TransmissionTypeDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-person/getTransmissionTypes`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get list of Fivaldi apartments.
 *
 * @tags Estate apartment
 * @name EstateApartmentApartmentsList
 * @summary Get list of Fivaldi apartments
 * @request GET:/companies/{cuid}/estate-apartment/apartments
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalApartmentResponseDTO)[],

})` Response
 */
    estateApartmentApartmentsList: (
      cuid: string,
      query?: {
        /** Earliest date that apartment is changed that will be considered. Format dd.mm.yyyy */
        changedAfter?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalApartmentResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-apartment/apartments`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Get Fivaldi apartment details.
 *
 * @tags Estate apartment
 * @name EstateApartmentApartmentsDetail
 * @summary Get Fivaldi apartment
 * @request GET:/companies/{cuid}/estate-apartment/apartments/{id}
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalApartmentDetailsResponseDTO,

})` Response
 */
    estateApartmentApartmentsDetail: (cuid: string, id: number, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalApartmentDetailsResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-apartment/apartments/${id}`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get list of Fivaldi bonds. Bond stands for “Sidos” in Fivaldi. “Sidos” is one part of Fivaldi registries which combines a Fivaldi person and a Fivaldi apartment as a one unit.
 *
 * @tags Estate bond
 * @name EstateBondBondsList
 * @summary Get list of Fivaldi bonds
 * @request GET:/companies/{cuid}/estate-bond/bonds
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalBondResponseDTO)[],

})` Response
 */
    estateBondBondsList: (
      cuid: string,
      query?: {
        /** Earliest date that bond is changed that will be considered. Format dd.mm.yyyy */
        changedAfter?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalBondResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-bond/bonds`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Get list of Fivaldi bond details.
 *
 * @tags Estate bond
 * @name EstateBondBondsReferenceNumberList
 * @summary Get Fivaldi bond
 * @request GET:/companies/{cuid}/estate-bond/bonds/{reference-number}
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalBondDetailsResponseDTO,

})` Response
 */
    estateBondBondsReferenceNumberList: (cuid: string, referenceNumber: string, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalBondDetailsResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-bond/bonds/${referenceNumber}`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get list of Fivaldi bonds by person ID.
 *
 * @tags Estate bond
 * @name EstatePersonPersonsPersonIdBondsList
 * @summary Get list of Fivaldi bonds by person
 * @request GET:/companies/{cuid}/estate-person/persons/{person-id}/bonds
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalBondDetailsResponseDTO)[],

})` Response
 */
    estatePersonPersonsPersonIdBondsList: (cuid: string, personId: number, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalBondDetailsResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-person/persons/${personId}/bonds`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get a list of Fivaldi bonds by apartment ID.
 *
 * @tags Estate bond
 * @name EstateApartmentApartmentsApartmentIdBondsList
 * @summary Get list of Fivaldi bond by apartment
 * @request GET:/companies/{cuid}/estate-apartment/apartments/{apartment-id}/bonds
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalBondDetailsResponseDTO)[],

})` Response
 */
    estateApartmentApartmentsApartmentIdBondsList: (cuid: string, apartmentId: number, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalBondDetailsResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-apartment/apartments/${apartmentId}/bonds`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get a list of Fivaldi bond payment types.
 *
 * @tags Estate bond
 * @name EstateBondBondPaymenttypesList
 * @summary Get list of changed bond payment types
 * @request GET:/companies/{cuid}/estate-bond/bond-paymenttypes
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalBondDetailsResponseDTO)[],

})` Response
 */
    estateBondBondPaymenttypesList: (
      cuid: string,
      query: {
        /** Earliest date that bond is changed that will be considered. Format dd.mm.yyyy */
        changedAfter: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalBondDetailsResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-bond/bond-paymenttypes`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Get list of Fivaldi meters.
 *
 * @tags Estate meter
 * @name EstateMeterMetersList
 * @summary Get list of Fivaldi meters
 * @request GET:/companies/{cuid}/estate-meter/meters
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalMeterResponseDTO)[],

})` Response
 */
    estateMeterMetersList: (cuid: string, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalMeterResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-meter/meters`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Add consumption readings for a Fivaldi meter. Meter can have two different saving methods (Tallennustapa). 1) Reading from the meter (Mittarin lukema) 2) Consumption comparing to the previous reading (Kulutus). By using endpoint <GET /companies/{cuid}/estate-meter/meters> you can get saving method types for the meters. If the meter has spinned, then parameter "meterSpinFlag" should be used. If the meter is replaced, then parameter "replaceValueFlag" should be used.
 *
 * @tags Estate meter
 * @name EstateMeterMeterReadingsSaveConsumptionReadingsCreate
 * @summary Create consumption readings for Fivaldi meter
 * @request POST:/companies/{cuid}/estate-meter/meter-readings/saveConsumptionReadings
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalMeterConsumptionResponseDTO)[],

})` Response
 */
    estateMeterMeterReadingsSaveConsumptionReadingsCreate: (
      cuid: string,
      data: ExternalMeterConsumptionRequestDTO[],
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalMeterConsumptionResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-meter/meter-readings/saveConsumptionReadings`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Get consumption readings for specific Fivaldi apartment.
 *
 * @tags Estate meter
 * @name EstateMeterMeterReadingsApartmentsApartmentIdList
 * @summary Get consumption readings for specific apartment
 * @request GET:/companies/{cuid}/estate-meter/meter-readings/apartments/{apartment-id}
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalApartmentMeterConsumptionsDTO,

})` Response
 */
    estateMeterMeterReadingsApartmentsApartmentIdList: (
      cuid: string,
      apartmentId: string,
      query: {
        /** Earliest date that meter consumption has been read. Format dd.mm.yyyy */
        readAfter: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalApartmentMeterConsumptionsDTO;
          })
      >({
        path: `/companies/${cuid}/estate-meter/meter-readings/apartments/${apartmentId}`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Get Fivaldi housing company details.
 *
 * @tags Estate preferences
 * @name EstatePreferencesHousingCompanyDetailsList
 * @summary Get Fivaldi housing company details
 * @request GET:/companies/{cuid}/estate-preferences/housingCompanyDetails
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalHousingCompanyDetailsResponseDTO,

})` Response
 */
    estatePreferencesHousingCompanyDetailsList: (cuid: string, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalHousingCompanyDetailsResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-preferences/housingCompanyDetails`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get list of Fivaldi payment types
 *
 * @tags Estate payment types
 * @name EstatePaymentTypesPaymentTypesList
 * @summary Get Fivaldi payment type information
 * @request GET:/companies/{cuid}/estate-payment-types/payment-types
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalPaymentTypeResponseDTO,

})` Response
 */
    estatePaymentTypesPaymentTypesList: (cuid: string, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalPaymentTypeResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-payment-types/payment-types`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get a list of receivables and prepayments for a specific bond. List of bonds can be found by using endpoint <GET /companies/{cuid}/estate-bond/bonds>. API returns either real time values or with endOfPeriod-parameter values for certain period for the receivables and prepayments.
 *
 * @tags Estate rent ledger
 * @name EstateRentLedgerGetReceivablesAndPrepaymentsReferenceNumberList
 * @summary Get list of receivables and prepayments for spesific bond
 * @request GET:/companies/{cuid}/estate-rent-ledger/getReceivablesAndPrepayments/{reference-number}
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalBondRentLedgerResponseDTO)[],

})` Response
 */
    estateRentLedgerGetReceivablesAndPrepaymentsReferenceNumberList: (
      cuid: string,
      referenceNumber: string,
      query?: {
        /** If given endpoint returns receivables (saatavat) and prepayments (ennakot) for certain period, otherwise real time values are returned. Value can be between 200001-209912 (format yyyymm) */
        endOfPeriod?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalBondRentLedgerResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-rent-ledger/getReceivablesAndPrepayments/${referenceNumber}`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Get a list of receivables and prepayments for a specific person. List of apartment repairs can be found by using endpoint <GET /companies/{cuid}/estate-person/persons>. API returns either real time values or with endOfPeriod-parameter values for certain period for the receivables and prepayments.
 *
 * @tags Estate rent ledger
 * @name EstateRentLedgerGetReceivablesAndPrepaymentsPersonsPersonIdList
 * @summary Get list of receivables and prepayments for spesific person
 * @request GET:/companies/{cuid}/estate-rent-ledger/getReceivablesAndPrepayments/persons/{person-id}
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalBondRentLedgerWithApartmentResponseDTO)[],

})` Response
 */
    estateRentLedgerGetReceivablesAndPrepaymentsPersonsPersonIdList: (
      cuid: string,
      personId: number,
      query?: {
        /** If given endpoint returns receivables (saatavat) and prepayments (ennakot) for certain period, otherwise real time values are returned. Value can be between 200001-209912 (format yyyymm) */
        endOfPeriod?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalBondRentLedgerWithApartmentResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-rent-ledger/getReceivablesAndPrepayments/persons/${personId}`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Get a list of receivables and prepayments for a specific apartment. List of apartment repairs can be found by using endpoint <GET /companies/{cuid}/estate-apartment/apartments>. API returns either real time values or with endOfPeriod-parameter values for certain period for the receivables and prepayments.
 *
 * @tags Estate rent ledger
 * @name EstateRentLedgerGetReceivablesAndPrepaymentsApartmentsApartmentIdList
 * @summary Get list of receivables and prepayments for spesific apartment
 * @request GET:/companies/{cuid}/estate-rent-ledger/getReceivablesAndPrepayments/apartments/{apartment-id}
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalBondRentLedgerWithPersonResponseDTO)[],

})` Response
 */
    estateRentLedgerGetReceivablesAndPrepaymentsApartmentsApartmentIdList: (
      cuid: string,
      apartmentId: number,
      query?: {
        /** If given endpoint returns receivables (saatavat) and prepayments (ennakot) for certain period, otherwise real time values are returned. Value can be between 200001-209912 (format yyyymm) */
        endOfPeriod?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalBondRentLedgerWithPersonResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-rent-ledger/getReceivablesAndPrepayments/apartments/${apartmentId}`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Get list of Fivaldi housing company repairs.
 *
 * @tags Estate repair
 * @name EstateApartmentHousingCompanyRepairsList
 * @summary Get list of Fivaldi apartment housing company repairs
 * @request GET:/companies/{cuid}/estate-apartment-housing-company/repairs
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalCompanyRepairResponseDTO)[],

})` Response
 */
    estateApartmentHousingCompanyRepairsList: (cuid: string, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalCompanyRepairResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-apartment-housing-company/repairs`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Get list of changed Fivaldi housing company repairs by using “changedAfter” parameter.
 *
 * @tags Estate repair
 * @name EstateApartmentRepairsList
 * @summary Get list of changed apartment repairs
 * @request GET:/companies/{cuid}/estate-apartment/repairs
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalApartmentRepairResponseDTO)[],

})` Response
 */
    estateApartmentRepairsList: (
      cuid: string,
      query: {
        /** Earliest date that repair is changed that will be considered. Format dd.mm.yyyy */
        changedAfter: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalApartmentRepairResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-apartment/repairs`,
        method: 'GET',
        query: query,
        ...params
      }),

    /**
 * @description Get a list of repairs of one Fivaldi apartment by using apartment ID.
 *
 * @tags Estate repair
 * @name EstateApartmentRepairsApartmentsRepairsList
 * @summary Get list of repairs about Fivaldi apartment
 * @request GET:/companies/{cuid}/estate-apartment/repairs/apartments/{id}/repairs
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `404` `void` Not Found
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: (ExternalApartmentRepairResponseDTO)[],

})` Response
 */
    estateApartmentRepairsApartmentsRepairsList: (cuid: string, id: number, params: RequestParams = {}) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalApartmentRepairResponseDTO[];
          })
      >({
        path: `/companies/${cuid}/estate-apartment/repairs/apartments/${id}/repairs`,
        method: 'GET',
        ...params
      }),

    /**
 * @description Create an apartment repair for one apartment in Fivaldi. List of Fivaldi apartments can be found by using endpoint <GET /companies/{cuid}/estate-apartment/apartments>
 *
 * @tags Estate repair
 * @name EstateApartmentRepairsCreateApartmentRepairCreate
 * @summary Create Fivaldi apartment repair
 * @request POST:/companies/{cuid}/estate-apartment/repairs/createApartmentRepair
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalApartmentRepairResponseDTO,

})` Response
 */
    estateApartmentRepairsCreateApartmentRepairCreate: (
      cuid: string,
      data: ExternalApartmentRepairRequestDTO,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalApartmentRepairResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-apartment/repairs/createApartmentRepair`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Update an apartment repair for one Fivaldi apartment. "Repair id" can be used as a parameter. List of apartment repairs can be found by using endpoint <GET /companies/{cuid}/estate-apartment/repairs/apartments/{id}/repairs>
 *
 * @tags Estate repair
 * @name EstateApartmentRepairsUpdateApartmentRepairAllFieldsCreate
 * @summary Update apartment repair
 * @request POST:/companies/{cuid}/estate-apartment/repairs/{id}/updateApartmentRepairAllFields
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalApartmentRepairResponseDTO,

})` Response
 */
    estateApartmentRepairsUpdateApartmentRepairAllFieldsCreate: (
      cuid: string,
      id: number,
      data: ExternalApartmentRepairRequestDTO,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalApartmentRepairResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-apartment/repairs/${id}/updateApartmentRepairAllFields`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * @description Create a repair for a Fivaldi company.
 *
 * @tags Estate repair
 * @name EstateApartmentHousingCompanyRepairsCreateCompanyRepairCreate
 * @summary Create Fivaldi apartment housing company repair
 * @request POST:/companies/{cuid}/estate-apartment-housing-company/repairs/createCompanyRepair
 * @response `200` `void` OK
 * @response `400` `void` Bad Request
 * @response `401` `void` Unauthorized
 * @response `403` `void` Forbidden
 * @response `429` `any`
 * @response `default` `(GeneralResponseEnvelope & {
    result?: ExternalCompanyRepairResponseDTO,

})` Response
 */
    estateApartmentHousingCompanyRepairsCreateCompanyRepairCreate: (
      cuid: string,
      data: ExternalCompanyRepairRequestDTO,
      params: RequestParams = {}
    ) =>
      this.request<
        void,
        | void
        | (GeneralResponseEnvelope & {
            result?: ExternalCompanyRepairResponseDTO;
          })
      >({
        path: `/companies/${cuid}/estate-apartment-housing-company/repairs/createCompanyRepair`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params
      }),

    /**
 * No description
 *
 * @tags Payroll
 * @name PayrollEmployeesList
 * @summary Get all active payroll employees for a company
 * @request GET:/companies/{cuid}/payroll/employees
 * @response `200` `(GeneralResponseEnvelope & {
    result?: (ExternalPayrollEmployeeDTO)[],

})` OK
 * @response `401` `any`
 * @response `404` `ApiError`
 * @response `429` `any`
 */
    payrollEmployeesList: (
      cuid: string,
      query?: {
        /** When given returns all employees whose employment is active in given date or after given date. Format dd.mm.yyyy */
        employmentActiveAfterDate?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<
        GeneralResponseEnvelope & {
          result?: ExternalPayrollEmployeeDTO[];
        },
        ApiError
      >({
        path: `/companies/${cuid}/payroll/employees`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params
      }),

    /**
 * No description
 *
 * @tags Payroll
 * @name PayrollEmployeesDetail
 * @summary Get a specific payroll employee
 * @request GET:/companies/{cuid}/payroll/employees/{employeeId}
 * @response `200` `(GeneralResponseEnvelope & {
    result?: ExternalPayrollEmployeeDTO,

})` OK
 * @response `401` `any`
 * @response `404` `ApiError`
 * @response `429` `any`
 */
    payrollEmployeesDetail: (cuid: string, employeeId: string, params: RequestParams = {}) =>
      this.request<
        GeneralResponseEnvelope & {
          result?: ExternalPayrollEmployeeDTO;
        },
        ApiError
      >({
        path: `/companies/${cuid}/payroll/employees/${employeeId}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
 * @description Post endpoint to import payroll transactions for a specific company identified by cuid.
 *
 * @tags Payroll
 * @name PayrollTransactionsCreate
 * @summary Import payroll transactions for a company
 * @request POST:/companies/{cuid}/payroll/transactions
 * @response `201` `(GeneralResponseEnvelope & {
  \** Success message indicating the number of imported payroll transactions *\
    result?: string,

})` Created
 * @response `400` `ApiErrorList`
 * @response `401` `any`
 * @response `403` `any`
 * @response `404` `ApiError`
 * @response `429` `any`
 */
    payrollTransactionsCreate: (cuid: string, data: ExternalPayrollTransactionImportBatchDTO, params: RequestParams = {}) =>
      this.request<
        GeneralResponseEnvelope & {
          /** Success message indicating the number of imported payroll transactions */
          result?: string;
        },
        ApiErrorList | ApiError
      >({
        path: `/companies/${cuid}/payroll/transactions`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      })
  };
}
