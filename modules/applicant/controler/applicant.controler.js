const applicant = require("../model/applicant.model");
const jwt = require("jsonwebtoken")
const { StatusCodes } = require("http-status-codes");

const addApplicant = async (req,res)=>{
    const {blogID}=req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = await jwt.verify(token,"shhhh");
    try {
        const newapplicant = await new applicant({blogID,createdBy:decoded._id});
        newapplicant.save();
        res.status(StatusCodes.OK).json("done")
    } catch (error) {
        console.log(error);
    }
}

const getApplicant=async (req,res)=>{
    const {blogID}=req.body;
    const applicants= await applicant.find({blogID}).populate("createdBy","name");
    res.status(StatusCodes.OK).json({applicants})

}

module.exports={addApplicant,getApplicant};