// configuring the package
require("dotenv").config();
// import the package of sequelize by de-structing
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to Database");
  })
  .catch((error) => {
    console.log("Error connecting to Database", error);
  });

module.exports = sequelize;

