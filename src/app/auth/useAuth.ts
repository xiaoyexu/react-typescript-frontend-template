import { useContext } from 'react';
import { AuthContext, IAuthContext } from './AuthContext';

let globalAuth: IAuthContext = {};

export function getAuth() {
  return globalAuth;
}

export function setAuth(context: IAuthContext) {
  globalAuth = context;
}

export function useAuth() {
  const context: IAuthContext = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  globalAuth = context;
  return context;
}
