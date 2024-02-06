import MainMenu from '../Home/MainMenu';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <MainMenu />
      <Suspense fallback={<p>...Loading page</p>}>
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
