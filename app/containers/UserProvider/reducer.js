/*
 *
 * UserProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_PENDING,
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
  SET_PERMISSIONS,
} from './constants';

export const initialState = fromJS({
  pending: true,
  permissions: {},
});

const loggedOutState = fromJS({
  pending: false,
  permissions: {},
});

function userProviderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PENDING:
      return initialState;
    case SET_LOGGED_OUT:
      return loggedOutState;
    case SET_LOGGED_IN:
      return fromJS({
        ...loggedOutState,
        ...action.payload,
      });
    case SET_PERMISSIONS:
      return state.set('permissions', fromJS(action.permissions));
    default:
      return state;
  }
}

export default userProviderReducer;
