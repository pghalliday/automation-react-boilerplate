/*
 *
 * UserProvider reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_LOGIN_STATE,
  LOGIN_STATE_DEFAULT,
  SET_PROFILE,
  PROFILE_DEFAULT,
} from './constants';

export const initialState = fromJS({
  loginState: LOGIN_STATE_DEFAULT,
  profile: PROFILE_DEFAULT,
});

function userProviderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return state.set('loginState', action.loginState);
    case SET_PROFILE:
      return state.set('profile', action.profile);
    default:
      return state;
  }
}

export default userProviderReducer;
