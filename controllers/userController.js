const { required } = require("joi");

const { creatUser } = required("../model/userModel");
var user = [];

module.exports = {
  create:async (req, res) => {
    try {
      const user=await createUser { req.body; } 
      user.push({ username, password });

      return res.send({
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  getAll: (req, res) => {
    try {
      return res.send({
        response: user,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
