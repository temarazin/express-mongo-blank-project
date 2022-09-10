const { NotFoundError } = require('../classes/Error');
const mainRouter = require('./main');

module.exports = (app) => {
  app.use('/', mainRouter);
  app.use(() => {
    throw new NotFoundError();
  });
};
