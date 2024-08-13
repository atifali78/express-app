const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mr19", "postgres", "4136806", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .than(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error(error.message);
  });

module.export = sequelize;
