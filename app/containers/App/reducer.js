/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  TOGGLE_DRAWER_OPEN,
  SET_LOGIN_STATE,
  IS_DRAWER_OPEN_DEFAULT,
  LOGIN_STATE_DEFAULT,
} from './constants';

export const initialState = fromJS({
  isDrawerOpen: IS_DRAWER_OPEN_DEFAULT,
  loginState: LOGIN_STATE_DEFAULT,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER_OPEN:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    case SET_LOGIN_STATE:
      return state.set('loginState', action.loginState);
    default:
      return state;
  }
}

export default appReducer;
