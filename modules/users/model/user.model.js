const {model}=require("mongoose");
const userSchema = require("../schema/user.schema");
const User = model("user",userSchema);

module.exports=User;