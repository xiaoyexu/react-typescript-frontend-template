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

export type ICreateStudentRequest = IStudent;

export interface ICreateStudentResponse {
  data?: IStudent;
  status?: IResponseStatus;
}

export interface IDeleteStudentResponse {
  data?: string;
  status?: IResponseStatus;
}

export interface IErrorResponse {
  status?: IResponseStatus;
}

export interface IException {
  message?: string;
  reason?: string;
  reasonCode?: string;
}

export interface IGetStudentAuditResponse {
  data?: IStudentAudit;
  status?: IResponseStatus;
}

export interface IGetStudentResponse {
  data?: IStudent;
  status?: IResponseStatus;
}

export interface IImportStudentResponse {
  data?: string;
  status?: IResponseStatus;
}

export interface IImportStudentsPayload {
  /** @format binary */
  file: File;
}

export interface ILoginRequest {
  password?: string;
  username?: string;
}

export interface ILoginResponse {
  data?: I_JWT;
  status?: IResponseStatus;
}

export interface IPagedStudentAudits {
  data?: IStudentAudits;
  /** @format int64 */
  total?: number;
}

export interface IPagedStudents {
  data?: IStudents;
  /** @format int64 */
  total?: number;
}

export interface IRefreshTokenResponse {
  data?: string;
  status?: IResponseStatus;
}

export interface IResponseStatus {
  code?: string;
  message?: string;
}

export interface ISearchStudentAuditRequest {
  createdAts?: IStringList;
  createdBys?: IStringList;
  ids?: IStringList;
  updatedAts?: IStringList;
  updatedBys?: IStringList;
}

export interface ISearchStudentAuditResponse {
  data?: IPagedStudentAudits;
  status?: IResponseStatus;
}

export interface ISearchStudentRequest {
  ages?: IStringList;
  birthdays?: IStringList;
  createdAts?: IStringList;
  createdBys?: IStringList;
  heights?: IStringList;
  ids?: IStringList;
  names?: IStringList;
  updatedAts?: IStringList;
  updatedBys?: IStringList;
}

export interface ISearchStudentResponse {
  data?: IPagedStudents;
  status?: IResponseStatus;
}

export type IStringList = string[];

export interface IStudent {
  age?: number;
  birthday?: string;
  createdAt?: string;
  createdBy?: string;
  height?: number;
  id?: string;
  name?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface IStudentAudit {
  age?: number;
  auditId?: string;
  birthday?: string;
  createdAt?: string;
  createdBy?: string;
  height?: number;
  id?: string;
  name?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export type IStudentAudits = IStudentAudit[];

export type IStudents = IStudent[];

export interface ISuccessResponse {
  status?: IResponseStatus;
}

export type IUpdateStudentRequest = IStudent;

export interface IUpdateStudentResponse {
  data?: IStudent;
  status?: IResponseStatus;
}

export interface I_JWT {
  accessToken?: string;
  expiresIn?: string;
  refreshToken?: string;
}
