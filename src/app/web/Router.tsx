import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import Home from '../../pages/web/Home';
import Login from '../../pages/web/Login';
import TreeCosmoDemo from '../../pages/web/TreeCosmoDemo';

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
      <Route
        key="tree-cosmo-demo"
        path="/tree-cosmo-demo"
        element={<TreeCosmoDemo />}
      />
    </Routes>
  );
};
