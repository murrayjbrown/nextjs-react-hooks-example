const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');

const config = require('config');
const express = require('express');

const app = express();

// Load configuration & set up features
// app.configure(configuration());
app.use(cors());
app.use(helmet());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up favicon & public paths
app.use(favicon(path.join(config.get('public'), 'favicon.ico')));
app.use('/public', express.static(config.get('public')));


module.exports = app;
