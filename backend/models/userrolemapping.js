'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRolemapping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userRolemapping.init(
    {
      roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'roles',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'userRolemapping',
    }
  );
  userRolemapping.associate = function (models) {
    userRolemapping.belongsTo(models.roles, { foreignKey: 'id', target_key: 'roleId' });
    userRolemapping.belongsTo(models.users, { foreignKey: 'id', target_key: 'userId' });
  };

  return userRolemapping;
};
