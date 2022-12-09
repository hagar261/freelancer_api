const Joi= require("joi")
module.exports={
    signUpSchema:{
        body:Joi.object().required().keys({
            name:Joi.string().required(),
            email:Joi.string().email().required(),
            password:Joi.string().required(),
            age:Joi.number().required()
        })
    },
    signInSchema:{
        body:Joi.object().required().keys({
            email:Joi.string().email().required(),
            password:Joi.string().required(),
        })
    }
}