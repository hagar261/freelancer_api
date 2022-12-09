const { addApplicant,getApplicant } = require("../controler/applicant.controler");

const ApplicantServer = require("express").Router();

ApplicantServer.post("/addApplicant",addApplicant)

ApplicantServer.get("/getApplicant",getApplicant)

module.exports=ApplicantServer;