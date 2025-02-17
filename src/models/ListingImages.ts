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
import type { ListingImage } from './ListingImage';
import {
    ListingImageFromJSON,
    ListingImageFromJSONTyped,
    ListingImageToJSON,
    ListingImageToJSONTyped,
} from './ListingImage';

/**
 * Represents a list of listing image resources, each of which contains the reference URLs and metadata for an image.
 * @export
 * @interface ListingImages
 */
export interface ListingImages {
    /**
     * The number of results.
     * @type {number}
     * @memberof ListingImages
     */
    count?: number;
    /**
     * The list of requested resources.
     * @type {Array<ListingImage>}
     * @memberof ListingImages
     */
    results?: Array<ListingImage>;
}

/**
 * Check if a given object implements the ListingImages interface.
 */
export function instanceOfListingImages(value: object): value is ListingImages {
    return true;
}

export function ListingImagesFromJSON(json: any): ListingImages {
    return ListingImagesFromJSONTyped(json, false);
}

export function ListingImagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingImages {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(ListingImageFromJSON)),
    };
}

export function ListingImagesToJSON(json: any): ListingImages {
    return ListingImagesToJSONTyped(json, false);
}

export function ListingImagesToJSONTyped(value?: ListingImages | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(ListingImageToJSON)),
    };
}

