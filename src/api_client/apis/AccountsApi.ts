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

import * as runtime from "../runtime";
import {
  Account,
  AccountFromJSON,
  AccountToJSON,
  AccountResource,
  AccountResourceFromJSON,
  AccountResourceToJSON,
  MoveModule,
  MoveModuleFromJSON,
  MoveModuleToJSON,
} from "../models";

export interface GetAccountRequest {
  address: string;
}

export interface GetAccountModulesRequest {
  address: string;
}

export interface GetAccountModulesByLedgerVersionRequest {
  ledgerVersion: string;
  address: string;
}

export interface GetAccountResourcesRequest {
  address: string;
}

export interface GetAccountResourcesByLedgerVersionRequest {
  ledgerVersion: string;
  address: string;
}

/**
 *
 */
export class AccountsApi extends runtime.BaseAPI {
  /**
   * Get account
   */
  async getAccountRaw(
    requestParameters: GetAccountRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Account>> {
    if (
      requestParameters.address === null ||
      requestParameters.address === undefined
    ) {
      throw new runtime.RequiredError(
        "address",
        "Required parameter requestParameters.address was null or undefined when calling getAccount.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/accounts/{address}`.replace(
          `{${"address"}}`,
          encodeURIComponent(String(requestParameters.address)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AccountFromJSON(jsonValue),
    );
  }

  /**
   * Get account
   */
  async getAccount(
    requestParameters: GetAccountRequest,
    initOverrides?: RequestInit,
  ): Promise<Account> {
    const response = await this.getAccountRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Get account modules
   */
  async getAccountModulesRaw(
    requestParameters: GetAccountModulesRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<MoveModule>>> {
    if (
      requestParameters.address === null ||
      requestParameters.address === undefined
    ) {
      throw new runtime.RequiredError(
        "address",
        "Required parameter requestParameters.address was null or undefined when calling getAccountModules.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/accounts/{address}/modules`.replace(
          `{${"address"}}`,
          encodeURIComponent(String(requestParameters.address)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(MoveModuleFromJSON),
    );
  }

  /**
   * Get account modules
   */
  async getAccountModules(
    requestParameters: GetAccountModulesRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<MoveModule>> {
    const response = await this.getAccountModulesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * This API returns account modules for a specific ledger version (AKA transaction version).  Diem node prunes account state history data by a time window configured (link).  When the data is pruned, server responds 404.
   * Get account modules by ledger version
   */
  async getAccountModulesByLedgerVersionRaw(
    requestParameters: GetAccountModulesByLedgerVersionRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<MoveModule>>> {
    if (
      requestParameters.ledgerVersion === null ||
      requestParameters.ledgerVersion === undefined
    ) {
      throw new runtime.RequiredError(
        "ledgerVersion",
        "Required parameter requestParameters.ledgerVersion was null or undefined when calling getAccountModulesByLedgerVersion.",
      );
    }

    if (
      requestParameters.address === null ||
      requestParameters.address === undefined
    ) {
      throw new runtime.RequiredError(
        "address",
        "Required parameter requestParameters.address was null or undefined when calling getAccountModulesByLedgerVersion.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/ledger/{ledger_version}/accounts/{address}/modules`
          .replace(
            `{${"ledger_version"}}`,
            encodeURIComponent(String(requestParameters.ledgerVersion)),
          )
          .replace(
            `{${"address"}}`,
            encodeURIComponent(String(requestParameters.address)),
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(MoveModuleFromJSON),
    );
  }

  /**
   * This API returns account modules for a specific ledger version (AKA transaction version).  Diem node prunes account state history data by a time window configured (link).  When the data is pruned, server responds 404.
   * Get account modules by ledger version
   */
  async getAccountModulesByLedgerVersion(
    requestParameters: GetAccountModulesByLedgerVersionRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<MoveModule>> {
    const response = await this.getAccountModulesByLedgerVersionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get account resources
   */
  async getAccountResourcesRaw(
    requestParameters: GetAccountResourcesRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<AccountResource>>> {
    if (
      requestParameters.address === null ||
      requestParameters.address === undefined
    ) {
      throw new runtime.RequiredError(
        "address",
        "Required parameter requestParameters.address was null or undefined when calling getAccountResources.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/accounts/{address}/resources`.replace(
          `{${"address"}}`,
          encodeURIComponent(String(requestParameters.address)),
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(AccountResourceFromJSON),
    );
  }

  /**
   * Get account resources
   */
  async getAccountResources(
    requestParameters: GetAccountResourcesRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<AccountResource>> {
    const response = await this.getAccountResourcesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * This API returns account resources for a specific ledger version (AKA transaction version).  Diem node prunes account state history data by a time window configured (link).  When the data is pruned, server responds 404.
   * Get account resources by ledger version
   */
  async getAccountResourcesByLedgerVersionRaw(
    requestParameters: GetAccountResourcesByLedgerVersionRequest,
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<Array<AccountResource>>> {
    if (
      requestParameters.ledgerVersion === null ||
      requestParameters.ledgerVersion === undefined
    ) {
      throw new runtime.RequiredError(
        "ledgerVersion",
        "Required parameter requestParameters.ledgerVersion was null or undefined when calling getAccountResourcesByLedgerVersion.",
      );
    }

    if (
      requestParameters.address === null ||
      requestParameters.address === undefined
    ) {
      throw new runtime.RequiredError(
        "address",
        "Required parameter requestParameters.address was null or undefined when calling getAccountResourcesByLedgerVersion.",
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/ledger/{ledger_version}/accounts/{address}/resources`
          .replace(
            `{${"ledger_version"}}`,
            encodeURIComponent(String(requestParameters.ledgerVersion)),
          )
          .replace(
            `{${"address"}}`,
            encodeURIComponent(String(requestParameters.address)),
          ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(AccountResourceFromJSON),
    );
  }

  /**
   * This API returns account resources for a specific ledger version (AKA transaction version).  Diem node prunes account state history data by a time window configured (link).  When the data is pruned, server responds 404.
   * Get account resources by ledger version
   */
  async getAccountResourcesByLedgerVersion(
    requestParameters: GetAccountResourcesByLedgerVersionRequest,
    initOverrides?: RequestInit,
  ): Promise<Array<AccountResource>> {
    const response = await this.getAccountResourcesByLedgerVersionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
