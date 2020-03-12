const staticRouter = require('express').Router();

const { registrationPage, studentPage } = require('./getStatic');

staticRouter.route('/user/registration').get(registrationPage);
staticRouter.route('/student').get(studentPage);

module.exports = staticRouter;
