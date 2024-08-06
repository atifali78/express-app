var routes = require("express").Router();
const { create, getAll } = require("../controllers/userController");

routes.get("/get-all-users", getAll);
routes.post("/create-user", create);

module.exports = routes;
