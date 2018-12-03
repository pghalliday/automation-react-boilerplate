import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the leftDrawer state domain
 */

const selectLeftDrawerDomain = state => state.get('leftDrawer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LeftDrawer
 */

const makeSelectLeftDrawer = () =>
  createSelector(selectLeftDrawerDomain, substate => substate.toJS());

export default makeSelectLeftDrawer;
export { selectLeftDrawerDomain };
