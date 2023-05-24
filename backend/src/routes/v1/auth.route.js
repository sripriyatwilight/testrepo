const express = require('express');

const { authController } = require('../../controllers');

const router = express.Router();

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/loginme').get(authController.loginme);
router.route('/forgotpswd').post(authController.forgotpswd);
router.route('/resetpswd').put(authController.resetpswd);

module.exports = router;
