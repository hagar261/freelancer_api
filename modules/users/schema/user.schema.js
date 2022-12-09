const {Schema}=require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    isDeleted:{type:Boolean,default:false},
    verifay:{type:String},
},{
    timestamps:true
});

userSchema.pre("save",async function(next){
    this.password=await bcrypt.hash(this.password,8);
    next()
})

module.exports=userSchema;
