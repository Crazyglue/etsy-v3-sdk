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
  SellerTaxonomyNodes,
  TaxonomyNodeProperties,
} from '../models/index';
import {
    ErrorSchemaFromJSON,
    ErrorSchemaToJSON,
    SellerTaxonomyNodesFromJSON,
    SellerTaxonomyNodesToJSON,
    TaxonomyNodePropertiesFromJSON,
    TaxonomyNodePropertiesToJSON,
} from '../models/index';

export interface GetPropertiesByTaxonomyIdRequest {
    taxonomyId: number;
}

/**
 * 
 */
export class SellerTaxonomyApi extends runtime.BaseAPI {

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves a list of product properties, with applicable scales and values, supported for a specific seller taxonomy ID.
     */
    async getPropertiesByTaxonomyIdRaw(requestParameters: GetPropertiesByTaxonomyIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TaxonomyNodeProperties>> {
        if (requestParameters['taxonomyId'] == null) {
            throw new runtime.RequiredError(
                'taxonomyId',
                'Required parameter "taxonomyId" was null or undefined when calling getPropertiesByTaxonomyId().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v3/application/seller-taxonomy/nodes/{taxonomy_id}/properties`.replace(`{${"taxonomy_id"}}`, encodeURIComponent(String(requestParameters['taxonomyId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaxonomyNodePropertiesFromJSON(jsonValue));
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves a list of product properties, with applicable scales and values, supported for a specific seller taxonomy ID.
     */
    async getPropertiesByTaxonomyId(requestParameters: GetPropertiesByTaxonomyIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TaxonomyNodeProperties> {
        const response = await this.getPropertiesByTaxonomyIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves the full hierarchy tree of seller taxonomy nodes.
     */
    async getSellerTaxonomyNodesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SellerTaxonomyNodes>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-api-key"] = await this.configuration.apiKey("x-api-key"); // api_key authentication
        }

        const response = await this.request({
            path: `/v3/application/seller-taxonomy/nodes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SellerTaxonomyNodesFromJSON(jsonValue));
    }

    /**
     * <div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><span class=\"wt-badge wt-badge--notificationPrimary wt-bg-slime-tint wt-mr-xs-2\">General Release</span><a class=\"wt-text-link\" href=\"https://github.com/etsy/open-api/discussions\" target=\"_blank\" rel=\"noopener noreferrer\">Report bug</a></div><div class=\"wt-display-flex-xs wt-align-items-center wt-mt-xs-2 wt-mb-xs-3\"><p class=\"wt-text-body-01 banner-text\">This endpoint is ready for production use.</p></div>  Retrieves the full hierarchy tree of seller taxonomy nodes.
     */
    async getSellerTaxonomyNodes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SellerTaxonomyNodes> {
        const response = await this.getSellerTaxonomyNodesRaw(initOverrides);
        return await response.value();
    }

}
