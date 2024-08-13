const { getAll } = require("./userController");

module.exports = {
    create: (req, res) => { 
        try {
            return res.send({
                response: "admin already exists", 
            });
        }
        } catch (error) {
            return res.status(500).send({
                error: error.message, 
            });
        }
    },

    getAll: (req, res) => { 
        try {
            return res.send({
                response: "student"
            }
        )}};