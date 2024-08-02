var routes = require("express").Router();
routes.get("/get-Home", (req, res) => {
  return res.send("welcome to home");
});
module.exports = routes;
