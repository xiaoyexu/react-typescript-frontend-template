import Router from './Router';
import NavBarProvider from '../../components/NavBarContext';
import AuthProvider from '@/app/auth/AuthContext';
import SiteFooter from '@/components/SiteFooter';

export default () => {
  return (
    <AuthProvider>
      <NavBarProvider>
        <div className="app-shell">
          <main className="app-main">
            <Router />
          </main>
          <SiteFooter />
        </div>
      </NavBarProvider>
    </AuthProvider>
  );
};
