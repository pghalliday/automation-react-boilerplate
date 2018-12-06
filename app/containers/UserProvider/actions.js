/*
 *
 * UserProvider actions
 *
 */

import {
  LOGIN,
  LOGOUT,
  SET_PENDING,
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
  SET_PERMISSIONS,
} from './constants';

export function setLoggedOutAction() {
  return {
    type: SET_LOGGED_OUT,
  };
}

export function setPermissionsAction(permissions) {
  return {
    type: SET_PERMISSIONS,
    permissions,
  };
}

export function setLoggedInAction(users) {
  return {
    type: SET_LOGGED_IN,
    users,
  };
}

export function setPendingAction() {
  return {
    type: SET_PENDING,
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
