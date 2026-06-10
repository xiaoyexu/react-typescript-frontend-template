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

import request, { IRequestExtraConfig, RequestConfig } from '../../service/Api';
import {
  ICreateRoleRequest,
  ICreateRoleResponse,
  IDeleteRoleResponse,
  IGetRoleResponse,
  IImportRoleResponse,
  IImportRolesPayload,
  ISearchRoleRequest,
  ISearchRoleResponse,
  IUpdateRoleRequest,
  IUpdateRoleResponse
} from '../types';

/**
 * @description Create Single Role
 *
 * @tags roles
 * @name CreateSingleRole
 * @request POST:/roles
 * @response `200` `ICreateRoleResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const createSingleRole = (
  createRoleRequest: ICreateRoleRequest,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<ICreateRoleResponse>(
    {
      url: `/roles`,
      method: 'POST',
      data: createRoleRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Search Roles
 *
 * @tags roles
 * @name SearchRoles
 * @request POST:/roles/search
 * @response `200` `ISearchRoleResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const searchRoles = (
  searchRoleRequest: ISearchRoleRequest,
  query?: {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /** @default "" */
    sortBy?: string;
  },
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<ISearchRoleResponse>(
    {
      url: `/roles/search`,
      method: 'POST',
      params: query,
      data: searchRoleRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Get Single Role
 *
 * @tags roles
 * @name GetSingleRole
 * @request GET:/roles/{role-id}
 * @response `200` `IGetRoleResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const getSingleRole = (
  roleId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IGetRoleResponse>(
    {
      url: `/roles/${roleId}`,
      method: 'GET',
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Update Single Role
 *
 * @tags roles
 * @name UpdateSingleRole
 * @request PUT:/roles/{role-id}
 * @response `200` `IUpdateRoleResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const updateSingleRole = (
  roleId: string,
  updateRoleRequest: IUpdateRoleRequest,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IUpdateRoleResponse>(
    {
      url: `/roles/${roleId}`,
      method: 'PUT',
      data: updateRoleRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Delete Single Role
 *
 * @tags roles
 * @name DeleteSingleRole
 * @request DELETE:/roles/{role-id}
 * @response `200` `IDeleteRoleResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const deleteSingleRole = (
  roleId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IDeleteRoleResponse>(
    {
      url: `/roles/${roleId}`,
      method: 'DELETE',
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Export Roles
 *
 * @tags roles
 * @name ExportRoles
 * @request POST:/roles/export
 * @response `200` `File` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const exportRoles = (
  searchRoleRequest: ISearchRoleRequest,
  query?: {
    /** @default 20 */
    limit?: number;
    /** @default 0 */
    offset?: number;
    /** @default "" */
    sortBy?: string;
  },
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<File>(
    {
      url: `/roles/export`,
      method: 'POST',
      params: query,
      data: searchRoleRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Import Roles
 *
 * @tags roles
 * @name ImportRoles
 * @request POST:/roles/import
 * @response `200` `IImportRoleResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const importRoles = (
  data: FormData,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IImportRoleResponse>(
    {
      url: `/roles/import`,
      method: 'POST',
      data: data,
      type: 'multipart/form-data',
      ...params
    },
    { ...extraConfig }
  );
