import { AUTH_DATA_KEY } from './constants';
import { LoginResponse } from '../auth/models/login-response';

function authData(): LoginResponse {
  return JSON.parse(localStorage.getItem(AUTH_DATA_KEY) ?? '{}');
}

export default authData();
