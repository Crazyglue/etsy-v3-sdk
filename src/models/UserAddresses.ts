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
import type { UserAddress } from './UserAddress';
import {
    UserAddressFromJSON,
    UserAddressFromJSONTyped,
    UserAddressToJSON,
    UserAddressToJSONTyped,
} from './UserAddress';

/**
 * Represents several UserAddress records.
 * @export
 * @interface UserAddresses
 */
export interface UserAddresses {
    /**
     * The number of UserAddress records being returned.
     * @type {number}
     * @memberof UserAddresses
     */
    count?: number;
    /**
     * An array of UserAddress resources.
     * @type {Array<UserAddress>}
     * @memberof UserAddresses
     */
    results?: Array<UserAddress>;
}

/**
 * Check if a given object implements the UserAddresses interface.
 */
export function instanceOfUserAddresses(value: object): value is UserAddresses {
    return true;
}

export function UserAddressesFromJSON(json: any): UserAddresses {
    return UserAddressesFromJSONTyped(json, false);
}

export function UserAddressesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAddresses {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(UserAddressFromJSON)),
    };
}

export function UserAddressesToJSON(json: any): UserAddresses {
    return UserAddressesToJSONTyped(json, false);
}

export function UserAddressesToJSONTyped(value?: UserAddresses | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(UserAddressToJSON)),
    };
}

