import Router from './Router';
import NavBarProvider from '../../components/NavBarContext';
import AuthProvider from '@/app/auth/AuthContext';

export default () => {
  return (
    <AuthProvider>
      <NavBarProvider>
        <Router />
      </NavBarProvider>
    </AuthProvider>
  );
};
