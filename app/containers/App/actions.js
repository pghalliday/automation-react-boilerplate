/*
 *
 * App actions
 *
 */

import { TOGGLE_DRAWER_OPEN } from './constants';

export function toggleDrawerOpenAction() {
  return {
    type: TOGGLE_DRAWER_OPEN,
  };
}
