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
 * A property value for a specific product property, which may also employ a specific scale.
 * @export
 * @interface TaxonomyPropertyValue
 */
export interface TaxonomyPropertyValue {
    /**
     * The numeric ID of this property value.
     * @type {number}
     * @memberof TaxonomyPropertyValue
     */
    valueId?: number | null;
    /**
     * The name string of this property value.
     * @type {string}
     * @memberof TaxonomyPropertyValue
     */
    name?: string;
    /**
     * The numeric scale ID of the scale to which this property value belongs.
     * @type {number}
     * @memberof TaxonomyPropertyValue
     */
    scaleId?: number | null;
    /**
     * A list of numeric property value IDs this property value is equal to (if any).
     * @type {Array<number>}
     * @memberof TaxonomyPropertyValue
     */
    equalTo?: Array<number>;
}

/**
 * Check if a given object implements the TaxonomyPropertyValue interface.
 */
export function instanceOfTaxonomyPropertyValue(value: object): value is TaxonomyPropertyValue {
    return true;
}

export function TaxonomyPropertyValueFromJSON(json: any): TaxonomyPropertyValue {
    return TaxonomyPropertyValueFromJSONTyped(json, false);
}

export function TaxonomyPropertyValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxonomyPropertyValue {
    if (json == null) {
        return json;
    }
    return {
        
        'valueId': json['value_id'] == null ? undefined : json['value_id'],
        'name': json['name'] == null ? undefined : json['name'],
        'scaleId': json['scale_id'] == null ? undefined : json['scale_id'],
        'equalTo': json['equal_to'] == null ? undefined : json['equal_to'],
    };
}

export function TaxonomyPropertyValueToJSON(json: any): TaxonomyPropertyValue {
    return TaxonomyPropertyValueToJSONTyped(json, false);
}

export function TaxonomyPropertyValueToJSONTyped(value?: TaxonomyPropertyValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value_id': value['valueId'],
        'name': value['name'],
        'scale_id': value['scaleId'],
        'equal_to': value['equalTo'],
    };
}

