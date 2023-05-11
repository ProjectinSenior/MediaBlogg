const express = require("express");
const path = require('path');
const app = express();
// const connection=require('./database/index.js')
const router= require("./blog/blogRouter.js")
const port = 8000;
const cors =require ('cors');
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json())
app.use('/api',router)

app.get("/blog",(req,res)=>{
    res.send("welcom to my website")
  });  


app.listen(port, () => {
    console.log(`Express app listening on port http://localhost:${port}`);
  });
  