import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { userDevice, UIDeviceType } from '@/service/Utils';
import { applyTheme, getStoredTheme } from '@/service/Theme';
import WebApp from './app/web';
import MobileApp from './app/mobile';
import AuthProvider from '@/app/auth';
import './index.scss';

applyTheme(getStoredTheme());

const routerBasename = import.meta.env.VITE_ROUTER_BASENAME || '/tadmin/';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter basename={routerBasename}>
    <AuthProvider>
      {userDevice == UIDeviceType.Mobile ? <MobileApp /> : <WebApp />}
    </AuthProvider>
  </BrowserRouter>
);
