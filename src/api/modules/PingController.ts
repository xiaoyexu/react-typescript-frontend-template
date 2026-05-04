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

/**
 * No description
 *
 * @tags ping-controller
 * @name GetPing
 * @request GET:/ping
 * @response `200` `string` OK
 */
export const getPing = (
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {},
) =>
  request<string>(
    {
      url: `/ping`,
      method: "GET",
      ...params,
    },
    { ...extraConfig },
  );
