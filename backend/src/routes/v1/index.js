const express = require('express');

const authRouter = require('./auth.route');
const roleRouter = require('./role.route');
const permissionRouter = require('./permission.route');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/role', roleRouter);
router.use('/permission', permissionRouter);

module.exports = router;
