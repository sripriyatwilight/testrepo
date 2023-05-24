const express = require('express');

const { permissionController } = require('../../controllers');

const router = express.Router();

router.route('/createpermission').post(permissionController.createPermission);
router.route('/updatepermission/:id').put(permissionController.updatePermission);
router.route('/deletepermission/:id').delete(permissionController.deletePermission);

module.exports = router;
