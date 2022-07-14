# fivaldi-api-client

FivaldiApiClient is a third party Fivaldi API client.

:warning: This tool is in early stages and is subject to change.

## Installation

Add to project's package.json:

```
npm install @rantalainen/fivaldi-api-client
```

## Setup

### Import to NodeJS project

```js
const { FivaldiApiClient } = require('@rantalainen/fivaldi-api-client');
```

### Import to TypeScript project

```ts
import { FivaldiApiClient } from '@rantalainen/fivaldi-api-client';
```

### Setup client with options

In order to obtain a partner id and partner secret, please contact Fivaldi API support. Partner id and partner secret is needed to access all API functions.

```js
const fivaldi = new FivaldiApiClient({
  // Required options:
  partnerId: 'your_partner_id',
  partnerSecret: 'your_partner_secret'

  // Required for every method execpt root methods
  cuid: 'cuid_of_the_company'

  // Optional options (and default values):
  apiBaseUrl: 'https://api.fivaldi.net/customer/api',
  timeout: 120000
});
```
## Usage

To make API requests to certain company, the API client needs id for the company, which is called `cuid`.

Fivaldi API client has few general root methods that you can use without cuid. These methods can be used to find out the cuid of the company you need access to.

### Root methods

If you don't know the cuid of the company you want to access to with the API, you can fetch it with root methods. Easiest way is to search the company's info by `businessId` (y-tunnus):
```ts
const companyInfo = await fivaldi.getCompanies({ businessId: '1234567-0' });
const cuid = companyInfo.cuid;
fivaldi.setCuid(cuid);
```
If you don't know the business id of the company or you want to see all the customers your partner id has access to, you can use `getCustomers()` method.


:heavy_exclamation_mark: **_NOTE:_**  One partner id can have access to multiple customers. One customer can have access to multiple companies.


```ts
const customers = await fivaldi.getCustomers();
```
Then you can use `getCompanies()` again to search all the companies that certain customer has access to.
```ts
// See all the companies chosen customer has access to
const customers = await fivaldi.getCompanies({ customerId: 'CUSTOMER_ID' });
// This will return you list of the companies (including business id) this customer has access to

// You can then use the business id of the company you want access to and use it to get that company's cuid
const companyInfo = await fivaldi.getCompanies({ businessId: '1234567-0' });
```
After you've gotten the CUID of the company you want to access to, use `setCuid()` method to set the cuid.
```ts
const cuid = fivaldi.setCuid('CUID_OF_THE_COMPANY');
```
After this, you can use all the methods available.

## Implemented methods

The following API methods have been implemented:

- `bookkeeping` Bookkeeping
- `product` Product register
- `purchaseInvoices` Purchase invoices

### Bookkeeping examples

```js
// Get vouchers from certain time
const vouchers = await fivaldi.bookkeeping.getVouchers({ startDate: '2021-01-01', endDate: '2021-12-31' });

// Get a single voucher with voucher number
const voucher = await fivaldi.bookkeeping.getVoucherById({ voucherNumber: '802206001' });

// Create a new voucher and receive 
const voucher = {
    voucherTypeId: 80,
    originalVoucherNumber: '123',
    voucherDate: '2022-06-15',
    bookkeepingMonth: 202206,
    vatType: 'CALCULATED',
    validateEntrySum: true,
    voucherEntries: [
      {
        amount: -120,
        accountNumber: 3000,
        description: 'Entry number 1'
      },
      {
        amount: 120,
        accountNumber: 1701,
        description: 'Entry number 2'
      }
    ]
  };

const voucherNumber = await fivaldi.bookkeeping.createVoucher(voucher);
```

### Product examples

```js
// Get the basic information of all products that fits the possible search parameters
const products = await fivaldi.products.getAllProducts({ searchWord: 'travel' });

// Get an extended info of single product
const products = await fivaldi.products.getProduct('123');

// Create a new product
const product = await fivaldi.products.createProduct({
  productCode: '123',
  description: 'Bricks'
});

// Update a product giving all the fields you want to update (fields that are not given are converted to default values)
const product = await fivaldi.products.updateProductAllFields({
  productCode: '123',
  description: 'Bricks',
  purchaseCostPrice: 140.5,
  salesPrice: 189.99
});

// Update only the product fields that are given
const product = await fivaldi.products.updateProduct({ purchaseCostPrice: 155 });

// Create product language description (translation)
const product = await fivaldi.products.createProductDescription(
  {
    description: 'Tegelstenar',
    languageCode: 'SWE',
  },
  { productCode: '123' }
);
```

### Purchase invoice examples

```ts
// Get all purchase invoices that fit the possible search criteria
const purchaseInvoices = await fivaldi.purchaseInvoices.getPurchaseInvoices({ createTimeAfter: '01.02.2022%11:15:00' });

// Get a single purchase invoice with invoice id
const purchaseInvoice = await fivaldi.purchaseInvoices.getPurchaseInvoiceById('123');

// Create a new purhcase invoice
const purchaseInvoice = await fivaldi.purchaseInvoices.createPurchaseInvoice(purchaseInvoiceObject);

// Update purchase invoice with given fields
const purchaseInvoice = await fivaldi.purchaseInvoices.updatePurchaseInvoice('123', { paymentPriority: '2' });

// Get all purchase invoice rows of certain purchase invoice
const purchaseInvoiceRows = await fivaldi.purchaseInvoices.getPurchaseInvoiceRows('123');

// Get a single row of certain purchase invoice
const purchaseInvoiceRow = await fivaldi.purchaseInvoices.getPurchaseInvoiceRowById('123', '4');

// Create a new purchase invoice row
const purchaseInvoiceRow = await fivaldi.purchaseInvoices.createPurchaseInvoiceRow('123', purchaseInvoiceRowObject);

// Update purchase invoice row with given fields
const purchaseInvoiceRow = await fivaldi.purchaseInvoices.updatePurchaseInvoiceRow('123', '4', { productAmount: 187 });

// Delete a single purchase invoice row
await fivaldi.purchaseInvoices.deletePurchaseInvoiceRow('123', '4');

// Get all the comments of purchase invoice
const purchaseInvoiceComments = await fivaldi.purchaseInvoices.getPurchaseInvoiceComments('123');

// Create a new comment to purchase invoice
const purchaseInvoiceComment = await fivaldi.purchaseInvoices.createPurchaseInvoiceComment('123', purchaseInvoiceCommentObject);

```

## Resources

- Fivaldi website: https://www.visma.fi/visma-fivaldi/
- Fivaldi API Documentation: https://ohjeet.visma.fi/articles/#!visma-fivaldi/visma-fivaldi-api
- Fivaldi API Documentation (swagger): https://manuals.fivaldi.net/customer/api/index.html
- Fivaldi login page: https://api2.fivaldi.net/fivaldi-angular/

## Changelog

- 0.0.1 First release
- 0.1.0 Added Chart of Accounts method and fixed error logic