'use strict'

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const config = require('./config');
const constructors = require('./constructors/index');
const errors = require('./errors/index');

const app = express();

if(config.environment === 'dev') app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/health', routes.health);

app.use((req, res, next) => {
  const errorMessage = new constructors.ErrorMessage(404, 'The route ' + req.path + ' does not exist');

  next(errorMessage);
});

errors(app);

module.exports = app;
