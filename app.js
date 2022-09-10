require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');

const router = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { dbConnect } = require('./utils/settings/settings');
const rateLimiter = require('./utils/settings/rateLimitConfig');
const cors = require('./middlewares/cors');

const app = express();

app.use(cors);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { DBHOST, DBNAME } = process.env;
mongoose.connect((DBHOST || dbConnect.dbHost) + (DBNAME || dbConnect.dbName));

app.use(cookieParser());
app.use(requestLogger);
app.use(rateLimiter);

router(app);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

module.exports = app;
