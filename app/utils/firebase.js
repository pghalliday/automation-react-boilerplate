import * as firebase from 'firebase/app';
import 'firebase/auth';

export const app = firebase.initializeApp({
  apiKey: 'AIzaSyA-KFUvyX_CIWH1_FJkasrBCcbpLV7Bx_A',
  authDomain: 'north-catch-automation.firebaseapp.com',
  databaseURL: 'https://north-catch-automation.firebaseio.com',
  projectId: 'north-catch-automation',
  storageBucket: 'north-catch-automation.appspot.com',
  messagingSenderId: '154446626428',
});

export const subscribeToAuthStateChange = callback => {
  // wrap the callback so that the returned unsubscribe
  // is guaranteed to be unsubscribing a unique listener
  const listener = (...args) => callback(...args);
  return firebase.auth().onAuthStateChanged(listener);
};

export const logout = () => firebase.auth().signOut();

export const login = () =>
  firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
