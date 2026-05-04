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
import { ILoginRequest, ILoginResponse, IRefreshTokenResponse } from "../types";

/**
 * @description Login
 *
 * @tags user
 * @name Login
 * @request POST:/user/login
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
  extraConfig: Partial<IRequestExtraConfig> = {},
) =>
  request<ILoginResponse>(
    {
      url: `/user/login`,
      method: "POST",
      data: loginRequest,
      ...params,
    },
    { ...extraConfig },
  );
/**
 * @description Refresh Token
 *
 * @tags user
 * @name RefreshToken
 * @request POST:/user/refresh
 * @response `200` `IRefreshTokenResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const refreshToken = (
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {},
) =>
  request<IRefreshTokenResponse>(
    {
      url: `/user/refresh`,
      method: "POST",
      ...params,
    },
    { ...extraConfig },
  );
