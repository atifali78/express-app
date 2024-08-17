const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");
const roles = require("./definitions/roles");
const models = { users, roles };

const db = {};
db.sequelize = sequelize;
sequelize.model = models;

module.model = { db, models };
