import Router from './Router';
import AuthProvider from '@/app/auth/AuthContext';
import SiteFooter from '@/components/SiteFooter';

export default () => {
  return (
    <AuthProvider>
      <div className="app-shell">
        <main className="app-main">
          <Router />
        </main>
        <SiteFooter />
      </div>
    </AuthProvider>
  );
};
