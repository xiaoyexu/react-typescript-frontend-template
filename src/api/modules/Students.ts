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
  ICreateStudentRequest,
  ICreateStudentResponse,
  IDeleteStudentResponse,
  IGetStudentResponse,
  IImportStudentResponse,
  IImportStudentsPayload,
  ISearchStudentRequest,
  ISearchStudentResponse,
  IUpdateStudentRequest,
  IUpdateStudentResponse
} from '../types';

/**
 * @description Create Single student
 *
 * @tags students
 * @name CreateSingleStudent
 * @request POST:/students
 * @response `200` `ICreateStudentResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const createSingleStudent = (
  createStudentRequest: ICreateStudentRequest,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<ICreateStudentResponse>(
    {
      url: `/students`,
      method: 'POST',
      data: createStudentRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Search Students
 *
 * @tags students
 * @name SearchStudents
 * @request POST:/students/search
 * @response `200` `ISearchStudentResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const searchStudents = (
  searchStudentRequest: ISearchStudentRequest,
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
  request<ISearchStudentResponse>(
    {
      url: `/students/search`,
      method: 'POST',
      params: query,
      data: searchStudentRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Get Single student
 *
 * @tags students
 * @name GetSingleStudent
 * @request GET:/students/{student-id}
 * @response `200` `IGetStudentResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const getSingleStudent = (
  studentId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IGetStudentResponse>(
    {
      url: `/students/${studentId}`,
      method: 'GET',
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Update Single student
 *
 * @tags students
 * @name UpdateSingleStudent
 * @request PUT:/students/{student-id}
 * @response `200` `IUpdateStudentResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const updateSingleStudent = (
  studentId: string,
  updateStudentRequest: IUpdateStudentRequest,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IUpdateStudentResponse>(
    {
      url: `/students/${studentId}`,
      method: 'PUT',
      data: updateStudentRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Delete Single student
 *
 * @tags students
 * @name DeleteSingleStudent
 * @request DELETE:/students/{student-id}
 * @response `200` `IDeleteStudentResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const deleteSingleStudent = (
  studentId: string,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IDeleteStudentResponse>(
    {
      url: `/students/${studentId}`,
      method: 'DELETE',
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Export Students
 *
 * @tags students
 * @name ExportStudents
 * @request POST:/students/export
 * @response `200` `File` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const exportStudents = (
  searchStudentRequest: ISearchStudentRequest,
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
      url: `/students/export`,
      method: 'POST',
      params: query,
      data: searchStudentRequest,
      ...params
    },
    { ...extraConfig }
  );
/**
 * @description Import Students
 *
 * @tags students
 * @name ImportStudents
 * @request POST:/students/import
 * @response `200` `IImportStudentResponse` OK
 * @response `400` `IErrorResponse` Bad Request
 * @response `401` `IErrorResponse` Unauthorized
 * @response `403` `IErrorResponse` Forbidden
 * @response `404` `IErrorResponse` Not found
 * @response `500` `IErrorResponse` Internal Server Error
 */
export const importStudents = (
  data: FormData,
  params: RequestConfig = {},
  extraConfig: Partial<IRequestExtraConfig> = {}
) =>
  request<IImportStudentResponse>(
    {
      url: `/students/import`,
      method: 'POST',
      data: data,
      type: 'multipart/form-data',
      ...params
    },
    { ...extraConfig }
  );
