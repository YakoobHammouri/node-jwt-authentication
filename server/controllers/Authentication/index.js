const authRouter = require('express').Router();

const { login, logout, isAuthentication } = require('./auth');

authRouter.route('/login').post(login);
authRouter.route('/logout').post(logout);
authRouter.route('/authen').post(isAuthentication);

module.exports = authRouter;
