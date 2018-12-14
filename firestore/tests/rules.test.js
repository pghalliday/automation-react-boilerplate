import * as firebase from '@firebase/testing';
import fs from 'fs';

const RULES = fs.readFileSync('./firestore/rules', 'utf8');
const PROJECT_ID = 'test';
const UID = 'test uid';
const EMAIL = 'test email';
const AUTH = {
  uid: UID,
  email: EMAIL,
};

describe('firestore', () => {
  let testApp;
  let adminApp;

  beforeAll(() => {
    firebase.loadFirestoreRules({
      projectId: PROJECT_ID,
      rules: RULES,
    });
    testApp = firebase.initializeTestApp({
      projectId: PROJECT_ID,
      auth: AUTH,
    });
    adminApp = firebase.initializeAdminApp({
      projectId: PROJECT_ID,
    });
    // set up initial database state
    adminApp
      .firestore()
      .collection('users')
      .doc(UID)
      .set({
        foo: 'bar',
      });
  });

  afterAll(() => Promise.all(firebase.apps().map(app => app.delete())));

  it('should fail on an invalid user', () =>
    firebase.assertFails(
      testApp
        .firestore()
        .collection('users')
        .doc(UID)
        .set({
          foo: 'bar',
        }),
    ));
});
