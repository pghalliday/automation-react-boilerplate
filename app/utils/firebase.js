import * as firebase from 'firebase/app';
import 'firebase/auth';

import * as firebaseui from 'firebaseui';

export const app = firebase.initializeApp({
  apiKey: 'AIzaSyA-KFUvyX_CIWH1_FJkasrBCcbpLV7Bx_A',
  authDomain: 'north-catch-automation.firebaseapp.com',
  databaseURL: 'https://north-catch-automation.firebaseio.com',
  projectId: 'north-catch-automation',
  storageBucket: 'north-catch-automation.appspot.com',
  messagingSenderId: '154446626428',
});

export const ui = (authContainer, loaderContainer) => {
  const authUI = new firebaseui.auth.AuthUI(app.auth());
  const uiConfig = {
    callbacks: {
      // arguments available: (authResult, redirectUrl)
      // returning true redirects automatically
      signInSuccessWithAuthResult: () => true,
      uiShown: () => {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById(loaderContainer).style.display = 'none';
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>',
  };
  return authUI.start(`#${authContainer}`, uiConfig);
};
