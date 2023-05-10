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
module.exports={getpost,
                postBlog }
    