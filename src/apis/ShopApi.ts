/* tslint:disable */
/* eslint-disable */
/**
 * Etsy Open API v3
 * <div class=\"wt-text-body-01\"><p class=\"wt-pt-xs-2 wt-pb-xs-2\">Etsy\'s Open API provides a simple RESTful interface for various Etsy.com features. The API endpoints are meant to replace Etsy\'s Open API v2, which is scheduled to end service in 2022.</p><p class=\"wt-pb-xs-2\">All of the endpoints are callable and the majority of the API endpoints are now in a beta phase. This means we do not expect to make any breaking changes before our general release. A handful of endpoints are currently interface stubs (labeled “Feedback Only”) and returns a \"501 Not Implemented\" response code when called.</p><p class=\"wt-pb-xs-2\">If you\'d like to report an issue or provide feedback on the API design, <a target=\"_blank\" class=\"wt-text-link wt-p-xs-0\" href=\"https://github.com/etsy/open-api/discussions\">please add an issue in Github</a>.</p></div>&copy; 2021-2025 Etsy, Inc. All Rights Reserved. Use of this code is subject to Etsy\'s <a class=\'wt-text-link wt-p-xs-0\' target=\'_blank\' href=\'https://www.etsy.com/legal/api\'>API Developer Terms of Use</a>.
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: developers@etsy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorSchema,
  Shop,
  Shops,
} from '../models/index';
import {
    ErrorSchemaFromJSON,
    ErrorSchemaToJSON,
    ShopFromJSON,
    ShopToJSON,
    ShopsFromJSON,
    ShopsToJSON,
} from '../models/index';

export interface FindShopsRequest {
    shopName: string;
    limit?: number;
    offset?: number;
}

export interface GetShopRequest {
    shopId: number;
}

export interface GetShopByOwnerUserIdRequest {
    userId: number;
}

export interface UpdateShopRequest {
    shopId: number;
    title?: string;
    announcement?: string;
    saleMessage?: string;
    digitalSaleMessage?: string;
    policyAdditional?: string;
}

/**
 * 
 */
export class ShopApi extends runtime.BaseAPI {

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Open API V3 endpoint for searching shops by name. Note: We make every effort to ensure that frozen or removed shops are not included in the search results. However, rarely, due to timing issues, they may appear.
     */
    async findShopsRaw(requestParameters: FindShopsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Shops>> {
        if (requestParameters['shopName'] == null) {
            throw new runtime.RequiredError(
                'shopName',
                'Required parameter "shopName" was null or undefined when calling findShops().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['shopName'] != null) {
            queryParameters['shop_name'] = requestParameters['shopName'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v3/application/shops`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShopsFromJSON(jsonValue));
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Open API V3 endpoint for searching shops by name. Note: We make every effort to ensure that frozen or removed shops are not included in the search results. However, rarely, due to timing issues, they may appear.
     */
    async findShops(requestParameters: FindShopsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Shops> {
        const response = await this.findShopsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves the shop identified by a specific shop ID.
     */
    async getShopRaw(requestParameters: GetShopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Shop>> {
        if (requestParameters['shopId'] == null) {
            throw new runtime.RequiredError(
                'shopId',
                'Required parameter "shopId" was null or undefined when calling getShop().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v3/application/shops/{shop_id}`.replace(`{${"shop_id"}}`, encodeURIComponent(String(requestParameters['shopId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShopFromJSON(jsonValue));
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves the shop identified by a specific shop ID.
     */
    async getShop(requestParameters: GetShopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Shop> {
        const response = await this.getShopRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves the shop identified by the shop owner\'s user ID.
     */
    async getShopByOwnerUserIdRaw(requestParameters: GetShopByOwnerUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Shop>> {
        if (requestParameters['userId'] == null) {
            throw new runtime.RequiredError(
                'userId',
                'Required parameter "userId" was null or undefined when calling getShopByOwnerUserId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v3/application/users/{user_id}/shops`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters['userId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShopFromJSON(jsonValue));
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves the shop identified by the shop owner\'s user ID.
     */
    async getShopByOwnerUserId(requestParameters: GetShopByOwnerUserIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Shop> {
        const response = await this.getShopByOwnerUserIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Updates a shop. Assumes that all string parameters are provided in the shop\'s primary language. Please note that the policy_additional field should only be set for shops located in the EU. Passing a value for this field for shops outside of the EU, will result in an error.
     */
    async updateShopRaw(requestParameters: UpdateShopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Shop>> {
        if (requestParameters['shopId'] == null) {
            throw new runtime.RequiredError(
                'shopId',
                'Required parameter "shopId" was null or undefined when calling updateShop().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["shops_r", "shops_w"]);
        }

        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['title'] != null) {
            formParams.append('title', requestParameters['title'] as any);
        }

        if (requestParameters['announcement'] != null) {
            formParams.append('announcement', requestParameters['announcement'] as any);
        }

        if (requestParameters['saleMessage'] != null) {
            formParams.append('sale_message', requestParameters['saleMessage'] as any);
        }

        if (requestParameters['digitalSaleMessage'] != null) {
            formParams.append('digital_sale_message', requestParameters['digitalSaleMessage'] as any);
        }

        if (requestParameters['policyAdditional'] != null) {
            formParams.append('policy_additional', requestParameters['policyAdditional'] as any);
        }

        const response = await this.request({
            path: `/v3/application/shops/{shop_id}`.replace(`{${"shop_id"}}`, encodeURIComponent(String(requestParameters['shopId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ShopFromJSON(jsonValue));
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Updates a shop. Assumes that all string parameters are provided in the shop\'s primary language. Please note that the policy_additional field should only be set for shops located in the EU. Passing a value for this field for shops outside of the EU, will result in an error.
     */
    async updateShop(requestParameters: UpdateShopRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Shop> {
        const response = await this.updateShopRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
