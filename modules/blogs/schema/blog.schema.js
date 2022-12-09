const{Schema}= require("mongoose")

const blogSchema = new Schema({
    title:{type:String ,required :true},
    content:{type:String,required :true},
    createdBy:{type:Schema.Types.ObjectId,ref:'user'}
},{
    timestamps:true,
});

module.exports=blogSchema;