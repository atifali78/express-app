const user = [];

module.exports = {
  //create request create
  create: (req, res) => {
    try {
      const newuser = { ...req.body };
      user.push(req.body);
      return res.send({
        response: response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  //get resquest create
  getAll: (req, res) => {
    try {
      return res.send({
        response: "create all user",
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
