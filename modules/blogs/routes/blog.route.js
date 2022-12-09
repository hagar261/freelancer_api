
const { getAllBlogs ,addBlog,getMyBlogs} = require("../controler/blog.controler");

const blogServer = require("express").Router();

blogServer.get("/getAllBlogs",getAllBlogs);

blogServer.get("/getMyBlogs",getMyBlogs);


blogServer.post("/addBlog",addBlog);


module.exports=blogServer;