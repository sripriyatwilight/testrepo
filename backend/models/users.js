const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      resetToken: DataTypes.STRING,
      resetTokenExpiration: DataTypes.DATE,
      newPassword: DataTypes.STRING,
      confirmPassword: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'users',
    }
  );
  users.associate = function (models) {
    users.belongsToMany(models.roles, {
      through: 'userRolemappings',
      as: 'roles',
      foreignKey: 'userId',
    });
  };
  return users;
};
