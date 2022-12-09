const{Schema}= require("mongoose")

const applicantSchema = new Schema({
    blogID:{type:Schema.Types.ObjectId,ref:'blog'},
    createdBy:{type:Schema.Types.ObjectId,ref:'user'}
},{
    timestamps:true,
});

module.exports=applicantSchema;