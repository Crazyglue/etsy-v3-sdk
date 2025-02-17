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
import type { ShippingCarrierMailClass } from './ShippingCarrierMailClass';
import {
    ShippingCarrierMailClassFromJSON,
    ShippingCarrierMailClassFromJSONTyped,
    ShippingCarrierMailClassToJSON,
    ShippingCarrierMailClassToJSONTyped,
} from './ShippingCarrierMailClass';

/**
 * A supported shipping carrier, which is used to calculate an Estimated Delivery Date.
 * @export
 * @interface ShippingCarrier
 */
export interface ShippingCarrier {
    /**
     * The numeric ID of this shipping carrier.
     * @type {number}
     * @memberof ShippingCarrier
     */
    shippingCarrierId?: number;
    /**
     * The name of this shipping carrier.
     * @type {string}
     * @memberof ShippingCarrier
     */
    name?: string;
    /**
     * Set of domestic mail classes of this shipping carrier.
     * @type {Array<ShippingCarrierMailClass>}
     * @memberof ShippingCarrier
     */
    domesticClasses?: Array<ShippingCarrierMailClass>;
    /**
     * Set of international mail classes of this shipping carrier.
     * @type {Array<ShippingCarrierMailClass>}
     * @memberof ShippingCarrier
     */
    internationalClasses?: Array<ShippingCarrierMailClass>;
}

/**
 * Check if a given object implements the ShippingCarrier interface.
 */
export function instanceOfShippingCarrier(value: object): value is ShippingCarrier {
    return true;
}

export function ShippingCarrierFromJSON(json: any): ShippingCarrier {
    return ShippingCarrierFromJSONTyped(json, false);
}

export function ShippingCarrierFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShippingCarrier {
    if (json == null) {
        return json;
    }
    return {
        
        'shippingCarrierId': json['shipping_carrier_id'] == null ? undefined : json['shipping_carrier_id'],
        'name': json['name'] == null ? undefined : json['name'],
        'domesticClasses': json['domestic_classes'] == null ? undefined : ((json['domestic_classes'] as Array<any>).map(ShippingCarrierMailClassFromJSON)),
        'internationalClasses': json['international_classes'] == null ? undefined : ((json['international_classes'] as Array<any>).map(ShippingCarrierMailClassFromJSON)),
    };
}

export function ShippingCarrierToJSON(json: any): ShippingCarrier {
    return ShippingCarrierToJSONTyped(json, false);
}

export function ShippingCarrierToJSONTyped(value?: ShippingCarrier | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'shipping_carrier_id': value['shippingCarrierId'],
        'name': value['name'],
        'domestic_classes': value['domesticClasses'] == null ? undefined : ((value['domesticClasses'] as Array<any>).map(ShippingCarrierMailClassToJSON)),
        'international_classes': value['internationalClasses'] == null ? undefined : ((value['internationalClasses'] as Array<any>).map(ShippingCarrierMailClassToJSON)),
    };
}

