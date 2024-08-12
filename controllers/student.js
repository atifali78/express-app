const { getAll } = require("./userController");

module.exports = {
    create: (req, res) => { // Corrected the arrow function syntax
        try {
            return res.send({
                response: "admin already exists", // Corrected the response syntax
            });
        } catch (error) {
            return res.status(500).send({
                error: error.message, // Corrected error handling
            });
        }
    },

    getAll: (req, res) => { // Corrected the arrow function syntax
        try {
            return res.send({
                response: "student
