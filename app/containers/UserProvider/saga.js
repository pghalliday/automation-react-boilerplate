import { call, takeEvery, put, fork, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { init, subscribeToUserChange, logout, login } from '../../utils/gapi';
import {
  initUser,
  subscribeToPermissionsChange,
  logout as firebaseLogout,
} from '../../utils/firebase';
import {
  setPendingAction,
  setLoggedInAction,
  setLoggedOutAction,
  setPermissionsAction,
} from './actions';
import { LOGOUT, LOGIN } from './constants';

let currentPermissionsWatch;
function resetCurrentPermissionsWatch(task) {
  if (currentPermissionsWatch) {
    cancel(currentPermissionsWatch);
  }
  currentPermissionsWatch = task;
}

export function permissionsChannel() {
  return eventChannel(subscribeToPermissionsChange);
}

export function* setPermissions(permissions) {
  yield put(setPermissionsAction(permissions));
}

export function* permissionsSaga() {
  const channel = yield call(permissionsChannel);
  yield takeEvery(channel, setPermissions);
}

export function userChannel() {
  return eventChannel(subscribeToUserChange);
}

export function* setUser({ gapiUser }) {
  if (gapiUser) {
    const firebaseUser = yield initUser(gapiUser);
    resetCurrentPermissionsWatch(yield fork(permissionsSaga));
    yield put(
      setLoggedInAction({
        gapiUser,
        firebaseUser,
      }),
    );
  } else {
    yield firebaseLogout();
    resetCurrentPermissionsWatch();
    yield put(setLoggedOutAction());
  }
}

export function* userSaga() {
  const channel = yield call(userChannel);
  yield takeEvery(channel, setUser);
}

export function* doLogout() {
  yield put(setPendingAction());
  yield logout();
}

export function* logoutSaga() {
  yield takeEvery(LOGOUT, doLogout);
}

export function* doLogin() {
  yield put(setPendingAction());
  yield login();
}

export function* loginSaga() {
  yield takeEvery(LOGIN, doLogin);
}

export default function* userProviderSaga() {
  yield init();
  yield fork(userSaga);
  yield fork(logoutSaga);
  yield fork(loginSaga);
}
