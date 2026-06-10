import React, { createContext, useState, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
import { TokenPayload } from '@/model/model';
import { IUser } from '@/model/model';
import { login, refreshToken } from '@/api/modules/Users';
import type { ILoginResponse, IRefreshTokenResponse } from '@/api/types';

export interface IAuthContext {
  isAuthenticated?: boolean;
  accessToken?: string;
  user?: IUser;
  login?: (username: string, password: string) => Promise<IUser>;
  logout?: () => void;
  refreshToken?: () => Promise<string>;
  setAccessToken?: (token: string) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  accessToken: '',
  login() {
    return Promise.resolve({} as IUser);
  }
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [accessToken, setAccessToken] = useState<string>();
  const [user, setUser] = useState<any>(null);

  const loginUser = useCallback(async (username: string, password: string) => {
    return login({ username, password }).then((res: ILoginResponse) => {
      let responseData = res as ILoginResponse;
      let token = responseData.data;
      let accessToken = token?.accessToken || '';
      setAccessToken(accessToken);

      let result = jwtDecode<TokenPayload>(accessToken);
      let user: IUser = {
        username: result.username,
        displayName: result.displayName,
        role: result.role
      };
      setUser(user);
      return Promise.resolve(user);
    });
  }, []);

  const logout = useCallback(() => {
    setAccessToken('');
    setUser(null);
  }, []);

  const refreshUserToken = useCallback(async () => {
    return refreshToken().then((res: IRefreshTokenResponse) => {
      setAccessToken(res.data || '');
      return Promise.resolve(res.data || '');
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        accessToken,
        user,
        login: loginUser,
        logout,
        refreshToken: refreshUserToken,
        setAccessToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
