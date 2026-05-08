import { Navigate, Route, Routes } from 'react-router-dom';
import { getStorageItem } from '@/service/Storage';

import Home from '@/pages/mobile/Home';
import Page2 from '@/pages/mobile/Page2/';

const isAuthenticated = () => {
  return getStorageItem('user') !== null;
};

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (isAuthenticated()) {
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
