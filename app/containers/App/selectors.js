import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.get('app', initialState);

/**
 * Other specific selectors
 */

const makeSelectIsDrawerOpen = () =>
  createSelector(selectAppDomain, substate => substate.get('isDrawerOpen'));

const makeSelectLoginState = () =>
  createSelector(selectAppDomain, substate => substate.get('loginState'));

export { selectAppDomain, makeSelectIsDrawerOpen, makeSelectLoginState };
