const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const getAllUsers = async(req,res)=>{
    try {
        const users = await User.find({isDeleted:false}).select("-password");
        res.status(StatusCodes.OK).json({users});
    } catch (error) {
        console.log(error)
    }
}

const signUp = async(req,res)=>{
    const {name,email,password,age}=req.body;
    try {
        const user =await User.findOne({email});
        if(!user){
            const newUser =await new User({name,email,password,age});
            newUser.save();
            res.status(StatusCodes.CREATED).json({message:"signup is sucsses"})
        }else{
            res.status(StatusCodes.BAD_REQUEST).json({message:"email is alerady exist"})
        }
    } catch (error) {
        console.log(error)
    }
}

const signIn = async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user){
            res.status(StatusCodes.BAD_REQUEST).json({message:"email is not found"})
        }else{
            const match=await bcrypt.compare(password,user.password);
            if(!match){
                res.status(StatusCodes.BAD_REQUEST).json({message:"password is wrong"})
            }else{
                const token = jwt.sign({_id:user._id},"shhhh",{expiresIn:'1h'});
                res.status(StatusCodes.OK).json({
                    token,
                    id:user._id,
                    name:user.name,
                })
                
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req,res)=>{
    const {_id}=req.params;
    try {
        await User.updateOne({_id},{isDeleted:true})
        res.status(StatusCodes.ACCEPTED).json({message:"deleted sucsses"});
    } catch (error) {
        console.log(error)
    }
}
module.exports={getAllUsers,signUp,deleteUser,signIn}