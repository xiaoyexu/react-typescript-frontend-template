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
  ICreateUserRequest,
  ICreateUserResponse,
  IDeleteUserResponse,
  IGetUserResponse,
  IImportUserResponse,
  IImportUsersPayload,
  ILoginRequest,
  ILoginResponse,
  ILogoutResponse,
  IRefreshTokenResponse,
  ISearchUserRequest,
  ISearchUserResponse,
  IUpdateUserRequest,
  IUpdateUserResponse
} from '../types';

/**
 * @description Login
 *
 * @tags users
 * @name Login
 * @request POST:/users/login
 * @response `200` `ILoginResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const login = (
  loginRequest: ILoginRequest,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<ILoginResponse>(
    {
      url: `/users/login`,
      method: 'POST',
      data: loginRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Logout
 *
 * @tags users
 * @name Logout
 * @request POST:/users/logout
 * @response `200` `ILogoutResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const logout = (
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<ILogoutResponse>(
    {
      url: `/users/logout`,
      method: 'POST',
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Refresh Token
 *
 * @tags users
 * @name RefreshToken
 * @request POST:/users/refresh
 * @response `200` `IRefreshTokenResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const refreshToken = (
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IRefreshTokenResponse>(
    {
      url: `/users/refresh`,
      method: 'POST',
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description List Users
 *
 * @tags users
 * @name ListUsers
 * @request GET:/users
 * @response `200` `ISearchUserResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const listUsers = (
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
  request<ISearchUserResponse>(
    {
      url: `/users`,
      method: 'GET',
      params: query,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Create Single User
 *
 * @tags users
 * @name CreateSingleUser
 * @request POST:/users
 * @response `200` `ICreateUserResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const createSingleUser = (
  createUserRequest: ICreateUserRequest,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<ICreateUserResponse>(
    {
      url: `/users`,
      method: 'POST',
      data: createUserRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Search Users
 *
 * @tags users
 * @name SearchUsers
 * @request POST:/users/search
 * @response `200` `ISearchUserResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const searchUsers = (
  searchUserRequest: ISearchUserRequest,
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
  request<ISearchUserResponse>(
    {
      url: `/users/search`,
      method: 'POST',
      params: query,
      data: searchUserRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Get Single User
 *
 * @tags users
 * @name GetSingleUser
 * @request GET:/users/{user-id}
 * @response `200` `IGetUserResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const getSingleUser = (
  userId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IGetUserResponse>(
    {
      url: `/users/${userId}`,
      method: 'GET',
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Update Single User
 *
 * @tags users
 * @name UpdateSingleUser
 * @request PUT:/users/{user-id}
 * @response `200` `IUpdateUserResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const updateSingleUser = (
  userId: string,
  updateUserRequest: IUpdateUserRequest,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IUpdateUserResponse>(
    {
      url: `/users/${userId}`,
      method: 'PUT',
      data: updateUserRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Delete Single User
 *
 * @tags users
 * @name DeleteSingleUser
 * @request DELETE:/users/{user-id}
 * @response `200` `IDeleteUserResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const deleteSingleUser = (
  userId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IDeleteUserResponse>(
    {
      url: `/users/${userId}`,
      method: 'DELETE',
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Export Users
 *
 * @tags users
 * @name ExportUsers
 * @request POST:/users/export
 * @response `200` `File` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const exportUsers = (
  searchUserRequest: ISearchUserRequest,
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
      url: `/users/export`,
      method: 'POST',
      params: query,
      data: searchUserRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Import Users
 *
 * @tags users
 * @name ImportUsers
 * @request POST:/users/import
 * @response `200` `IImportUserResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const importUsers = (
  data: FormData,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IImportUserResponse>(
    {
      url: `/users/import`,
      method: 'POST',
      data: data,
      type: 'multipart/form-data',
      ...params
    },
    { ...extraConfig }
  );
