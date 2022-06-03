import React from 'react';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { useRouting } from '../routing';
import { login } from '../services/auth.service';
import { LoginRequest } from '../models/login-request';
import { AUTH_URLS, URLS } from '../helpers/constants';

const styles = {
  header: {
    paddingLeft: '3em',
    paddingRight: '3em',
  },
};

const initialValues: LoginRequest = {
  username: 'admin',
  password: 'admin',
};

export function LoginPage() {
  const { routeTo } = useRouting();

  const onSubmit = async ({ password, username }: LoginRequest) => {
    const response = await login(username, password);
    if (response) {
      return routeTo(URLS.dashboard);
    }

    return routeTo(AUTH_URLS.login);
  };

  return (
    <div className="Login">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleChange }) => (
          <div>
            <div style={styles.header}>
              <img
                src={require('../assets/images/gdsc-logo-and-text.png').default}
                alt="GDSC logo"
              />
            </div>
            <Form className="Form">
              <span className="title">Admin Dashboard</span>
              <input
                type="text"
                name="username"
                placeholder="Enter your email or username"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <button type="submit">LOGIN</button>

              <span>
                No account? <Link to="/register">Register</Link>
              </span>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
