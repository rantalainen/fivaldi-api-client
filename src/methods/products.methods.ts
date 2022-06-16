import { FivaldiApiClient } from '../index';
import { Methods } from '../methods';
import {
  IProductEntityDetails,
  IGetAllProductsParams,
  IProductEntity,
  IGetProductParams,
  IProductRegisterBasicDetails,
  IProductEntityDescription,
  IProductUpdateParams,
  IProductEntityPosting
} from '../interfaces/products.interfaces';

export class ProductMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, '/products');
  }

  /** Gets id values and descriptions for product groups, units, posting groups and posting codes. */
  async getProductRegisterBasicDetails(): Promise<IProductRegisterBasicDetails> {
    return await super.request('GET', '/getProductRegisterBasicDetails');
  }

  /** Gets the company's product register. */
  async getAllProducts(params?: IGetAllProductsParams): Promise<IProductEntity[]> {
    return await super.request('GET', '', null, params);
  }

  /** Gets single product's complete product details, product descriptions with languages and product postings. */
  async getProduct(id: string, params?: IGetProductParams): Promise<IProductEntityDetails> {
    return await super.request('GET', `/${id}`, null, params);
  }

  /** Creates a product. If descriptions is not given, Fivaldi will create one description with Company's language. Fivaldi will set missing posting groups to product that are not given. */
  async createProduct(body: IProductEntityDetails): Promise<IProductEntityDetails> {
    return await super.request('POST', '/createProduct', body);
  }

  /** Update existing product details. Descriptions and accountings will not be updated even if they exist on request body. They have their own methods. Product code (product that will be updated) must exist on company's product register */
  async updateProductAllFields(body: IProductEntityDetails): Promise<IProductEntityDetails> {
    return await super.request('POST', '/updateProductAllFields', body);
  }

  /** Update existing product details only with given fields, also null values will be updated. Descriptions and accountings will not be updated. They have their own methods. Product code (product that will be updated) must exist on company's product register */
  async updateProduct(body: IProductEntityDetails, params: IProductUpdateParams): Promise<IProductEntityDetails> {
    return await super.request('POST', '/updateProduct', body, params);
  }

  /** Creates a new language description to product with given language. Description on product with given language must not exist. Product code will be given on query parameter. */
  async createProductDescription(body: IProductEntityDescription, params: IProductUpdateParams): Promise<IProductEntityDescription> {
    return await super.request('POST', '/createProductDescription', body, params);
  }

  /** Updates language description to product with given language. Description on product with given language must exist. Product code will be given on query parameter. */
  async updateProductDescriptionAllFields(
    body: IProductEntityDescription,
    params: IProductUpdateParams
  ): Promise<IProductEntityDescription> {
    return await super.request('POST', '/updateProductDescriptionAllFields', body, params);
  }

  /** Updates posting to product with given posting group. Posting group with given posting group id must exist. Product code will be given on query parameter. */
  async updateProductPostingAllFields(body: IProductEntityPosting, params: IProductUpdateParams): Promise<IProductEntityPosting> {
    return await super.request('POST', '/updateProductPostingAllFields', body, params);
  }
}
