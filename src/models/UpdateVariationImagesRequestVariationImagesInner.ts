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
/**
 * 
 * @export
 * @interface UpdateVariationImagesRequestVariationImagesInner
 */
export interface UpdateVariationImagesRequestVariationImagesInner {
    /**
     * 
     * @type {number}
     * @memberof UpdateVariationImagesRequestVariationImagesInner
     */
    propertyId: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateVariationImagesRequestVariationImagesInner
     */
    valueId: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateVariationImagesRequestVariationImagesInner
     */
    imageId: number;
}

/**
 * Check if a given object implements the UpdateVariationImagesRequestVariationImagesInner interface.
 */
export function instanceOfUpdateVariationImagesRequestVariationImagesInner(value: object): value is UpdateVariationImagesRequestVariationImagesInner {
    if (!('propertyId' in value) || value['propertyId'] === undefined) return false;
    if (!('valueId' in value) || value['valueId'] === undefined) return false;
    if (!('imageId' in value) || value['imageId'] === undefined) return false;
    return true;
}

export function UpdateVariationImagesRequestVariationImagesInnerFromJSON(json: any): UpdateVariationImagesRequestVariationImagesInner {
    return UpdateVariationImagesRequestVariationImagesInnerFromJSONTyped(json, false);
}

export function UpdateVariationImagesRequestVariationImagesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateVariationImagesRequestVariationImagesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'propertyId': json['property_id'],
        'valueId': json['value_id'],
        'imageId': json['image_id'],
    };
}

export function UpdateVariationImagesRequestVariationImagesInnerToJSON(json: any): UpdateVariationImagesRequestVariationImagesInner {
    return UpdateVariationImagesRequestVariationImagesInnerToJSONTyped(json, false);
}

export function UpdateVariationImagesRequestVariationImagesInnerToJSONTyped(value?: UpdateVariationImagesRequestVariationImagesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'property_id': value['propertyId'],
        'value_id': value['valueId'],
        'image_id': value['imageId'],
    };
}

