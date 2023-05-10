const express = require("express");
const router = express.Router();
const  blog= require("./blogControler.js");

router.get("/all", blog.getpost);
module.exports=router