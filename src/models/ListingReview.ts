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
 * A listing review record left by a User.
 * @export
 * @interface ListingReview
 */
export interface ListingReview {
    /**
     * The shop's numeric ID.
     * @type {number}
     * @memberof ListingReview
     */
    shopId?: number;
    /**
     * The ID of the ShopListing that the TransactionReview belongs to.
     * @type {number}
     * @memberof ListingReview
     */
    listingId?: number;
    /**
     * Rating value on scale from 1 to 5
     * @type {number}
     * @memberof ListingReview
     */
    rating?: number;
    /**
     * A message left by the author, explaining the feedback, if provided.
     * @type {string}
     * @memberof ListingReview
     */
    review?: string | null;
    /**
     * The language of the TransactionReview
     * @type {string}
     * @memberof ListingReview
     */
    language?: string;
    /**
     * The url to a photo provided with the feedback, dimensions fullxfull. Note: This field may be absent, depending on the buyer's privacy settings.
     * @type {string}
     * @memberof ListingReview
     */
    imageUrlFullxfull?: string | null;
    /**
     * The date and time the TransactionReview was created in epoch seconds.
     * @type {number}
     * @memberof ListingReview
     */
    createTimestamp?: number;
    /**
     * The date and time the TransactionReview was created in epoch seconds.
     * @type {number}
     * @memberof ListingReview
     */
    createdTimestamp?: number;
    /**
     * The date and time the TransactionReview was updated in epoch seconds.
     * @type {number}
     * @memberof ListingReview
     */
    updateTimestamp?: number;
    /**
     * The date and time the TransactionReview was updated in epoch seconds.
     * @type {number}
     * @memberof ListingReview
     */
    updatedTimestamp?: number;
}

/**
 * Check if a given object implements the ListingReview interface.
 */
export function instanceOfListingReview(value: object): value is ListingReview {
    return true;
}

export function ListingReviewFromJSON(json: any): ListingReview {
    return ListingReviewFromJSONTyped(json, false);
}

export function ListingReviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListingReview {
    if (json == null) {
        return json;
    }
    return {
        
        'shopId': json['shop_id'] == null ? undefined : json['shop_id'],
        'listingId': json['listing_id'] == null ? undefined : json['listing_id'],
        'rating': json['rating'] == null ? undefined : json['rating'],
        'review': json['review'] == null ? undefined : json['review'],
        'language': json['language'] == null ? undefined : json['language'],
        'imageUrlFullxfull': json['image_url_fullxfull'] == null ? undefined : json['image_url_fullxfull'],
        'createTimestamp': json['create_timestamp'] == null ? undefined : json['create_timestamp'],
        'createdTimestamp': json['created_timestamp'] == null ? undefined : json['created_timestamp'],
        'updateTimestamp': json['update_timestamp'] == null ? undefined : json['update_timestamp'],
        'updatedTimestamp': json['updated_timestamp'] == null ? undefined : json['updated_timestamp'],
    };
}

export function ListingReviewToJSON(json: any): ListingReview {
    return ListingReviewToJSONTyped(json, false);
}

export function ListingReviewToJSONTyped(value?: ListingReview | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'shop_id': value['shopId'],
        'listing_id': value['listingId'],
        'rating': value['rating'],
        'review': value['review'],
        'language': value['language'],
        'image_url_fullxfull': value['imageUrlFullxfull'],
        'create_timestamp': value['createTimestamp'],
        'created_timestamp': value['createdTimestamp'],
        'update_timestamp': value['updateTimestamp'],
        'updated_timestamp': value['updatedTimestamp'],
    };
}

