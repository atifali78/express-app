const { Model, DataTypes } = require("sequelize");
const sequelize = require("../bin/dbConnection");
class users extends Model {}
users.init(
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
      allowNull: false,
    },
  },

  {
    timestamps: true,
    paranoid: true,
    modelName: "users",
    sequelize,
  }
);
module.exports = users;
