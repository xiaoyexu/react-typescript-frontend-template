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
  IGetRoleAuditResponse,
  ISearchRoleAuditRequest,
  ISearchRoleAuditResponse,
} from "../types";

/**
 * @description Search RoleAudits
 *
 * @tags role-audits
 * @name SearchRoleAudits
 * @request POST:/role-audits/search
 * @response `200` `ISearchRoleAuditResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const searchRoleAudits = (
  searchRoleAuditRequest: ISearchRoleAuditRequest,
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
  request<ISearchRoleAuditResponse>(
    {
      url: `/role-audits/search`,
      method: "POST",
      params: query,
      data: searchRoleAuditRequest,
      ...params,
    },
    { ...extraConfig },
  );
/**
 * @description Get Single RoleAudit
 *
 * @tags role-audits
 * @name GetSingleRoleAudit
 * @request GET:/role-audits/{role-audit-id}
 * @response `200` `IGetRoleAuditResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const getSingleRoleAudit = (
  roleAuditId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {},
) =>
  request<IGetRoleAuditResponse>(
    {
      url: `/role-audits/${roleAuditId}`,
      method: "GET",
      ...params,
    },
    { ...extraConfig },
  );
/**
 * @description Export RoleAudits
 *
 * @tags role-audits
 * @name ExportRoleAudits
 * @request POST:/role-audits/export
 * @response `200` `File` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const exportRoleAudits = (
  searchRoleAuditRequest: ISearchRoleAuditRequest,
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
      url: `/role-audits/export`,
      method: "POST",
      params: query,
      data: searchRoleAuditRequest,
      ...params,
    },
    { ...extraConfig },
  );
