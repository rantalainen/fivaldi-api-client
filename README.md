# fivaldi-api-client

**Fivaldi Api Client** is a third party [Fivaldi API](https://manuals.fivaldi.net/customer/api/index.html) client for NodeJS. It is a wrapper around an API client that has been [automatically generated](https://www.npmjs.com/package/swagger-typescript-api) using the [OpenAPI schema](https://manuals.fivaldi.net/customer/api/swagger.yaml) provided by Fivaldi.

## Installation

Add to project's package.json:

```
npm install @rantalainen/fivaldi-api-client
```

### Import

```typescript
import { FivaldiApiClient } from '@rantalainen/fivaldi-api-client';
```

## Setup client with options

In order to obtain partner ID and partner secret, please contact Fivaldi Support. Partner id and partner secret are needed to access API functions. More information from [Fivaldi docs](https://support.fivaldi.fi/support/solutions/articles/77000567542-fivaldi-api).

```typescript
const fivaldi = new FivaldiApiClient(
  {
    partnerId: 'yourPartnerId',
    partnerSecret: 'yourPartnerSecret',
    // Optional arguments related to rate limiting
    replenishRate: 2,
    burstCapacity: 10
  },
  {
    // Optional config options
    baseURL: 'https://api.fivaldi.net/customer/api',
    timeout: 120000,
    keepAliveAgent: true,
    dnsCache: true
  }
);
```

Available methods can be found in the [API documentation](https://manuals.fivaldi.net/customer/api/swagger.yaml).

## Resources

- Fivaldi website: https://www.visma.fi/visma-fivaldi/
- Fivaldi API Documentation: https://support.fivaldi.fi/support/solutions/articles/77000567542-fivaldi-api
- Fivaldi API Documentation (swagger): https://manuals.fivaldi.net/customer/api/index.html
