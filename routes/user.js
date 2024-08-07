const Joi = require("joi");
module.exports = {
    createusershema: (req, res, next) => {
        const createuUer = Joi.object({
            username: Joi.string().alphanum().min(3).max(34).required(),
            password: Joi.string().alphanum().min(6).max(34).required(),
        });
        try {
            const validate = createuser.validateAsync(req.body);
        } catch (error)
            return res.send({
                error: error;
            });
    
}    
    }; 
};

