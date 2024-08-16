const { } = require("./index")

modelodel.exports = {
    createUserser: async (body) => {
        
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
                error: error;
            };
        }
        
    },
        
};