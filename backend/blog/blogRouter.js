const express = require("express");
const router = express.Router();
const  blog= require("./blogControler.js");

//GET request to fetch all blogs.
router.get("/all", blog.getpost);
// POST request for creating a new blog .
router.post('/post',blog.postBlog);
// POST /users
router.post('/user', blog.createUser);
router.delete('/:id', blog.deletePostC);
router.put('/blog/:idpost', blog.UpdateBlog);

router.post('/login',blog.loginUser)
router.post('/signup',blog.signUpUser) 

router.get("/one/:user_iduser",blog.getOneUser)
//exp:http://localhost:8000/api/one/1
module.exports=router