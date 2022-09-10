const { appSettings } = require('./utils/settings/settings');
const app = require('./app');

const { PORT } = process.env;

app.listen(PORT || appSettings.defaultPort);
