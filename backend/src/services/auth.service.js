const db = require('../../models/index');

const registercreate = async (updatedBody) => {
  return db.users.create(updatedBody);
};

const loginservice = async (id, resetToken, email) => {
  return db.users.findOne(id, resetToken, email);
};

const logintokenservice = async (resetToken) => {
  return db.users.findByPk(resetToken);
};

const resetpswdservice = async (updatedBody) => {
  return db.users.update(updatedBody);
};

// const resetpswdservice = async (id) => {
//   return db.users.update(id);
// };

module.exports = {
  registercreate,
  loginservice,
  resetpswdservice,
  logintokenservice,
};
