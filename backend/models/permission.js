module.exports = function (sequelize, DataTypes) {
  const Permissions = sequelize.define(
    'Permissions',
    {
      permName: DataTypes.STRING,
      permDesc: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Permissions',
          key: 'id',
        },
      },
    },
    {
      timestamps: true,
    }
    // {
    //   freezeTableName: true,
    // }
  );
  Permissions.associate = function (models) {
    Permissions.belongsTo(models.roles, { foreignKey: 'id', target_key: 'roleId' });
  };
  return Permissions;
};
