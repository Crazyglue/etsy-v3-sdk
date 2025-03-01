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
  ListingInventory,
  ListingInventoryWithAssociations,
  UpdateListingInventoryRequest,
} from '../models/index';
import {
    ErrorSchemaFromJSON,
    ErrorSchemaToJSON,
    ListingInventoryFromJSON,
    ListingInventoryToJSON,
    ListingInventoryWithAssociationsFromJSON,
    ListingInventoryWithAssociationsToJSON,
    UpdateListingInventoryRequestFromJSON,
    UpdateListingInventoryRequestToJSON,
} from '../models/index';

export interface GetListingInventoryRequest {
    listingId: number;
    showDeleted?: boolean;
    includes?: GetListingInventoryIncludesEnum;
}

export interface UpdateListingInventoryOperationRequest {
    listingId: number;
    updateListingInventoryRequest?: UpdateListingInventoryRequest;
}

/**
 * 
 */
export class ShopListingInventoryApi extends runtime.BaseAPI {

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves the inventory record for a listing. Listings you did not edit using the Etsy.com inventory tools have no inventory records. This endpoint returns SKU data if you are the owner of the inventory records being fetched.
     */
    async getListingInventoryRaw(requestParameters: GetListingInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListingInventoryWithAssociations>> {
        if (requestParameters['listingId'] == null) {
            throw new runtime.RequiredError(
                'listingId',
                'Required parameter "listingId" was null or undefined when calling getListingInventory().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['showDeleted'] != null) {
            queryParameters['show_deleted'] = requestParameters['showDeleted'];
        }

        if (requestParameters['includes'] != null) {
            queryParameters['includes'] = requestParameters['includes'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["listings_r"]);
        }

        const response = await this.request({
            path: `/v3/application/listings/{listing_id}/inventory`.replace(`{${"listing_id"}}`, encodeURIComponent(String(requestParameters['listingId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListingInventoryWithAssociationsFromJSON(jsonValue));
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves the inventory record for a listing. Listings you did not edit using the Etsy.com inventory tools have no inventory records. This endpoint returns SKU data if you are the owner of the inventory records being fetched.
     */
    async getListingInventory(requestParameters: GetListingInventoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListingInventoryWithAssociations> {
        const response = await this.getListingInventoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Updates the inventory for a listing identified by a listing ID. The update fails if the supplied values for product sku, offering quantity, and/or price are incompatible with values in `*_on_property_*` fields. When setting a price, assign a float equal to amount divided by divisor as specified in the Money resource.
     */
    async updateListingInventoryRaw(requestParameters: UpdateListingInventoryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListingInventory>> {
        if (requestParameters['listingId'] == null) {
            throw new runtime.RequiredError(
                'listingId',
                'Required parameter "listingId" was null or undefined when calling updateListingInventory().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["listings_w"]);
        }

        const response = await this.request({
            path: `/v3/application/listings/{listing_id}/inventory`.replace(`{${"listing_id"}}`, encodeURIComponent(String(requestParameters['listingId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateListingInventoryRequestToJSON(requestParameters['updateListingInventoryRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListingInventoryFromJSON(jsonValue));
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Updates the inventory for a listing identified by a listing ID. The update fails if the supplied values for product sku, offering quantity, and/or price are incompatible with values in `*_on_property_*` fields. When setting a price, assign a float equal to amount divided by divisor as specified in the Money resource.
     */
    async updateListingInventory(requestParameters: UpdateListingInventoryOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListingInventory> {
        const response = await this.updateListingInventoryRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetListingInventoryIncludesEnum = {
    Listing: 'Listing'
} as const;
export type GetListingInventoryIncludesEnum = typeof GetListingInventoryIncludesEnum[keyof typeof GetListingInventoryIncludesEnum];
