const {connect}=require("mongoose");

module.exports=()=>{
    connect(process.env.CONNECTION_STRING)
    .then((result)=>console.log("database connected"))
    .catch((error)=>console.log(error))
};