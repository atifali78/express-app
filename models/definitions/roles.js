const { Model, DataTypes, ENUM } = require("sequelize");
const sequelize = require("../../bin/dbConnection");
class roles extends Model { }


rolesUsers.init(
  {
    rolesId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    // role: {
    //   type: DataTypes, ENUM,
    //   values: ["instructor", "Admin,"trainee"],
    //     unique: true,
    // },
    
  },

  {
    timestamps: true,
    paranoid: true,
    modelName: "roles",
    sequelize,
    
  }
);

module.exports = roles;
