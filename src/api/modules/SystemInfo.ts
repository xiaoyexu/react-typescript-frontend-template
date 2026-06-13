/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * System Info API module
 */

import request, { IRequestExtraConfig, RequestConfig } from '../../service/Api';

export interface IGitInfo {
  commit: {
    committer: { time: string };
    id: {
      'describe-short': string;
      describe: string;
      abbrev: string;
      full: string;
    };
    time: string;
    message: { full: string; short: string };
    user: { email: string; name: string };
    author: { time: string };
  };
  local: { branch: { ahead: string; behind: string } };
  branch: string;
  build: {
    time: string;
    version: string;
    user: { name: string; email: string };
    host: string;
  };
  dirty: string;
  tags: string;
  total: { commit: { count: string } };
  closest: { tag: { commit: { count: string }; name: string } };
  remote: { origin: { url: string } };
}

export interface IBuildInfo {
  artifact: string;
  name: string;
  time: string;
  version: string;
  group: string;
}

export interface ISystemInfoResponse {
  git: IGitInfo;
  build: IBuildInfo;
}

/**
 * @description Get System Info
 *
 * @tags system
 * @name GetSystemInfo
 * @request GET:/info
 * @response `200` `ISystemInfoResponse` OK
 */
export const getSystemInfo = (
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<ISystemInfoResponse>(
    {
      url: `/info`,
      method: 'GET',
      ...params
    },
    { needToken: false, ...extraConfig }
  );
