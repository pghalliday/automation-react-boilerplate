/* global gapi */
import {
  GAPI_URL,
  GAPI_LOAD_TIMEOUT,
  FIREBASE_API_KEY,
  FIREBASE_CLIENT_ID,
} from '../constants';

const scope = 'https://www.googleapis.com/auth/analytics.readonly';

function fetchScript() {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = GAPI_URL;
    script.onload = resolve;
    document.getElementsByTagName('head')[0].appendChild(script);
  });
}

function loadClient() {
  return new Promise((resolve, reject) => {
    gapi.load('client:auth2', {
      callback: resolve,
      onerror: reject,
      timeout: GAPI_LOAD_TIMEOUT,
      ontimeout: reject.bind(
        null,
        new Error('gapi.client did not load in a timely manner'),
      ),
    });
  });
}

function initClient() {
  return gapi.client.init({
    apiKey: FIREBASE_API_KEY,
    clientId: FIREBASE_CLIENT_ID,
    scope,
  });
}

export function init() {
  return fetchScript()
    .then(loadClient)
    .then(initClient);
}

export function subscribeToUserChange(callback) {
  const auth = gapi.auth2.getAuthInstance();
  const listener = isSignedIn => {
    if (isSignedIn) {
      callback({
        gapiUser: auth.currentUser.get(),
      });
    } else {
      callback({});
    }
  };
  auth.isSignedIn.listen(listener);
  setTimeout(() => {
    listener(auth.isSignedIn.get());
  }, 0);
  // TODO: no method to unsubscribe from sign in updates?
  return () => {};
}

export function login() {
  return gapi.auth2.getAuthInstance().signIn();
}

export function logout() {
  return gapi.auth2.getAuthInstance().signOut();
}

/*
 * Test the analytics and analyticsreporting APIs
 */
export function test() {
  return gapi.client
    .load('analytics', 'v3')
    .then(() => gapi.client.load('analyticsreporting', 'v4'))
    .then(() => gapi.client.analytics.management.accounts.list())
    .then(response => response.result.items[0].id)
    .then(id =>
      gapi.client.analytics.management.webproperties.list({ accountId: id }),
    )
    .then(response => response.result.items[0])
    .then(({ accountId, id: webPropertyId }) =>
      gapi.client.analytics.management.profiles.list({
        accountId,
        webPropertyId,
      }),
    )
    .then(response => response.result.items[0].id)
    .then(viewId =>
      gapi.client.analyticsreporting.reports.batchGet({
        reportRequests: [
          {
            viewId,
            dateRanges: [
              {
                startDate: '7daysAgo',
                endDate: 'today',
              },
            ],
            metrics: [
              {
                expression: 'ga:sessions',
              },
            ],
          },
        ],
      }),
    )
    .then(response => console.log(JSON.stringify(response.result, null, 2)))
    .then(() => console.log(gapi.client));
}
