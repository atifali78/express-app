const user = [];
  
module.exports = {
  //create request create
  create: (req, res) => {
    try {
      user.push(req.body);
      return res.send({
        response:user;
      });
    } catch (error) {
      return res.send({
        error: error,
      });
      
    }
  },
  //get resquest create
  getAll: (req, res) => {
    try {
       { username, password } = req.body;
      user.push({ username, password });
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
