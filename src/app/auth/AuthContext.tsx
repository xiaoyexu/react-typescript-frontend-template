import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect
} from 'react';
import { jwtDecode } from 'jwt-decode';
import { TokenPayload } from '@/model/model';
import { IUser } from '@/model/model';
import { login, refreshToken } from '@/api/modules/Users';
import type {
  ILoginRequest,
  ILoginResponse,
  IRefreshTokenResponse
} from '@/api/types';
import { setAuth } from './useAuth';

export interface IAuthContext {
  isLoggedIn: boolean;
  user: IUser | null;
  isAuthenticated: () => boolean;
  accessToken: string;
  profile?: IUser;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  refreshToken: () => Promise<string>;
  setAccessToken: (token: string) => void;
}

const createUserFromAccessToken = (
  accessToken: string,
  previousUser?: IUser | null
): IUser => {
  const payload = jwtDecode<TokenPayload>(accessToken);
  return {
    username: payload.username || previousUser?.username || '',
    displayName:
      payload.displayName ||
      previousUser?.displayName ||
      payload.username ||
      '',
    role: payload.role || previousUser?.role || '',
    accessToken
  };
};

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  user: null,
  isAuthenticated: () => false,
  accessToken: '',
  login: async () => false,
  logout: () => {},
  refreshToken: async () => '',
  setAccessToken: () => {}
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [user, setUser] = useState<IUser | null>(null);

  const setAccessToken = useCallback((token: string) => {
    setUser((prevUser) => {
      if (!token) return prevUser;
      return createUserFromAccessToken(token, prevUser);
    });
  }, []);

  // const loginUser = useCallback(async (username: string, password: string) => {
  //   return login({ username, password }).then((res: ILoginResponse) => {
  //     let responseData = res as ILoginResponse;
  //     let token = responseData.data;
  //     let accessToken = token?.accessToken || '';
  //     setAccessToken(accessToken);

  //     let result = jwtDecode<TokenPayload>(accessToken);
  //     let user: IUser = {
  //       username: result.username,
  //       displayName: result.displayName,
  //       role: result.role
  //     };
  //     setUser(user);
  //     return Promise.resolve(user);
  //   });
  // }, []);

  const loginUser = useCallback(async (username: string, password: string) => {
    const loginRequest: ILoginRequest = {
      username,
      password
    };

    const response: ILoginResponse = await login(loginRequest);
    if (response.status?.code !== '200') {
      setUser(null);
      return false;
    }

    const tokenData = response.data;
    const accessToken = tokenData?.accessToken || '';
    if (!accessToken) {
      setUser(null);
      return false;
    }

    const nextUser = createUserFromAccessToken(accessToken);
    setUser(nextUser);
    return true;
  }, []);

  const logoutUser = useCallback(() => {
    setUser(null);
  }, []);

  // const refreshUserToken = useCallback(async () => {
  //   return refreshToken().then((res: IRefreshTokenResponse) => {
  //     setAccessToken(res.data || '');
  //     return Promise.resolve(res.data || '');
  //   });
  // }, []);

  const refreshUserToken = useCallback(async () => {
    const response: IRefreshTokenResponse = await refreshToken(
      {},
      {
        displayApiError: false
      }
    );
    const nextAccessToken = response.data || '';
    if (!nextAccessToken) {
      return '';
    }
    setAccessToken(nextAccessToken);
    return nextAccessToken;
  }, [setAccessToken]);

  const contextValue = useMemo<IAuthContext>(
    () => ({
      isLoggedIn: !!user,
      user,
      isAuthenticated: () => !!user?.accessToken,
      accessToken: user?.accessToken || '',
      profile: user || undefined,
      login: loginUser,
      logout: logoutUser,
      refreshToken: refreshUserToken,
      setAccessToken
    }),
    [user, loginUser, logoutUser, refreshUserToken, setAccessToken]
  );

  useLayoutEffect(() => {
    setAuth(contextValue);
  }, [contextValue]);

  useLayoutEffect(() => {
    if (user?.accessToken) {
      return;
    }

    let isActive = true;
    refreshUserToken()
      .then((token) => {
        if (!isActive || token) {
          return;
        }
        setUser(null);
      })
      .catch(() => {
        if (!isActive) {
          return;
        }
        setUser(null);
      });

    return () => {
      isActive = false;
    };
  }, [user?.accessToken, refreshUserToken]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
