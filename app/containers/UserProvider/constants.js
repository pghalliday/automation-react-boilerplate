/*
 * UserProviderConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// Actions
export const LOGIN = 'app/UserProvider/LOGIN';
export const LOGOUT = 'app/UserProvider/LOGOUT';
export const SET_LOGIN_STATE = 'app/UserProvider/SET_LOGIN_STATE';

// State defaults
export const LOGIN_STATE_DEFAULT = {};
