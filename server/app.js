const express = require('express');

const cookieParser = require('cookie-parser');

const { join } = require('path');

const routes = require('./controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(routes);

module.exports = app;
