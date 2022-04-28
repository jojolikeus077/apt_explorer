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

import {
  Ed25519Signature,
  Ed25519SignatureFromJSON,
  Ed25519SignatureFromJSONTyped,
  Ed25519SignatureToJSON,
} from "./Ed25519Signature";
import {
  MultiEd25519Signature,
  MultiEd25519SignatureFromJSON,
  MultiEd25519SignatureFromJSONTyped,
  MultiEd25519SignatureToJSON,
} from "./MultiEd25519Signature";

/**
 * @type AccountSignature
 *
 * @export
 */
export type AccountSignature = Ed25519Signature | MultiEd25519Signature;

export function AccountSignatureFromJSON(json: any): AccountSignature {
  return AccountSignatureFromJSONTyped(json, false);
}

export function AccountSignatureFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AccountSignature {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ...Ed25519SignatureFromJSONTyped(json, true),
    ...MultiEd25519SignatureFromJSONTyped(json, true),
  };
}

export function AccountSignatureToJSON(value?: AccountSignature | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ...Ed25519SignatureToJSON(value),
    ...MultiEd25519SignatureToJSON(value),
  };
}
