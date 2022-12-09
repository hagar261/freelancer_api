const { StatusCodes } = require("http-status-codes");
const Blog = require("../model/blog.model");
const jwt = require("jsonwebtoken")

const getAllBlogs=async (req,res)=>{
    const blogs= await Blog.find({}).populate("createdBy","name");
    res.status(StatusCodes.OK).json({blogs})

}

const getMyBlogs=async (req,res)=>{
    const token = req.headers.authorization.split(" ")[1];
    const decoded = await jwt.verify(token,"shhhh");

    const blogs= await Blog.find({createdBy:decoded._id}).populate("createdBy","name");
    res.status(StatusCodes.OK).json({blogs})

}


const addBlog = async (req,res)=>{
    const {title,content}=req.body;
    const token = req.headers.authorization.split(" ")[1];
    const decoded = await jwt.verify(token,"shhhh");
    try {
        const newBlog = await new Blog({title,content,createdBy:decoded._id});
        newBlog.save();
        res.status(StatusCodes.OK).json({newBlog})
    } catch (error) {
        console.log(error);
    }
}

module.exports={getAllBlogs,addBlog,getMyBlogs};