/*
 *
 * UserProvider reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_LOGIN_STATE, LOGIN_STATE_DEFAULT } from './constants';

export const initialState = fromJS({
  loginState: LOGIN_STATE_DEFAULT,
});

function userProviderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return state.set('loginState', action.loginState);
    default:
      return state;
  }
}

export default userProviderReducer;
