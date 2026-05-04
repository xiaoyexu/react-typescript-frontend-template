/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { getStorageItem } from './Storage';
import { getUser } from './Utils';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import i18n from '@/i18n';
import qs from 'qs';

// Base URL for the API
const API_BASE_URL = '/api/v1';

// // Create axios instance
// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// Request interceptor to add auth token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

const random = function (n: number) {
  const str = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str[parseInt(Math.random() * str.length + '')];
  }
  return result;
};

export const setRequestHeaders = (
  headers?: AxiosRequestHeaders,
  needToken?: boolean
) => {
  let user = getUser();

  const defaultHeaders: { [key: string]: string } = {
    'Accept-Language': i18n.language,
    'X-Trace-Id': random(10),
    'X-Context-Id': random(10),
    'X-env': 'dev',
    'X-lbu': 'hk'
  };

  if (user?.accessToken != null) {
    defaultHeaders['Authorization'] = `Bearer ${user.accessToken}`;
  }

  return {
    ...defaultHeaders,
    ...headers
  } as AxiosRequestHeaders;
};

const request = <T>(
  requestConfig: AxiosRequestConfig,
  extraConf?: Partial<IRequestExtraConfig>
): Promise<T> => {
  if (!requestConfig.url) {
    return Promise.reject('request url missing!!');
  }

  const defaultExtraConfig = {
    needToken: true,
    loading: true,
    displayApiError: true,
    displaySysError: true
  };

  const _extraConfig: IRequestExtraConfig = {
    ...defaultExtraConfig,
    ...(extraConf || {})
  };

  if (_extraConfig.loading) {
    //store.dispatch(showGlobalLoading());
    // store.dispatch(showAPILoading());
  }

  requestConfig.headers = setRequestHeaders(
    requestConfig.headers as AxiosRequestHeaders,
    _extraConfig.needToken
  );
  const defaultConfig = {
    baseURL: '/api/v1',
    timeout: 3600000,
    paramsSerializer: (params: unknown) => {
      return qs.stringify(params, { arrayFormat: 'comma' });
    }
  };
  return new Promise<T>((resolve, reject) => {
    axios({
      ...defaultConfig,
      ...requestConfig
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        console.log('err' + error);
        reject(error);
        if (_extraConfig.displayApiError) {
          console.log('error:', error);
          // store.dispatch(
          //   showAPIError({
          //     type: 'APIError',
          //     title: String(error.response?.status),
          //     content: String(error.response.statusText)
          //   })
          // );
        }
      })
      .finally(() => {
        if (_extraConfig.loading) {
          // store.dispatch(hideAPILoading());
        }
        //store.dispatch(hideAPIError());
      });
  });
};
export default request;
