const router = require('express').Router();

const authRouter = require('./Authentication');
const staticRouter = require('./Static');

router.use(authRouter);
router.use(staticRouter);
module.exports = router;
