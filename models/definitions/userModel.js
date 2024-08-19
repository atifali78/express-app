const { createUserSchema } = require("../../validations/user");
const model = require("../index");
// const { create } = require("./users");

models.exports = {
  createUser: async (body) => {
    try {
      const user = await model.users.create({
        ...body,
      });
      return {
        response: user,
      };
    } catch (error) {
      console.error(error);
      return {
        error: error,
      };
    }
  },
};
