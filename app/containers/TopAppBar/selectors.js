import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the topAppBar state domain
 */

const selectTopAppBarDomain = state => state.get('topAppBar', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TopAppBar
 */

const makeSelectTopAppBar = () =>
  createSelector(selectTopAppBarDomain, substate => substate.toJS());

export default makeSelectTopAppBar;
export { selectTopAppBarDomain };
