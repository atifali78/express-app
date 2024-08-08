const Joi = require("joi");

module.exports = {
  createUserSchema: async (req, res, next) => {
    const createUser = Joi.object({
      username: Joi.string().alphanum().min(3).max(34).required(),
      password: Joi.string().alphanum().min(6).max(34).required(),
    });

    try {
      await createUser.validateAsync(req.body);
      next();
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
