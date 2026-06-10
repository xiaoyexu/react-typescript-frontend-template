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

export type ICreateRoleRequest = IRole;

export interface ICreateRoleResponse {
  data?: IRole;
  status?: IResponseStatus;
}

export type ICreateStudentRequest = IStudent;

export interface ICreateStudentResponse {
  data?: IStudent;
  status?: IResponseStatus;
}

export type ICreateUserRequest = IUser;

export interface ICreateUserResponse {
  data?: IUser;
  status?: IResponseStatus;
}

export interface IDeleteRoleResponse {
  data?: string;
  status?: IResponseStatus;
}

export interface IDeleteStudentResponse {
  data?: string;
  status?: IResponseStatus;
}

export interface IDeleteUserResponse {
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

export interface IGetRoleAuditResponse {
  data?: IRoleAudit;
  status?: IResponseStatus;
}

export interface IGetRoleResponse {
  data?: IRole;
  status?: IResponseStatus;
}

export interface IGetStudentAuditResponse {
  data?: IStudentAudit;
  status?: IResponseStatus;
}

export interface IGetStudentResponse {
  data?: IStudent;
  status?: IResponseStatus;
}

export interface IGetUserAuditResponse {
  data?: IUserAudit;
  status?: IResponseStatus;
}

export interface IGetUserResponse {
  data?: IUser;
  status?: IResponseStatus;
}

export interface IImportRoleResponse {
  data?: string;
  status?: IResponseStatus;
}

export interface IImportRolesPayload {
  file: File;
}

export interface IImportStudentResponse {
  data?: string;
  status?: IResponseStatus;
}

export interface IImportStudentsPayload {
  /** @format binary */
  file: File;
}

export interface IImportUserResponse {
  data?: string;
  status?: IResponseStatus;
}

export interface IImportUsersPayload {
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

export interface IPagedRoleAudits {
  data?: IRoleAudits;
  /** @format int64 */
  total?: number;
}

export interface IPagedRoles {
  data?: IRoles;
  /** @format int64 */
  total?: number;
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

export interface IPagedUserAudits {
  data?: IUserAudits;
  /** @format int64 */
  total?: number;
}

export interface IPagedUsers {
  data?: IUsers;
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

export interface IRole {
  authority?: string;
  createdAt?: string;
  createdBy?: string;
  id?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface IRoleAudit {
  action?: string;
  auditId?: number;
  authority?: string;
  createdAt?: string;
  createdBy?: string;
  id?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export type IRoleAudits = IRoleAudit[];

export type IRoles = IRole[];

export interface ISearchRoleAuditRequest {
  createdAts?: IStringList;
  createdBys?: IStringList;
  ids?: IStringList;
  updatedAts?: IStringList;
  updatedBys?: IStringList;
}

export interface ISearchRoleAuditResponse {
  data?: IPagedRoleAudits;
  status?: IResponseStatus;
}

export interface ISearchRoleRequest {
  createdAts?: IStringList;
  createdBys?: IStringList;
  ids?: IStringList;
  keyword?: string;
  updatedAts?: IStringList;
  updatedBys?: IStringList;
}

export interface ISearchRoleResponse {
  data?: IPagedRoles;
  status?: IResponseStatus;
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
  keyword?: string;
  names?: IStringList;
  updatedAts?: IStringList;
  updatedBys?: IStringList;
}

export interface ISearchStudentResponse {
  data?: IPagedStudents;
  status?: IResponseStatus;
}

export interface ISearchUserAuditRequest {
  createdAts?: IStringList;
  createdBys?: IStringList;
  ids?: IStringList;
  updatedAts?: IStringList;
  updatedBys?: IStringList;
}

export interface ISearchUserAuditResponse {
  data?: IPagedUserAudits;
  status?: IResponseStatus;
}

export interface ISearchUserRequest {
  createdAts?: IStringList;
  createdBys?: IStringList;
  ids?: IStringList;
  updatedAts?: IStringList;
  updatedBys?: IStringList;
}

export interface ISearchUserResponse {
  data?: IPagedUsers;
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
  action?: string;
  age?: number;
  auditId?: number;
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

export type IUpdateRoleRequest = IRole;

export interface IUpdateRoleResponse {
  data?: IRole;
  status?: IResponseStatus;
}

export type IUpdateStudentRequest = IStudent;

export interface IUpdateStudentResponse {
  data?: IStudent;
  status?: IResponseStatus;
}

export type IUpdateUserRequest = IUser;

export interface IUpdateUserResponse {
  data?: IUser;
  status?: IResponseStatus;
}

export interface IUser {
  accountName?: string;
  createdAt?: string;
  createdBy?: string;
  id?: string;
  passwordHash?: string;
  refreshToken?: string;
  role?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface IUserAudit {
  accountName?: string;
  action?: string;
  auditId?: number;
  createdAt?: string;
  createdBy?: string;
  id?: string;
  passwordHash?: string;
  refreshToken?: string;
  role?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export type IUserAudits = IUserAudit[];

export type IUsers = IUser[];

export interface I_JWT {
  accessToken?: string;
  expiresIn?: string;
}
