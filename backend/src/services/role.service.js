const db = require('../../models/index');

const createRole = async (roleData) => {
  try {
    const role = await db.roles.create(roleData);
    return role;
  } catch (error) {
    throw new Error('Failed to create role');
  }
};

const getRoleById = async (roleId) => {
  // console.log('dsfsdffsd');
  return db.roles.findOne(
    {
      where: { id: roleId },
      // include: {
      //   model: db.Permissions,
      //   where: {
      //     id: roleId,
      //   },
      // },
    }

    // {
    //   include: {
    //     model: db.Permissions,
    //     where: {
    //       id: roleId,
    //     },
    //   },
    // }
    // include: { model: db.Permissions },
  );
  // const role = await db.roles.findByPk({
  //   where: { roleId },

  //   include: [{ model: db.Permissions }],
  // });
  // return role;
};

const getRoleId = async (id) => {
  return db.roles.findOne({ include: [{ model: db.Permission, where: { roleid: id } }] });

  // return db.roles.findOne({
  //   where: { id },
  //   include: [{ model: db.Permission, as: 'Permissions' }],
  // });
};

// const getRoleById = async (roleId) => {
//   // console.log('roleId', roleId);

//   return db.roles.findOne({ where: { id: roleId } });
// };

const getAllRole = async () => {
  return db.roles.findAll();
};

const updateRole = async (roleId, roleData) => {
  try {
    await db.roles.update(roleData, { where: { id: roleId } });
    const updatedRole = await getRoleById(roleId);
    return updatedRole;
  } catch (error) {
    throw new Error('Failed to update role');
  }
};

const deleteRole = async (roleId) => {
  // console.log('roleId', roleId);
  try {
    await db.roles.destroy({ where: { id: roleId } });
  } catch (error) {
    throw new Error('Failed to delete role');
  }
};

module.exports = {
  createRole,
  getRoleById,
  updateRole,
  deleteRole,
  getAllRole,
  getRoleId,
};
