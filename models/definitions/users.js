const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
const roles = require("./roles");
// const{role}=??????
class Users extends Model {}

Users.init(
  {
    UserId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(256),
      // unique: true;
      allowNull: false,
    },
    // roleId: {
    //   type: DataTypes.STRING(255),
    //   allowNull:false,
    //   references: roleId,
    //   modelName
  },

  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);

module.exports = Users;