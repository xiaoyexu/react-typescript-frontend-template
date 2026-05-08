import { useLayoutEffect } from 'react';
import { useNavBar } from '@/components/NavBarContext';
import { Link } from 'react-router-dom';

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
