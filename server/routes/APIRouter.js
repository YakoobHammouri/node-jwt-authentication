const authRouter = require('express').Router();

const authRoute = require('../controllers');

authRouter.use('/api/user/auth/', authRoute);

module.exports = authRouter;
