import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the UserProvider state domain
 */

const selectUserProviderDomain = state =>
  state.get('userProvider', initialState);

/**
 * Other specific selectors
 */

const makeSelectUserProvider = () =>
  createSelector(selectUserProviderDomain, substate => substate.toJS());

export { makeSelectUserProvider };
