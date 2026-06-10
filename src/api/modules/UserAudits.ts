/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import request, { IRequestExtraConfig, RequestConfig } from "../../service/Api";
import {
  IGetUserAuditResponse,
  ISearchUserAuditRequest,
  ISearchUserAuditResponse,
} from "../types";

/**
 * @description Search UserAudits
 *
 * @tags user-audits
 * @name SearchUserAudits
 * @request POST:/user-audits/search
 * @response `200` `ISearchUserAuditResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const searchUserAudits = (
  searchUserAuditRequest: ISearchUserAuditRequest,
  query?: {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /** @default "" */
    sortBy?: string;
  },
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {},
) =>
  request<ISearchUserAuditResponse>(
    {
      url: `/user-audits/search`,
      method: "POST",
      params: query,
      data: searchUserAuditRequest,
      ...params,
    },
    { ...extraConfig },
  );
/**
 * @description Get Single UserAudit
 *
 * @tags user-audits
 * @name GetSingleUserAudit
 * @request GET:/user-audits/{user-audit-id}
 * @response `200` `IGetUserAuditResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const getSingleUserAudit = (
  userAuditId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {},
) =>
  request<IGetUserAuditResponse>(
    {
      url: `/user-audits/${userAuditId}`,
      method: "GET",
      ...params,
    },
    { ...extraConfig },
  );
/**
 * @description Export UserAudits
 *
 * @tags user-audits
 * @name ExportUserAudits
 * @request POST:/user-audits/export
 * @response `200` `File` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const exportUserAudits = (
  searchUserAuditRequest: ISearchUserAuditRequest,
  query?: {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /** @default "" */
    sortBy?: string;
  },
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {},
) =>
  request<File>(
    {
      url: `/user-audits/export`,
      method: "POST",
      params: query,
      data: searchUserAuditRequest,
      ...params,
    },
    { ...extraConfig },
  );
