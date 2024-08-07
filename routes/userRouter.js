var routes = require("express").Router();
const { create, getAll } = require("../controllers/userController");
c
routes.get("/get-all-users", getAll);
routes.post("/create-user", create);

module.exports = routes;
