const sequelize = require("../bin/dbConnection");
const users = require("./definitions/users");

const models = { users };

const db = {};
db.sequelize = sequelize;
sequelize.model = models;

sequelize.model = { db, models };
