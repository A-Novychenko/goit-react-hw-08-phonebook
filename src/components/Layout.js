import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <div
        style={{
          maxWidth: 960,
          margin: '300px auto',
          padding: '0 16px',
          textAlign: 'center',
        }}
      >
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
      </div>
    </>
  );
};
