/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import i18n from '@/i18n';
import qs from 'qs';
import { getAuth, setAuth } from '@/app/auth/useAuth';

// Base URL for the API - configured in one place for easy maintenance
export const API_BASE_URL = import.meta.env.BASE_PATH;

const isRefreshToken = (config: any) => {
  return config.url === `/user/refresh`;
};

axios.defaults.withCredentials = true;

// Request interceptor to add auth token
axios.interceptors.request.use(
  (config) => {
    const { accessToken } = getAuth();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (isRefreshToken(config)) {
      config.headers.Authorization = '';
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
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      const { refreshToken, logout } = getAuth();

      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();
        setAuth({ ...getAuth(), accessToken: newAccessToken });

        originalRequest.headers.Authorization = 'Bearer ' + newAccessToken;
        originalRequest.headers['X-Trace-Id'] = random(10);
        return await axios(originalRequest);
      } catch (err) {
        console.log(`refresh token failed ${err}`);
        logout?.();
      }
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
  const { accessToken } = getAuth();

  const defaultHeaders: { [key: string]: string } = {
    'Accept-Language': i18n.language,
    'X-Trace-Id': random(10),
    'X-Context-Id': random(10),
    'X-env': 'dev',
    'X-lbu': 'hk'
  };

  if (accessToken != null) {
    defaultHeaders['Authorization'] = `Bearer ${accessToken}`;
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
