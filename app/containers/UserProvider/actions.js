/*
 *
 * UserProvider actions
 *
 */

import { LOGIN, LOGOUT, SET_LOGIN_STATE } from './constants';

export function setLoginStateAction(loginState) {
  return {
    type: SET_LOGIN_STATE,
    loginState,
  };
}

export function loginAction() {
  return {
    type: LOGIN,
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
