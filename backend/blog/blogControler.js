const Model=require('./blogModel.js')

const getpost = (req, res) => {
    Model.getAll((err,result)=>{
     if (err){
        res.json(err)
     }
     else res.json(result)
    })
    };
module.exports={getpost}