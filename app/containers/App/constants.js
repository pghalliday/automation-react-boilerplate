/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// Actions
export const TOGGLE_DRAWER_OPEN = 'app/App/TOGGLE_DRAWER_OPEN';

// State defaults
export const IS_DRAWER_OPEN_DEFAULT = false;

// Other constants
export const DRAWER_WIDTH = 240;
export const HOME_ROUTE = '/';
export const SETTINGS_ROUTE = '/settings';
export const USERS_ROUTE = '/users';
