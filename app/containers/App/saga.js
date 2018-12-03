import { call, takeEvery, put, fork } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  subscribeToAuthStateChange,
  logout,
  login,
  getLoginResult,
} from '../../utils/firebase';
import { setLoginStateAction } from './actions';
import { LOGOUT, LOGIN } from './constants';

export function loginStateChannel() {
  return eventChannel(emitter =>
    subscribeToAuthStateChange((user, error) => {
      if (error) {
        emitter({ error });
      } else if (user) {
        emitter({ user });
      } else {
        emitter({ loggedOut: true });
      }
    }),
  );
}

export function* setLoginState(state) {
  yield put(setLoginStateAction(state));
}

export function* loginStateSaga() {
  const channel = yield call(loginStateChannel);
  yield takeEvery(channel, setLoginState);
}

export function* doLogout() {
  yield put(setLoginStateAction({}));
  yield logout();
}

export function* logoutSaga() {
  yield takeEvery(LOGOUT, doLogout);
}

export function* doLogin() {
  yield put(setLoginStateAction({}));
  yield login();
}

export function* loginSaga() {
  yield takeEvery(LOGIN, doLogin);
}

export default function* appSaga() {
  getLoginResult();
  yield fork(loginStateSaga);
  yield fork(logoutSaga);
  yield fork(loginSaga);
}
