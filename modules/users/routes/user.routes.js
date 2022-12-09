const { getAllUsers ,signUp,deleteUser,signIn} = require("../controler/user.controler");
const { signUpSchema,signInSchema } = require("../joi/user.joi");
const userServer = require("express").Router();
const validationReq = require("../../../common/midleware/validationReq");




userServer.post("/signUp",validationReq(signUpSchema),signUp);
userServer.post("/signIn",validationReq(signInSchema),signIn);


userServer.get("/getAllUsers",getAllUsers);
userServer.delete("/deleteUser/:_id",deleteUser);




module.exports=userServer;