import { createSelector } from 'reselect';

/**
 * Direct selector to the router state domain
 */

const selectRouterDomain = state => state.get('router');

/**
 * Other specific selectors
 */

const makeSelectLocation = () =>
  createSelector(selectRouterDomain, substate => substate.get('location'));

const makeSelectPathname = () =>
  createSelector(makeSelectLocation(), substate => substate.get('pathname'));

const makeSelectSearch = () =>
  createSelector(makeSelectLocation(), substate => substate.get('search'));

const makeSelectHash = () =>
  createSelector(makeSelectLocation(), substate => substate.get('hash'));

/**
 * Default selector used by Router
 */

const makeSelectRouter = () =>
  createSelector(selectRouterDomain, substate => substate.toJS());

export default makeSelectRouter;
export {
  selectRouterDomain,
  makeSelectLocation,
  makeSelectPathname,
  makeSelectSearch,
  makeSelectHash,
};
