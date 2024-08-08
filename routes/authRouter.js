var routes = require("express").routes();
const { login, logout } = require("../controllers/authController");
routes.get("/login", logout);
module.exports = routes;
