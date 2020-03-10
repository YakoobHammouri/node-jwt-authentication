const router = require('express').Router();

const authRouter = require('./Authentication');

router.use(authRouter);

module.exports = router;
