import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { getStorageItem } from './service/Storage';
import Login from './pages/Login';

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
      <Route
        key="root"
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route key="login" path="/login" element={<Login />} />
    </Routes>
  );
};
