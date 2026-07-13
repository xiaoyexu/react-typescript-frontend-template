/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import i18n from '@/i18n';
import qs from 'qs';
import { random } from './Utils';
import { getAuth, setAuth } from '@/app/auth/useAuth';

// Base URL for the API - configured in one place for easy maintenance
export const API_BASE_URL = import.meta.env.VITE_BASE_PATH || '/open-api/v1';

const REFRESH_TOKEN_URL = '/users/refresh';
const MAX_AUTH_RETRY_TIMES = 3;

let refreshTokenPromise: Promise<string | null> | null = null;

type RetryableRequestConfig = AxiosRequestConfig & {
  _authRetryCount?: number;
};

const isRefreshRequestUrl = (url?: string): boolean => {
  if (!url) return false;
  return url === REFRESH_TOKEN_URL || url.endsWith(REFRESH_TOKEN_URL);
};

const getErrorMessage = (error: unknown): string => {
  const axiosError = error as {
    message?: string;
    response?: {
      data?: {
        message?: string;
        error?: string;
      };
    };
  };

  return (
    axiosError?.response?.data?.message ||
    axiosError?.response?.data?.error ||
    axiosError?.message ||
    'Request failed'
  );
};

const setAuthHeader = (
  headers: AxiosRequestConfig['headers'],
  token: string
): AxiosRequestHeaders => {
  const authValue = 'Bearer ' + token;
  if (!headers) return { Authorization: authValue } as AxiosRequestHeaders;

  if (typeof (headers as AxiosRequestHeaders).set === 'function') {
    (headers as AxiosRequestHeaders).set('Authorization', authValue);
    return headers as AxiosRequestHeaders;
  }

  return {
    ...(headers as Record<string, string>),
    Authorization: authValue
  } as AxiosRequestHeaders;
};

const setTraceIdHeader = (
  headers: AxiosRequestConfig['headers']
): AxiosRequestHeaders => {
  const traceId = random(10);

  if (!headers) {
    return { 'X-Trace-Id': traceId } as unknown as AxiosRequestHeaders;
  }

  if (typeof (headers as AxiosRequestHeaders).set === 'function') {
    (headers as AxiosRequestHeaders).set('X-Trace-Id', traceId);
    return headers as AxiosRequestHeaders;
  }

  return {
    ...(headers as Record<string, string>),
    'X-Trace-Id': traceId
  } as unknown as AxiosRequestHeaders;
};

const performLogout = () => {
  const auth = getAuth();
  auth.logout();
};

const refreshAccessToken = async (): Promise<string | null> => {
  const auth = getAuth();
  const nextAccessToken = await auth.refreshToken();
  return nextAccessToken || null;
};

// Request interceptor to add auth token
axios.interceptors.request.use(
  async (request) => {
    const auth = getAuth();
    const accessToken = auth?.accessToken;

    if (isRefreshRequestUrl(request.url)) {
      request.withCredentials = true;
      return request;
    }

    if (accessToken) {
      console.log(
        'Adding Authorization header to request: ',
        request.url,
        'accessToken:',
        accessToken
      );
      request.headers = setAuthHeader(request.headers, accessToken);
    }

    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = (error?.config as RetryableRequestConfig) || {};
    const statusCode = error?.response?.status;
    const requestUrl = originalRequest?.url || '';
    const isAuthError = statusCode === 401 || statusCode === 403;
    const isRefreshRequest = isRefreshRequestUrl(requestUrl);

    if (!isAuthError) {
      return Promise.reject(error);
    }

    if (isRefreshRequest) {
      performLogout();
      return Promise.reject(error);
    }

    const currentRetryCount = originalRequest._authRetryCount || 0;
    if (currentRetryCount >= MAX_AUTH_RETRY_TIMES) {
      return Promise.reject(error);
    }

    if (!refreshTokenPromise) {
      refreshTokenPromise = refreshAccessToken().finally(() => {
        refreshTokenPromise = null;
      });
    }

    try {
      const nextAccessToken = await refreshTokenPromise;
      if (!nextAccessToken) {
        performLogout();
        return Promise.reject(
          new Error(
            i18n.t('apiRefreshTokenFailed', {
              defaultValue: 'Token refresh failed'
            })
          )
        );
      }

      originalRequest._authRetryCount = currentRetryCount + 1;
      const headersWithAuth = setAuthHeader(
        originalRequest.headers,
        nextAccessToken
      );
      originalRequest.headers = setTraceIdHeader(headersWithAuth);

      return axios(originalRequest);
    } catch (refreshError) {
      performLogout();
      return Promise.reject(
        new Error(getErrorMessage(refreshError) || 'Token refresh failed')
      );
    }
  }
);

export const setRequestHeaders = (
  headers?: AxiosRequestHeaders,
  needToken?: boolean
) => {
  const { accessToken } = getAuth();

  const defaultHeaders: { [key: string]: string } = {
    'Accept-Language': i18n.language,
    'X-Trace-Id': random(10),
    'X-Context-Id': random(10),
    'X-env': 'dev',
    'X-lbu': 'hk'
  };

  // if (accessToken != null) {
  //   defaultHeaders['Authorization'] = `Bearer ${accessToken}`;
  // }

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
    baseURL: API_BASE_URL,
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
