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
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
  /**
   * All bytes data are represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Different with `Address` type, hex-encoded bytes should not trim any zeros.
   * @type {string}
   * @memberof InlineResponse200
   */
  message: string;
}

export function InlineResponse200FromJSON(json: any): InlineResponse200 {
  return InlineResponse200FromJSONTyped(json, false);
}

export function InlineResponse200FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponse200 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: json["message"],
  };
}

export function InlineResponse200ToJSON(value?: InlineResponse200 | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
  };
}
