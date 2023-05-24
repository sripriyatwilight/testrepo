const { roleService } = require('../services');

const createRole = async (req, res) => {
  try {
    const roleData = req.body;
    const role = await roleService.createRole(roleData);
    res.status(201).json({ message: 'Role created successfully', role });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create role' });
  }
};

// const listingRole = async (req, res) => {
//   try {
//     // console.log(req.params.id);
//     const role = await roleService.getRoleById(req.params.id);
//     // console.log(req.params.id);
//     res.status(201).json({ message: 'Roles Listing', role });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to listing a role' });
//   }
// };

const listing = async (req, res) => {
  try {
    // console.log('jhjhjhj');
    const role = await roleService.getRoleById(req.params.id);
    // res.status(200).send(role);
    res.status(201).json({ message: 'Roles Listing', role });
  } catch (error) {
    // res.status(500).send('error', error);
    res.status(500).json({ error: 'Failed to listing a role' });
  }
};

const getAllRole = async (req, res) => {
  try {
    const role = await roleService.getAllRole();
    // console.log(req.params.id);
    res.status(201).json({ message: 'Roles Listing', role });
  } catch (error) {
    res.status(500).json({ error: 'Failed to listing a role' });
  }
};

const updateRole = async (req, res) => {
  try {
    const checkrole = await roleService.getRoleById(req.params.id);

    if (!checkrole) {
      res.status(404).send({ status: false, message: 'Role not found' });
      return;
    }
    const updatedRole = await roleService.updateRole(req.params.id, req.body);
    res.status(200).json({ message: 'Role updated successfully', role: updatedRole });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update role' });
  }
};

const deleteRole = async (req, res) => {
  try {
    await roleService.deleteRole(req.params.id);
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete role' });
  }
};

module.exports = {
  createRole,
  getAllRole,
  // listingRole,
  listing,
  updateRole,
  deleteRole,
};
