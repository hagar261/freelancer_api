
const express = require('express');
const userServer = require("./modules/users/routes/user.routes");
const blogServer = require("./modules/blogs/routes/blog.route");
const ApplicantServer = require("./modules/applicant/routes/applicant.routes");
const app = express();
require("dotenv").config();
const DBconnection = require("./configration/config");
const port = process.env.PORT;
DBconnection();
app.use(express.json())
app.use(userServer)
app.use(blogServer)
app.use(ApplicantServer)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
