const { appSettings } = require('../utils/settings/settings');

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;

  if (appSettings.allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  }

  if (method === 'OPTIONS') {
    const requestHeaders = req.headers['access-control-request-headers'];

    res.header('Access-Control-Allow-Methods', appSettings.allowedMethods);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
};
