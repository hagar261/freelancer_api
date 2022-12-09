const{model}= require("mongoose")
const blogSchema = require("../schema/blog.schema")

const Blog = model("blog",blogSchema);

module.exports=Blog;