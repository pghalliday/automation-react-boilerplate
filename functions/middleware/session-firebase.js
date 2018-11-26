const session = require('express-session');
const FirebaseStore = require('connect-session-firebase')(session);

module.exports = admin => {
  return session({
    store: new FirebaseStore({
      database: admin.database(),
    }),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  });
};
