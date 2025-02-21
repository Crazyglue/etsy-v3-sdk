# Etsy V3 SDK

This package is used to interact with the Etsy V3 API. It uses the [official Etsy V3 OpenAPI Spec](https://www.etsy.com/openapi/generated/oas/3.0.0.json) to generate an SDK that can be imported into a Node.JS project.

It uses the [openapi-cli-generator](https://openapi-generator.tech/) utility to generate a [typescript-fetch](https://openapi-generator.tech/docs/generators/typescript-fetch) client

## Usage

### Installation

```bash
npm install --save etsy-v3-sdk
```

### On your server

```ts
import { Configuration, ShopReceiptApi, UserApi } from 'etsy-v3-sdk';

// Create a reusable Configuration object with your api-key and oauth keystring
const config = new Configuration({
    apiKey: process.env.ETSY_API_KEYSTRING, // This is your apps "keystring" in the Etsy console
    accessToken: `Bearer ${process.env.ETSY_API_KEY}`, // This is the access-token fetched from the oauth2 access flow. See: https://developers.etsy.com/documentation/essentials/authentication
})

// Create an API for the specific api you wish to access. In this case the users API
const api = new UserApi(config)
const me = await api.getMe()
console.log(me);
// { userId: 1234567890, shopId: 1234567890 }

// Use this information to get your shop's receipts
const shopApi = new ShopReceiptApi(config)
const receipts = await shopApi.getShopReceipts({
    shopId: me.shopId
})
console.log(receipts)
```

Note: You will need to have requested a token with sufficient scopes to access the various APIs. 
