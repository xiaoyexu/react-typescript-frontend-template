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
  IGetStudentAuditResponse,
  ISearchStudentAuditRequest,
  ISearchStudentAuditResponse,
} from "../types";

/**
 * @description Search StudentAudits
 *
 * @tags student-audits
 * @name SearchStudentAudits
 * @request POST:/student-audits/search
 * @response `200` `ISearchStudentAuditResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const searchStudentAudits = (
  searchStudentAuditRequest: ISearchStudentAuditRequest,
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
  request<ISearchStudentAuditResponse>(
    {
      url: `/student-audits/search`,
      method: "POST",
      params: query,
      data: searchStudentAuditRequest,
      ...params,
    },
    { ...extraConfig },
  );
/**
 * @description Get Single StudentAudit
 *
 * @tags student-audits
 * @name GetSingleStudentAudit
 * @request GET:/student-audits/{student-audit-id}
 * @response `200` `IGetStudentAuditResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const getSingleStudentAudit = (
  studentAuditId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {},
) =>
  request<IGetStudentAuditResponse>(
    {
      url: `/student-audits/${studentAuditId}`,
      method: "GET",
      ...params,
    },
    { ...extraConfig },
  );
/**
 * @description Export StudentAudits
 *
 * @tags student-audits
 * @name ExportStudentAudits
 * @request POST:/student-audits/export
 * @response `200` `File` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const exportStudentAudits = (
  searchStudentAuditRequest: ISearchStudentAuditRequest,
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
      url: `/student-audits/export`,
      method: "POST",
      params: query,
      data: searchStudentAuditRequest,
      ...params,
    },
    { ...extraConfig },
  );
