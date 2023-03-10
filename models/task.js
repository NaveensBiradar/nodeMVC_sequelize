'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.STRING,
    resources: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });

  Task.associate = models => {
    Task.belongsTo(models.User,{foreignKey:{
      allowNull:false
    }})
  }
  return Task;
};