import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { useAuth } from 'hooks/useAuth';
import SharedLayout from './layout/SharedLayout';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import authOperations from 'redux/auth/auth-operations';
import SpinnerBootstrap from './spinner/Spinner';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/auth-pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/auth-pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <SpinnerBootstrap />;
  }
  if (!isRefreshing) {
    return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<HomePage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    );
  }
}
