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
 * Represents a description of a shop production partner.
 * @export
 * @interface ShopProductionPartner
 */
export interface ShopProductionPartner {
    /**
     * The numeric ID of a production partner.
     * @type {number}
     * @memberof ShopProductionPartner
     */
    productionPartnerId?: number;
    /**
     * The name or title of the production partner.
     * @type {string}
     * @memberof ShopProductionPartner
     */
    partnerName?: string;
    /**
     * A string representing the production partner location.
     * @type {string}
     * @memberof ShopProductionPartner
     */
    location?: string;
}

/**
 * Check if a given object implements the ShopProductionPartner interface.
 */
export function instanceOfShopProductionPartner(value: object): value is ShopProductionPartner {
    return true;
}

export function ShopProductionPartnerFromJSON(json: any): ShopProductionPartner {
    return ShopProductionPartnerFromJSONTyped(json, false);
}

export function ShopProductionPartnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShopProductionPartner {
    if (json == null) {
        return json;
    }
    return {
        
        'productionPartnerId': json['production_partner_id'] == null ? undefined : json['production_partner_id'],
        'partnerName': json['partner_name'] == null ? undefined : json['partner_name'],
        'location': json['location'] == null ? undefined : json['location'],
    };
}

export function ShopProductionPartnerToJSON(json: any): ShopProductionPartner {
    return ShopProductionPartnerToJSONTyped(json, false);
}

export function ShopProductionPartnerToJSONTyped(value?: ShopProductionPartner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'production_partner_id': value['productionPartnerId'],
        'partner_name': value['partnerName'],
        'location': value['location'],
    };
}

