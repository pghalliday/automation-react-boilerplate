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
export const LOGIN = 'app/App/LOGIN';
export const LOGOUT = 'app/App/LOGOUT';
export const SET_LOGIN_STATE = 'app/App/SET_LOGIN_STATE';

// State defaults
export const IS_DRAWER_OPEN_DEFAULT = false;
export const LOGIN_STATE_DEFAULT = {};

// Other constants
export const DRAWER_WIDTH = 240;
export const HOME_ROUTE = '/';
export const OTHER_ROUTE = '/other';
