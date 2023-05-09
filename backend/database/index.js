const mysql =require("mysql2") 
const config = require("./config.js")
const connection = mysql.createConnection(config);

connection.connect((err) => {
    if (err) console.log("Error to connect to database", err);
    else console.log(" Database connected ");
  })



  module.exports = {connection }