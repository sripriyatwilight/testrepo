const db = require('../../models/index');

const createPermission = async (permissionData) => {
  const demo = await db.Permissions.create(permissionData);
  return demo;
};

const getPermissionById = async (permissionId) => {
  try {
    const permission = await db.Permissions.findByPk(permissionId);
    return permission;
  } catch (error) {
    throw new Error('Failed to get permissionId by ID');
  }
};

const updatePermission = async (permissionId, permissionData) => {
  try {
    await db.Permissions.update(permissionData, { where: { id: permissionId } });
    const updatedPermission = await getPermissionById(permissionId);
    return updatedPermission;
  } catch (error) {
    throw new Error('Failed to update Permissions');
  }
};

const deletePermission = async (permissionId) => {
  try {
    await db.Permissions.destroy({ where: { id: permissionId } });
  } catch (error) {
    throw new Error('Failed to delete permission');
  }
};

module.exports = {
  createPermission,
  getPermissionById,
  updatePermission,
  deletePermission,
};
