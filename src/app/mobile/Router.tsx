import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

import Home from '@/pages/mobile/Home';
import Page2 from '@/pages/mobile/Page2/';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default () => {
  return (
    <Routes>
      <Route key="root" path="/" element={<Home />} />
      <Route key="page2" path="/page2" element={<Page2 />} />
    </Routes>
  );
};
