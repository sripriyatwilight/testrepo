const { permissionService } = require('../services/index');

const createPermission = async (req, res) => {
  try {
    const permissionData = req.body;
    const permission = await permissionService.createPermission(permissionData);
    res.status(200).json({ message: 'Permission created successfully', permission });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Permission' });
  }
};

const updatePermission = async (req, res) => {
  try {
    const checkpermission = await permissionService.getPermissionById(req.params.id);

    if (!checkpermission) {
      res.status(404).send({ status: false, message: 'Permission not found' });
      return;
    }
    const updatedPermission = await permissionService.updatePermission(req.params.id, req.body);
    res.status(200).json({ message: 'Permission updated successfully', permission: updatedPermission });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update Permission' });
  }
};

const deletePermission = async (req, res) => {
  try {
    await permissionService.deletePermission(req.params.id);
    res.status(200).json({ message: 'Permission deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete permission' });
  }
};

module.exports = {
  createPermission,
  updatePermission,
  deletePermission,
};
