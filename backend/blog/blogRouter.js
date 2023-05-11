const express = require("express");
const router = express.Router();
const  blog= require("./blogControler.js");

//GET request to fetch all blogs.
router.get("/all", blog.getpost);
// POST request for creating a new blog .
router.post("/", blog.postBlog);
// POST request for creating a user.
router.post("/postuser",blog.postUser);
//GET request to fetch user.
router.post("/login",blog.postValidUser)
module.exports=router