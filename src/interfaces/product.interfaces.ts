export interface IProductRegisterBasicDetails {
  productPostingCodeDTOS: {
    id: string;
    description: string;
  }[];
  productPostingGroupDTOS: {
    id: string;
    description: string;
  }[];
  unitDTOS: {
    unitId: string;
    unit: string;
    description: string;
  }[];
  customsCountryDTOS: {
    customsCode: string;
  }[];
  productGroupDetailsDTOS: [];
}

export interface IGetAllProductsParams {
  /** Limit results with search word */
  searchWord?: string;
  /** Limit results with changed at date is given date or newer (dd.mm.yyyy) */
  fromDate?: string;
  /** Filter fields of the response objects, only ones provided will be included on response */
  fields?: string;
  [key: string]: any;
}

export interface IProductEntity {
  /** Product code (Tuotekoodi) */
  productCode: string;
  /** Product description. This is description of product using Fivaldi company's language (Selite) */
  description: string;
  /** Ean-code (Ean-koodi) */
  eanCode: string;
  /** Fivaldi will set this when product is inserted or updated (Muutosaika) */
  changeTime: string;
}

export interface IGetProductParams {
  /** Product code of product from register */
  id: string;
  /** Filter fields of the response objects, only ones provided will be included on response */
  fields?: string;
  [key: string]: any;
}

export interface IProductUpdateParams {
  /** Product code for the product which is updated */
  productCode: string;
}

export interface IProductEntityDetails {
  /** Product code (Tuotekoodi) */
  productCode: string;
  /** Product description. This is description of product using Fivaldi company's language (Selite) */
  description?: string;
  /** Ean-code (Ean-koodi) */
  eanCode?: string;
  /** Fivaldi will set this when product is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when product is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  /** Product group id for product (Tuoteryhmä) */
  productGroup?: string;
  /** Unit id for product (Yksikkö) */
  unitId?: string;
  /** Is this product set as default to new sales orders (Vakiorivi myyntidokumentilla) */
  defaultToInvoice?: true;
  /** Purchase cost price for this product with max. 6 decimals (Omakustannushinta) */
  purchaseCostPrice?: number;
  /** Sales price without tax for this product with max. 6 decimals (Myyntihinta) */
  salesPrice?: number;
  /** CN code for customs data (CN nimike) */
  cnCode?: string;
  /** CN unit for customs data (CN toinen paljous yksikkö) */
  cnUnit?: string;
  /** CN net weight(kg) for customs data with max. 6 decimals (CN nettopaino (kg)) */
  cnNetWeight?: number;
  /** CN multiplier for Customs data with max. 6 decimals (Toinen paljous kerroin) */
  cnMultiplier?: number;
  /** Origin country code for customs data with ISO 3166-1 standard (Alkuperämaa) */
  originCountry?: string;
  productEntityDescriptionDTOList?: IProductEntityDescription[];
  productEntityPostingDTOList?: IProductEntityPosting[];
  [key: string]: any;
}

export interface IProductEntityDescription {
  /** Description language code (Kielikoodi). Selitteet (FIN = Suomi, ENG = Englanti, SWE = Ruotsi) */
  languageCode: string;
  /** Product description with given language. Description of product using Fivaldi company's language will be shown on product description (Selite) */
  description?: string;
  /** Public description text. This will be set as extra description to product row on sales order row (Ulkoinen kuvaus) */
  publicDescriptionText?: string;
  /** Internal description text. This will be set as internal information to product row on sales order row (Sisäinen kuvaus) */
  internalDescriptionText?: string;
  /** Fivaldi will set this when product description is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when product description is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  [key: string]: any;
}

export interface IProductEntityPosting {
  /** Posting group id (Tiliöintiryhmä) */
  postingGroupId: string;
  /** Posting id. If empty product uses posting groups default posting on sales order if it is set (Tiliöintikoodi) */
  postingCodeId?: string;
  /** Fivaldi will set this when product posting is inserted or updated (Muutosaika) */
  changeTime?: string;
  /** Fivaldi will set this when product posting is inserted or updated (Muutoskäyttäjä) */
  changeUser?: string;
  [key: string]: any;
}
