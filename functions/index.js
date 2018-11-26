const DATABASE_URL = 'https://north-catch-automation.firebaseio.com/';

const admin = require('firebase-admin');
admin.initializeApp({
  databaseURL: DATABASE_URL,
});

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ origin: true });
const cookieParser = require('cookie-parser')();
const session = require('./middleware/session-firebase')(admin);
// eslint-disable-next-line prettier/prettier
const validateFirebaseIdToken = require('./middleware/validate-firebase-id-token')(admin);
const testRoute = require('./route/test');
const defaultRoute = require('./route/default');

const app = express();

app.use(cors);
app.use(cookieParser);
app.use(session);
app.use(validateFirebaseIdToken);

app.get('/functions/test', testRoute);
app.get('/*', defaultRoute);

exports.functions = functions.https.onRequest(app);
