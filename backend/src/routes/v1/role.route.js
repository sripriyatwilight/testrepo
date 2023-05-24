const express = require('express');

const { roleController } = require('../../controllers');

const router = express.Router();

router.route('/createrole').post(roleController.createRole);
router.route('/listallrole').get(roleController.getAllRole);
router.route('/updaterole/:id').put(roleController.updateRole);
router.route('/deleterole/:id').delete(roleController.deleteRole);
router.route('/listing/:id').get(roleController.listing);

module.exports = router;
