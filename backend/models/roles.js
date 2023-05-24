module.exports = function (sequelize, DataTypes) {
  const roles = sequelize.define(
    'roles',
    {
      roleName: DataTypes.STRING,
      roleDesc: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      timestamps: true,
    }
    // {
    //   freezeTableName: true,
    // }
  );
  roles.associate = function (models) {
    roles.hasMany(models.Permissions, { foreignKey: 'roleId' });
  };

  roles.associate = function (models) {
    // roles.hasMany(models.Permissions, { foreignKey: 'roleId' });
    roles.belongsToMany(models.users, {
      through: 'userRolemappings',
      as: 'users',
      foreignKey: 'roleId',
    });
  };
  return roles;
};
