// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
module.exports = admin => {
  return (req, res, next) => {
    console.log('Check if request is authorized with Firebase ID token');

    if (
      (!req.headers.authorization ||
        !req.headers.authorization.startsWith('Bearer ')) &&
      !(req.cookies && req.cookies.__session)
    ) {
      console.log(
        'No Firebase ID token was passed as a Bearer token in the Authorization header.',
        'Make sure you authorize your request by providing the following HTTP header:',
        'Authorization: Bearer <Firebase ID Token>',
        // eslint-disable-next-line prettier/prettier
        'or by passing a "__session" cookie.'
      );
      return next();
    }

    let idToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      console.log('Found "Authorization" header');
      // Read the ID Token from the Authorization header.
      idToken = req.headers.authorization.split('Bearer ')[1];
    } else if (req.cookies) {
      console.log('Found "__session" cookie');
      // Read the ID Token from cookie.
      idToken = req.cookies.__session;
    } else {
      // No cookie
      console.log('No authorization header or cookie');
      return next();
    }

    return admin
      .auth()
      .verifyIdToken(idToken)
      .then(decodedIdToken => {
        console.log('ID Token correctly decoded', decodedIdToken);
        req.user = decodedIdToken;
        return next();
      })
      .catch(error => {
        console.warn('Error while verifying Firebase ID token:', error);
        return next();
      });
  };
};
