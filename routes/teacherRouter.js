var routes = require("express").Router();
const { create, getAll, del } = require("../controllers/teacher");
const { createUserSchema } = require("../validations/user");
routes.get("get-all-users", getAll);
routes.post("/create-user", createUserschema, create);
routes.delete("/delete", del);
module.exports = routes;