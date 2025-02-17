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
import type { SellerTaxonomyNode } from './SellerTaxonomyNode';
import {
    SellerTaxonomyNodeFromJSON,
    SellerTaxonomyNodeFromJSONTyped,
    SellerTaxonomyNodeToJSON,
    SellerTaxonomyNodeToJSONTyped,
} from './SellerTaxonomyNode';

/**
 * A list of taxonomy nodes from the seller taxonomy tree.
 * @export
 * @interface SellerTaxonomyNodes
 */
export interface SellerTaxonomyNodes {
    /**
     * The number of results.
     * @type {number}
     * @memberof SellerTaxonomyNodes
     */
    count?: number;
    /**
     * The list of requested resources.
     * @type {Array<SellerTaxonomyNode>}
     * @memberof SellerTaxonomyNodes
     */
    results?: Array<SellerTaxonomyNode>;
}

/**
 * Check if a given object implements the SellerTaxonomyNodes interface.
 */
export function instanceOfSellerTaxonomyNodes(value: object): value is SellerTaxonomyNodes {
    return true;
}

export function SellerTaxonomyNodesFromJSON(json: any): SellerTaxonomyNodes {
    return SellerTaxonomyNodesFromJSONTyped(json, false);
}

export function SellerTaxonomyNodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellerTaxonomyNodes {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(SellerTaxonomyNodeFromJSON)),
    };
}

export function SellerTaxonomyNodesToJSON(json: any): SellerTaxonomyNodes {
    return SellerTaxonomyNodesToJSONTyped(json, false);
}

export function SellerTaxonomyNodesToJSONTyped(value?: SellerTaxonomyNodes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(SellerTaxonomyNodeToJSON)),
    };
}

