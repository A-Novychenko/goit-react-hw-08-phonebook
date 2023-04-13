import { lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from 'components/Layout';
import { refreshUser } from 'redux/auth/authOperations';
import { useAuth, useContacts } from 'hooks';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { Loader } from './Loader';
import { SnackError, SnackSuccess } from './SnackBar/SnackBar';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const { isRefreshing, error, isLoggedIn } = useAuth();
  const { completed, errorContacts } = useContacts();
  const [showSnackErr, setShowSnackErr] = useState(false);
  const [showSnackCompleted, setShowSnackCompleted] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (
      (error && error !== 'Unable to fetch user' && !isLoggedIn) ||
      errorContacts
    ) {
      setShowSnackErr(true);
    }
    if (error && isLoggedIn) {
      setShowSnackErr(true);
    }
  }, [error, errorContacts, isLoggedIn, setShowSnackErr]);

  useEffect(() => {
    // if (!completed) return;
    setShowSnackCompleted(true);
  }, [completed, setShowSnackCompleted]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
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
      </Routes>

      <SnackError
        sx={{ width: '100%' }}
        isOpen={showSnackErr}
        handleClose={() => setShowSnackErr(false)}
        text={error || errorContacts}
      />
      <SnackSuccess
        sx={{ width: '100%' }}
        isOpen={showSnackCompleted}
        handleClose={() => setShowSnackCompleted(false)}
        // text={error || errorContacts}
      />
    </>
  );
};
