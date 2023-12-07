import { NavigationBar } from 'components/navigation/NavigationBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/globalStyle';
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <ToastContainer
        autoClose={2000}
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default SharedLayout;
//  maxWidth={1440} margin="0 auto" px={16}
