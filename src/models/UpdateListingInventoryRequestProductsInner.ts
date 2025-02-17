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

import { mapValues } from '../runtime';
import type { UpdateListingInventoryRequestProductsInnerOfferingsInner } from './UpdateListingInventoryRequestProductsInnerOfferingsInner';
import {
    UpdateListingInventoryRequestProductsInnerOfferingsInnerFromJSON,
    UpdateListingInventoryRequestProductsInnerOfferingsInnerFromJSONTyped,
    UpdateListingInventoryRequestProductsInnerOfferingsInnerToJSON,
    UpdateListingInventoryRequestProductsInnerOfferingsInnerToJSONTyped,
} from './UpdateListingInventoryRequestProductsInnerOfferingsInner';
import type { UpdateListingInventoryRequestProductsInnerPropertyValuesInner } from './UpdateListingInventoryRequestProductsInnerPropertyValuesInner';
import {
    UpdateListingInventoryRequestProductsInnerPropertyValuesInnerFromJSON,
    UpdateListingInventoryRequestProductsInnerPropertyValuesInnerFromJSONTyped,
    UpdateListingInventoryRequestProductsInnerPropertyValuesInnerToJSON,
    UpdateListingInventoryRequestProductsInnerPropertyValuesInnerToJSONTyped,
} from './UpdateListingInventoryRequestProductsInnerPropertyValuesInner';

/**
 * 
 * @export
 * @interface UpdateListingInventoryRequestProductsInner
 */
export interface UpdateListingInventoryRequestProductsInner {
    /**
     * The SKU string for the product
     * @type {string}
     * @memberof UpdateListingInventoryRequestProductsInner
     */
    sku?: string | null;
    /**
     * A list of property value entries for this product. Note: parenthesis characters (`(` and `)`) are not allowed.
     * @type {Array<UpdateListingInventoryRequestProductsInnerPropertyValuesInner>}
     * @memberof UpdateListingInventoryRequestProductsInner
     */
    propertyValues?: Array<UpdateListingInventoryRequestProductsInnerPropertyValuesInner>;
    /**
     * A list of product offering entries for this product.
     * @type {Array<UpdateListingInventoryRequestProductsInnerOfferingsInner>}
     * @memberof UpdateListingInventoryRequestProductsInner
     */
    offerings: Array<UpdateListingInventoryRequestProductsInnerOfferingsInner>;
}

/**
 * Check if a given object implements the UpdateListingInventoryRequestProductsInner interface.
 */
export function instanceOfUpdateListingInventoryRequestProductsInner(value: object): value is UpdateListingInventoryRequestProductsInner {
    if (!('offerings' in value) || value['offerings'] === undefined) return false;
    return true;
}

export function UpdateListingInventoryRequestProductsInnerFromJSON(json: any): UpdateListingInventoryRequestProductsInner {
    return UpdateListingInventoryRequestProductsInnerFromJSONTyped(json, false);
}

export function UpdateListingInventoryRequestProductsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateListingInventoryRequestProductsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'sku': json['sku'] == null ? undefined : json['sku'],
        'propertyValues': json['property_values'] == null ? undefined : ((json['property_values'] as Array<any>).map(UpdateListingInventoryRequestProductsInnerPropertyValuesInnerFromJSON)),
        'offerings': ((json['offerings'] as Array<any>).map(UpdateListingInventoryRequestProductsInnerOfferingsInnerFromJSON)),
    };
}

export function UpdateListingInventoryRequestProductsInnerToJSON(json: any): UpdateListingInventoryRequestProductsInner {
    return UpdateListingInventoryRequestProductsInnerToJSONTyped(json, false);
}

export function UpdateListingInventoryRequestProductsInnerToJSONTyped(value?: UpdateListingInventoryRequestProductsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'sku': value['sku'],
        'property_values': value['propertyValues'] == null ? undefined : ((value['propertyValues'] as Array<any>).map(UpdateListingInventoryRequestProductsInnerPropertyValuesInnerToJSON)),
        'offerings': ((value['offerings'] as Array<any>).map(UpdateListingInventoryRequestProductsInnerOfferingsInnerToJSON)),
    };
}

