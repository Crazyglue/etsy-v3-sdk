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
 * A taxonomy node in the seller taxonomy tree.
 * @export
 * @interface SellerTaxonomyNode
 */
export interface SellerTaxonomyNode {
    /**
     * The unique numeric ID of an Etsy taxonomy node, which is a metadata category for listings organized into the seller taxonomy hierarchy tree. For example, the \"shoes\" taxonomy node (ID: 1429, level: 1) is higher in the hierarchy than \"girls' shoes\" (ID: 1440, level: 2). The taxonomy nodes assigned to a listing support access to specific standardized product scales and properties. For example, listings assigned the taxonomy nodes \"shoes\" or \"girls' shoes\" support access to the \"EU\" shoe size scale with its associated property names and IDs for EU shoe sizes, such as property `value_id`:\"1394\", and `name`:\"38\".
     * @type {number}
     * @memberof SellerTaxonomyNode
     */
    id?: number;
    /**
     * The integer depth of this taxonomy node in the seller taxonomy tree, with roots at level 0.
     * @type {number}
     * @memberof SellerTaxonomyNode
     */
    level?: number;
    /**
     * The name string for this taxonomy node.
     * @type {string}
     * @memberof SellerTaxonomyNode
     */
    name?: string;
    /**
     * The numeric taxonomy ID of the parent of this node.
     * @type {number}
     * @memberof SellerTaxonomyNode
     */
    parentId?: number | null;
    /**
     * An array of taxonomy nodes for all the direct children of this taxonomy node in the seller taxonomy tree.
     * @type {Array<SellerTaxonomyNode>}
     * @memberof SellerTaxonomyNode
     */
    children?: Array<SellerTaxonomyNode>;
    /**
     * An array of `taxonomy_id`s including this node and all of its direct parents in the seller taxonomy tree up to a root node. They are listed in order from root to leaf.
     * @type {Array<number>}
     * @memberof SellerTaxonomyNode
     */
    fullPathTaxonomyIds?: Array<number>;
}

/**
 * Check if a given object implements the SellerTaxonomyNode interface.
 */
export function instanceOfSellerTaxonomyNode(value: object): value is SellerTaxonomyNode {
    return true;
}

export function SellerTaxonomyNodeFromJSON(json: any): SellerTaxonomyNode {
    return SellerTaxonomyNodeFromJSONTyped(json, false);
}

export function SellerTaxonomyNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SellerTaxonomyNode {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'level': json['level'] == null ? undefined : json['level'],
        'name': json['name'] == null ? undefined : json['name'],
        'parentId': json['parent_id'] == null ? undefined : json['parent_id'],
        'children': json['children'] == null ? undefined : ((json['children'] as Array<any>).map(SellerTaxonomyNodeFromJSON)),
        'fullPathTaxonomyIds': json['full_path_taxonomy_ids'] == null ? undefined : json['full_path_taxonomy_ids'],
    };
}

export function SellerTaxonomyNodeToJSON(json: any): SellerTaxonomyNode {
    return SellerTaxonomyNodeToJSONTyped(json, false);
}

export function SellerTaxonomyNodeToJSONTyped(value?: SellerTaxonomyNode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'level': value['level'],
        'name': value['name'],
        'parent_id': value['parentId'],
        'children': value['children'] == null ? undefined : ((value['children'] as Array<any>).map(SellerTaxonomyNodeToJSON)),
        'full_path_taxonomy_ids': value['fullPathTaxonomyIds'],
    };
}

