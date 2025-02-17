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
import type { ListingPropertyValue } from './ListingPropertyValue';
import {
    ListingPropertyValueFromJSON,
    ListingPropertyValueFromJSONTyped,
    ListingPropertyValueToJSON,
    ListingPropertyValueToJSONTyped,
} from './ListingPropertyValue';
import type { ListingInventoryProductOffering } from './ListingInventoryProductOffering';
import {
    ListingInventoryProductOfferingFromJSON,
    ListingInventoryProductOfferingFromJSONTyped,
    ListingInventoryProductOfferingToJSON,
    ListingInventoryProductOfferingToJSONTyped,
} from './ListingInventoryProductOffering';

/**
 * A representation of a product for a listing.
 * @export
 * @interface ListingInventoryProduct
 */
export interface ListingInventoryProduct {
    /**
     * The numeric ID for a specific [product](/documentation/reference#tag/ShopListing-Product) purchased from a listing.
     * @type {number}
     * @memberof ListingInventoryProduct
     */
    productId?: number;
    /**
     * The SKU string for the product
     * @type {string}
     * @memberof ListingInventoryProduct
     */
    sku?: string;
    /**
     * When true, someone deleted this product.
     * @type {boolean}
     * @memberof ListingInventoryProduct
     */
    isDeleted?: boolean;
    /**
     * A list of product offering entries for this product.
     * @type {Array<ListingInventoryProductOffering>}
     * @memberof ListingInventoryProduct
     */
    offerings?: Array<ListingInventoryProductOffering>;
    /**
     * A list of property value entries for this product. Note: parenthesis characters (`(` and `)`) are not allowed.
     * @type {Array<ListingPropertyValue>}
     * @memberof ListingInventoryProduct
     */
    propertyValues?: Array<ListingPropertyValue>;
}

/**
 * Check if a given object implements the ListingInventoryProduct interface.
 */
export function instanceOfListingInventoryProduct(value: object): value is ListingInventoryProduct {
    return true;
}

export function ListingInventoryProductFromJSON(json: any): ListingInventoryProduct {
    return ListingInventoryProductFromJSONTyped(json, false);
}

export function ListingInventoryProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingInventoryProduct {
    if (json == null) {
        return json;
    }
    return {
        
        'productId': json['product_id'] == null ? undefined : json['product_id'],
        'sku': json['sku'] == null ? undefined : json['sku'],
        'isDeleted': json['is_deleted'] == null ? undefined : json['is_deleted'],
        'offerings': json['offerings'] == null ? undefined : ((json['offerings'] as Array<any>).map(ListingInventoryProductOfferingFromJSON)),
        'propertyValues': json['property_values'] == null ? undefined : ((json['property_values'] as Array<any>).map(ListingPropertyValueFromJSON)),
    };
}

export function ListingInventoryProductToJSON(json: any): ListingInventoryProduct {
    return ListingInventoryProductToJSONTyped(json, false);
}

export function ListingInventoryProductToJSONTyped(value?: ListingInventoryProduct | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'product_id': value['productId'],
        'sku': value['sku'],
        'is_deleted': value['isDeleted'],
        'offerings': value['offerings'] == null ? undefined : ((value['offerings'] as Array<any>).map(ListingInventoryProductOfferingToJSON)),
        'property_values': value['propertyValues'] == null ? undefined : ((value['propertyValues'] as Array<any>).map(ListingPropertyValueToJSON)),
    };
}

