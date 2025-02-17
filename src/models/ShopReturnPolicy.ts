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
 * Represents a listing-level return policy.
 * @export
 * @interface ShopReturnPolicy
 */
export interface ShopReturnPolicy {
    /**
     * The numeric ID of the [Return Policy](/documentation/reference#operation/getShopReturnPolicies).
     * @type {number}
     * @memberof ShopReturnPolicy
     */
    returnPolicyId?: number;
    /**
     * The unique positive non-zero numeric ID for an Etsy Shop.
     * @type {number}
     * @memberof ShopReturnPolicy
     */
    shopId?: number;
    /**
     * return_policy_accepts_returns
     * @type {boolean}
     * @memberof ShopReturnPolicy
     */
    acceptsReturns?: boolean;
    /**
     * return_policy_accepts_exchanges
     * @type {boolean}
     * @memberof ShopReturnPolicy
     */
    acceptsExchanges?: boolean;
    /**
     * The deadline for the Return Policy, measured in days. The value must be one of the following: [7, 14, 21, 30, 45, 60, 90].
     * @type {number}
     * @memberof ShopReturnPolicy
     */
    returnDeadline?: number | null;
}

/**
 * Check if a given object implements the ShopReturnPolicy interface.
 */
export function instanceOfShopReturnPolicy(value: object): value is ShopReturnPolicy {
    return true;
}

export function ShopReturnPolicyFromJSON(json: any): ShopReturnPolicy {
    return ShopReturnPolicyFromJSONTyped(json, false);
}

export function ShopReturnPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShopReturnPolicy {
    if (json == null) {
        return json;
    }
    return {
        
        'returnPolicyId': json['return_policy_id'] == null ? undefined : json['return_policy_id'],
        'shopId': json['shop_id'] == null ? undefined : json['shop_id'],
        'acceptsReturns': json['accepts_returns'] == null ? undefined : json['accepts_returns'],
        'acceptsExchanges': json['accepts_exchanges'] == null ? undefined : json['accepts_exchanges'],
        'returnDeadline': json['return_deadline'] == null ? undefined : json['return_deadline'],
    };
}

export function ShopReturnPolicyToJSON(json: any): ShopReturnPolicy {
    return ShopReturnPolicyToJSONTyped(json, false);
}

export function ShopReturnPolicyToJSONTyped(value?: ShopReturnPolicy | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'return_policy_id': value['returnPolicyId'],
        'shop_id': value['shopId'],
        'accepts_returns': value['acceptsReturns'],
        'accepts_exchanges': value['acceptsExchanges'],
        'return_deadline': value['returnDeadline'],
    };
}

