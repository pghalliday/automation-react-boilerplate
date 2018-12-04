/*
 *
 * UserProvider actions
 *
 */

import { LOGIN, LOGOUT, SET_LOGIN_STATE, SET_PROFILE } from './constants';

export function setProfileAction(profile) {
  return {
    type: SET_PROFILE,
    profile,
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
