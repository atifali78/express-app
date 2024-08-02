var routes = require("express").Router();
routes.get("/create", (req, res) => {
  return res.send("Create user Api");
});
routes.get("/update", (req, res) => {
  return res.send("update user Api");
});
routes.get("/delete", (req, res) => {
  return res.send("delete user Api");
});
routes.get("/put", (req, res) => {
  return res.send("Put user Api");
});
module.exports = routes;
