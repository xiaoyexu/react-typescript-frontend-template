import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { userDevice, UIDeviceType } from '@/service/Utils';
import App from './App.tsx';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter basename="/admin">
    {userDevice == UIDeviceType.Mobile ? <App /> : <App />}
  </BrowserRouter>
);
