import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectRouter = state => state.get('router');

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.get('app', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

const makeSelectIsDrawerOpen = () =>
  createSelector(selectAppDomain, substate => substate.get('isDrawerOpen'));

export { selectAppDomain, makeSelectLocation, makeSelectIsDrawerOpen };
