/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import { TOGGLE_DRAWER_OPEN, IS_DRAWER_OPEN_DEFAULT } from './constants';

export const initialState = fromJS({
  isDrawerOpen: IS_DRAWER_OPEN_DEFAULT,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER_OPEN:
      return state.set('isDrawerOpen', !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default appReducer;
