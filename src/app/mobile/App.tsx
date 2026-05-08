import Router from './Router';
import NavBarProvider from '../../components/NavBarContext';

export default () => {
  return (
    <NavBarProvider>
      <Router />
    </NavBarProvider>
  );
};
