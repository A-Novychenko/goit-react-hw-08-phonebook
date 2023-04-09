import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar';
import { Suspense } from 'react';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <div
      // style={{
      //   maxWidth: 960,
      //   margin: '300px auto',
      //   padding: '0 16px',
      //   textAlign: 'center',
      // }}
      >
        <Container maxWidth="xl">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
          {/* <Toaster position="top-right" reverseOrder={false} /> */}
        </Container>
      </div>
    </>
  );
};
