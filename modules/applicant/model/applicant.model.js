const{model}= require("mongoose");
const applicantSchema = require("../schema/applicant.schema");

const applicant = model("applicant",applicantSchema);

module.exports=applicant;