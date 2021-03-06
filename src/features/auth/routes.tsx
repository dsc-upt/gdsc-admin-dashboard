import { Route } from 'react-router-dom';
import React from 'react';
import { URLS } from '../../helpers/constants';
import { ProtectedRoute } from './private-route';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { AUTH_URLS } from './helpers/constants';
import { tokenExpired } from './helpers/token-utils';

export function AuthRoutes() {
  console.log(tokenExpired());
  return [
    <Route
      key="login/register"
      element={<ProtectedRoute isAllowed={tokenExpired()} redirectPath={URLS.dashboard} />}
    >
      <Route path={AUTH_URLS.login} element={<LoginPage />} />
      <Route path={AUTH_URLS.register} element={<RegisterPage />} />
    </Route>,
  ];
}
