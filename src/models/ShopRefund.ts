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
import type { Money } from './Money';
import {
    MoneyFromJSON,
    MoneyFromJSONTyped,
    MoneyToJSON,
    MoneyToJSONTyped,
} from './Money';

/**
 * The refund record for a receipt.
 * @export
 * @interface ShopRefund
 */
export interface ShopRefund {
    /**
     * A number equal to the refund total.
     * @type {Money}
     * @memberof ShopRefund
     */
    amount?: Money;
    /**
     * The date & time of the refund, in epoch seconds.
     * @type {number}
     * @memberof ShopRefund
     */
    createdTimestamp?: number;
    /**
     * The reason string given for the refund.
     * @type {string}
     * @memberof ShopRefund
     */
    reason?: string | null;
    /**
     * The note string created by the refund issuer.
     * @type {string}
     * @memberof ShopRefund
     */
    noteFromIssuer?: string | null;
    /**
     * The status indication string for the refund.
     * @type {string}
     * @memberof ShopRefund
     */
    status?: string | null;
}

/**
 * Check if a given object implements the ShopRefund interface.
 */
export function instanceOfShopRefund(value: object): value is ShopRefund {
    return true;
}

export function ShopRefundFromJSON(json: any): ShopRefund {
    return ShopRefundFromJSONTyped(json, false);
}

export function ShopRefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShopRefund {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : MoneyFromJSON(json['amount']),
        'createdTimestamp': json['created_timestamp'] == null ? undefined : json['created_timestamp'],
        'reason': json['reason'] == null ? undefined : json['reason'],
        'noteFromIssuer': json['note_from_issuer'] == null ? undefined : json['note_from_issuer'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function ShopRefundToJSON(json: any): ShopRefund {
    return ShopRefundToJSONTyped(json, false);
}

export function ShopRefundToJSONTyped(value?: ShopRefund | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': MoneyToJSON(value['amount']),
        'created_timestamp': value['createdTimestamp'],
        'reason': value['reason'],
        'note_from_issuer': value['noteFromIssuer'],
        'status': value['status'],
    };
}

