const authRouter = require('express').Router();
const staticRouter = require('express').Router();

const router = require('../controllers');

staticRouter.use('/', router);
authRouter.use('/api/user/', router);

module.exports = { authRouter, staticRouter };
