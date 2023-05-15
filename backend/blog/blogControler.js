const Model=require('./blogModel.js')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//get all ppost 
const getpost = (req, res) => {
    Model.getAll((err,result)=>{
     if (err){
        res.json(err)
     }
     else res.json(result)
    })
    };
  // post a new blog
    const postBlog = async (req, res) => {
      const newPost = {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        date: req.body.date,
        user_iduser: req.body.user_iduser
      };
    try{ await Model.createPost(newPost) 
      res.status(201).send(newPost)
    }
    catch {(err)=>{res.status(404).send(err)}}
  }


    //-------Post User-----//
    const createUser = (req, res) => {
      const user = {
        name: req.body.name,
        email: req.body.email,
        password:req.body.password
      }    
     Model.createUser(user, (err, result) => {
        if (err) {
          console.error(err);
          res.status(200).json({message: 'User created successfully' });
        } else {
          console.log(result);
          res.status(500).json({error: "Failed to create user" });
        }
      });
    };
    //------delete post -----//
    const deletePostC = (req, res) => {
      const idpost = req.params.id;
    
      Model.deletePost(idpost, (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Failed to delete post' });
        } else {
          res.json({ message: 'Post deleted successfully' });
        }
      });
    }; 
//---------update blog---------//

const UpdateBlog = async (req, res) => {
  try {
    const idpost = req.params.idpost;
    const { title, image, description, date } = req.body;

    const blog = {title, image, description, date };

    const result = await Model.updateBlog(idpost, blog);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update blog post' });
  }
};

  //-------login User-----//
  const loginUser = async(req,res)=>{
    try {
      const {email,password}=req.body
      const bool=await Model.getOneUser(email)
      if(bool.length ===0 || !bool){
        res.status(404).json({message:"User not found"})
        return;
      }
      else {
        const userRow=bool[0];
        const passwordMatch= await bcrypt.compare(password,userRow.password);
        if(passwordMatch){
          res.status(200).send("you are logged")
      }
      else res.status(400).send("wrong password or email ")
    }}
    catch(err){
    res.status(500).send(err)
    }
  };
  //--------sign up user -----//
  const signUpUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const userExists = await Model.getOneUser(email);
      if (userExists.length > 0) {
        return res.status(409).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 2);
      const newUser = {
        name,
        email,
        password: hashedPassword,
      };
      await Model.createUser(newUser);
      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      console.log("from catch", err);
      res.status(500).send(err);
    }
  };
  
  // used to get all the posts for a specific user using their user_iduser parameter
      const getOneUser = (req, res) => {
        const user_iduser = req.params.user_iduser;
        Model.getAllpost(user_iduser, (err,result)=>{
         if (err){
            res.json(err)
         }
         else res.json(result)
        })
      };
module.exports={getpost, postBlog , createUser,deletePostC,UpdateBlog ,loginUser,signUpUser, getOneUser }
    