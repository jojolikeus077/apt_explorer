/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * Diem Dev API Specification
 * Diem Dev API is REST API for client applications to interact the Diem blockchain.
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {exists, mapValues} from "../runtime";
/**
 *
 * @export
 * @interface PendingTransactionAllOf
 */
export interface PendingTransactionAllOf {
  /**
   *
   * @type {string}
   * @memberof PendingTransactionAllOf
   */
  type: string;
  /**
   * All bytes data are represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Different with `Address` type, hex-encoded bytes should not trim any zeros.
   * @type {string}
   * @memberof PendingTransactionAllOf
   */
  hash: string;
}

export function PendingTransactionAllOfFromJSON(
  json: any,
): PendingTransactionAllOf {
  return PendingTransactionAllOfFromJSONTyped(json, false);
}

export function PendingTransactionAllOfFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PendingTransactionAllOf {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    hash: json["hash"],
  };
}

export function PendingTransactionAllOfToJSON(
  value?: PendingTransactionAllOf | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type,
    hash: value.hash,
  };
}
