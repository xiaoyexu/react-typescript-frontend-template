import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavBar } from '@/components/NavBarContext';

export default () => {
  const { setNavBarConfig } = useNavBar();

  useLayoutEffect(() => {
    setNavBarConfig({
      title: 'Home',
      back: null,
      left: <>left</>,
      right: <span onClick={() => alert('Right button clicked')}>Right</span>
    });
  }, []);

  return (
    <>
      Home
      <Link to="/page2" state={{ from: 'Home' }}>
        Go to Page 2
      </Link>
    </>
  );
};
