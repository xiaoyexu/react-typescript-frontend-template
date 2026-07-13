import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/mobile/Home';
import Page2 from '@/pages/mobile/Page2/';

export default () => {
  return (
    <Routes>
      <Route key="root" path="/" element={<Home />} />
      <Route key="page2" path="/page2" element={<Page2 />} />
    </Routes>
  );
};
