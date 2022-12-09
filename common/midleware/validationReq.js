const { StatusCodes } = require("http-status-codes");

module.exports=(schema)=>{
    return(req,res,next)=>{
        const validationResult=schema.body.validate(req.body);
        if(validationResult.error){
            res.status(StatusCodes.BAD_REQUEST).json(validationResult.error.details[0].message)
        }else{
            next()
        }
    }
}