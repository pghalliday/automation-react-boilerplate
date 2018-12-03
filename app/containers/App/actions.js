/*
 *
 * App actions
 *
 */

import { TOGGLE_DRAWER_OPEN, LOGIN, LOGOUT, SET_LOGIN_STATE } from './constants';

export function toggleDrawerOpenAction() {
  return {
    type: TOGGLE_DRAWER_OPEN,
  };
}

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
