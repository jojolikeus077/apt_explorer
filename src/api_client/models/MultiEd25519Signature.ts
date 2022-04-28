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
 * Multi ed25519 signature, please refer to https://github.com/diem/diem/tree/main/specifications/crypto#multi-signatures for more details.
 * @export
 * @interface MultiEd25519Signature
 */
export interface MultiEd25519Signature {
  /**
   *
   * @type {string}
   * @memberof MultiEd25519Signature
   */
  type: string;
  /**
   * all public keys of the sender account
   * @type {Array<string>}
   * @memberof MultiEd25519Signature
   */
  publicKeys: Array<string>;
  /**
   * signatures created based on the `threshold`
   * @type {Array<string>}
   * @memberof MultiEd25519Signature
   */
  signatures: Array<string>;
  /**
   * The threshold of the multi ed25519 account key.
   * @type {number}
   * @memberof MultiEd25519Signature
   */
  threshold: number;
  /**
   * All bytes data are represented as hex-encoded string prefixed with `0x` and fulfilled with
   * two hex digits per byte.
   *
   * Different with `Address` type, hex-encoded bytes should not trim any zeros.
   * @type {string}
   * @memberof MultiEd25519Signature
   */
  bitmap: string;
}

export function MultiEd25519SignatureFromJSON(
  json: any,
): MultiEd25519Signature {
  return MultiEd25519SignatureFromJSONTyped(json, false);
}

export function MultiEd25519SignatureFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MultiEd25519Signature {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: json["type"],
    publicKeys: json["public_keys"],
    signatures: json["signatures"],
    threshold: json["threshold"],
    bitmap: json["bitmap"],
  };
}

export function MultiEd25519SignatureToJSON(
  value?: MultiEd25519Signature | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: value.type,
    public_keys: value.publicKeys,
    signatures: value.signatures,
    threshold: value.threshold,
    bitmap: value.bitmap,
  };
}
