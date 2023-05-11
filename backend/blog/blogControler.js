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
        req.body.tittle,
        req.body.image,
        req.body.description,
        req.body.date,
        req.body.users_iduser,
        (err, result) => {
          if (err) {
            res.send(err);
          } else {
            res.json(result);
          }
        })
        };
   const postUser =(req, res)=> {
          Model.addUser(req.body, function(err, results) {
              if(err) res.status(409).send(err);
              else res.status(201).send(results)
          })
      }
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

module.exports={getpost,
                postBlog,
              postUser ,
            postValidUser }
    