const express = require('express');

const cookieParser = require('cookie-parser');

const { join } = require('path');

const errorHandler = require('./controllers/ErrorHandler');

const authRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(authRouter);

app.use(errorHandler.error404);
app.use(errorHandler.error500);

module.exports = app;
