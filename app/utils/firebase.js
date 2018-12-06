import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} from './constants';

const INITIAL_PERMISSIONS = {
  active: false,
  admin: false,
};

export const app = firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
});

export const logout = () => firebase.auth().signOut();

export const initUser = gapiUser => {
  const idToken = gapiUser.getAuthResponse().id_token;
  const creds = firebase.auth.GoogleAuthProvider.credential(idToken);
  return firebase
    .auth()
    .signInWithCredential(creds)
    .then(user => {
      const ref = firebase.database().ref(`permissions/${user.uid}`);
      return ref
        .once('value')
        .then(
          snapshot =>
            snapshot.val() === null ? ref.set(INITIAL_PERMISSIONS) : '',
        )
        .then(() => user);
    });
};

export const subscribeToPermissionsChange = callback => {
  const user = firebase.auth().currentUser;
  const ref = firebase.database().ref(`permissions/${user.uid}`);
  const listener = snapshot => callback(snapshot.val() || {});
  ref.on('value', listener);
  return () => ref.off('value', listener);
};

export const subscribeToGoogleAnalyticsViewsChange = callback => {
  const user = firebase.auth().currentUser;
  const ref = firebase.database().ref(`googleAnalyticsViews/${user.uid}`);
  const listener = snapshot => callback(snapshot.val() || {});
  ref.on('value', listener);
  return () => ref.off('value', listener);
};
