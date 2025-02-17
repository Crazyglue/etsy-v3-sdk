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
 * Represents the translation data for a Listing.
 * @export
 * @interface ListingTranslation
 */
export interface ListingTranslation {
    /**
     * The numeric ID for the Listing.
     * @type {number}
     * @memberof ListingTranslation
     */
    listingId?: number;
    /**
     * The IETF language tag (e.g. 'fr') for the language of this translation.
     * @type {string}
     * @memberof ListingTranslation
     */
    language?: string;
    /**
     * The title of the Listing of this Translation.
     * @type {string}
     * @memberof ListingTranslation
     */
    title?: string | null;
    /**
     * The description of the Listing of this Translation.
     * @type {string}
     * @memberof ListingTranslation
     */
    description?: string | null;
    /**
     * The tags of the Listing of this Translation.
     * @type {Array<string>}
     * @memberof ListingTranslation
     */
    tags?: Array<string>;
}

/**
 * Check if a given object implements the ListingTranslation interface.
 */
export function instanceOfListingTranslation(value: object): value is ListingTranslation {
    return true;
}

export function ListingTranslationFromJSON(json: any): ListingTranslation {
    return ListingTranslationFromJSONTyped(json, false);
}

export function ListingTranslationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingTranslation {
    if (json == null) {
        return json;
    }
    return {
        
        'listingId': json['listing_id'] == null ? undefined : json['listing_id'],
        'language': json['language'] == null ? undefined : json['language'],
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'tags': json['tags'] == null ? undefined : json['tags'],
    };
}

export function ListingTranslationToJSON(json: any): ListingTranslation {
    return ListingTranslationToJSONTyped(json, false);
}

export function ListingTranslationToJSONTyped(value?: ListingTranslation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'listing_id': value['listingId'],
        'language': value['language'],
        'title': value['title'],
        'description': value['description'],
        'tags': value['tags'],
    };
}

