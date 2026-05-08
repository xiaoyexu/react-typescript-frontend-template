import { useLayoutEffect } from 'react';
import { useNavBar } from '@/components/NavBarContext';
import { useLocation } from 'react-router-dom';

export default () => {
  const { setNavBarConfig } = useNavBar();

  const location = useLocation();
  const data = (location.state = location.state || {});
  useLayoutEffect(() => {
    setNavBarConfig({
      title: 'Page 2',
      //   back: null,
      left: <>left</>,
      right: <span onClick={() => alert('Right button clicked')}>Right</span>
    });
  }, []);

  return <>Page 2 {data.from}</>;
};
