const Model=require('./blogModel.js')

const getpost = (req, res) => {
    Model.getAll((err,result)=>{
     if (err){
        res.json(err)
     }
     else res.json(result)
    })
    };
    const postBlog = (req, res) => {
      Model.addBlog(
        req.body.idpost,
        req.body.title,
        req.body.image,
        req.body.description,
        req.body.date,
        req.body.user_iduser,
        (err, result) => {
          if (err) {
            res.status(500).json({ error: err.message });
          } else {
            res.status(201).json(result);
          }
        }
      );
    };
    const getuserr = (req, res) => {
      Model.getuser((err,result)=>{
       if (err){
          res.json(err)
       }
       else res.json(result)
      })
      };
   const postUser =(req, res)=> {
          Model.addUser(req.body.iduser,req.body.name,req.body.email,req.body.password, 
             (err, result) => {
            if (err) {
              res.status(500).json({ error: err.message });
            } else {
              res.status(201).json(result);
            }
          }
        );
      };
      const postValidUser = (req, res) => {
        Model.postUser(req.body.email, req.body.password, (err, data) => {
          if (err) {
            res.status(409).send(err);
          } else {
            if (data.length > 0) {
              res.json("success");
            } else {
              res.json("not success");
            }
          }
        });
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
module.exports={getpost,
                postBlog,
              postUser ,
            postValidUser,getuserr,getOneUser }
    