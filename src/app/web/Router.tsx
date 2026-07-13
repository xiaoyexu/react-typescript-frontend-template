import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/web/Home';
import Login from '../../pages/web/Login';
import TreeCosmoDemo from '../../pages/web/TreeCosmoDemo';

export default () => {
  return (
    <Routes>
      <Route key="root" path="/" element={<Home />} />
      <Route key="login" path="/login" element={<Login />} />
      <Route
        key="tree-cosmo-demo"
        path="/tree-cosmo-demo"
        element={<TreeCosmoDemo />}
      />
    </Routes>
  );
};
