module.exports = {
  appSettings: {
    developSecretKey: 'some-key',
    defaultPort: 3000,
    allowedMethods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedCors: [
      'http://localhost:3005',
    ],
  },
  dbConnect: {
    dbName: 'mydb',
    dbHost: 'mongodb://localhost:27017/',
  },
};
