import { call, takeEvery, put, fork, cancel } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  subscribeToAuthStateChange,
  logout,
  login,
  initUser,
  subscribeToProfileChange,
} from '../../utils/firebase';
import { setLoginStateAction, setProfileAction } from './actions';
import { LOGOUT, LOGIN, PROFILE_DEFAULT } from './constants';

let currentProfileWatch;
let currentUser;

export function profileChannel() {
  return eventChannel(emitter =>
    subscribeToProfileChange(currentUser, snapshot => {
      emitter(snapshot.val());
    }),
  );
}

export function* setProfile(profile) {
  yield put(setProfileAction(profile));
}

export function* profileSaga() {
  const channel = yield call(profileChannel);
  yield takeEvery(channel, setProfile);
}

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
  if (state.user) {
    currentUser = state.user;
    yield initUser(currentUser);
    currentProfileWatch = yield fork(profileSaga);
  } else if (currentProfileWatch) {
    yield cancel(currentProfileWatch);
    currentProfileWatch = undefined;
    yield put(setProfileAction(PROFILE_DEFAULT));
  }
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

export default function* userProviderSaga() {
  yield fork(loginStateSaga);
  yield fork(logoutSaga);
  yield fork(loginSaga);
}
