const proxy = require('http-proxy-middleware');
const config = require('../../firebase.json');

module.exports = (app, port = 5000) => {
  const {
    hosting: { rewrites },
  } = config;
  rewrites.forEach(rewrite => {
    if (rewrite.function) {
      app.use(rewrite.source, proxy(`http://localhost:${port}`));
    }
  });
};
