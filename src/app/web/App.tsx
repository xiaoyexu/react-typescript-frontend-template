import Router from './Router';
import AuthProvider from '@/app/auth/AuthContext';

export default () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
