//const { password } = require("../database/config.js");
const connection = require("../database/index.js");

const getAll = (callback) => {
  const query = "SELECT post.*, user.name FROM post INNER JOIN user ON post.user_iduser = user.iduser;";
  connection.query(query, (error, results) => {
    if (error) throw error;
    callback(results);
  })
}
 const addBlog = (idpost ,title, image, description, date,user_iduser, callback) => {
   const sql = `INSERT INTO post VALUES (${idpost},"${title}","${image}","${description}","${date}",${user_iduser}) `;
   return connection.query(sql, callback);
};


const getuser = (callback) => {
  const query = "SELECT * from user;";
  connection.query(query, (error, results) => {
    if (error) throw error;
    callback(results);
  })
}

const addUser = ( iduser,name,email,password,callback) => {
 //const sql = "INSERT INTO user (iduser,name,email,password) VALUES(?)";
 const sql = `INSERT INTO user VALUES (${iduser},"${name}","${email}","${password}") `;
  return connection.query(sql,(error, results)=>{
    callback(error, results);
  });
};
const postUser = (email, password, cb) => {
  const sql = "SELECT * FROM `user` WHERE `email` = ? AND `password` = ?";
  return connection.query(sql, [email, password], (error, results) => {
    if (error) throw error;
    cb(null, results);
  });
};
//used to get all posts for a specific user using their user_iduser parameter in a SQL query
const getAllpost = (user_iduser, callback) => {
  const query = `SELECT * FROM post INNER JOIN user ON post.user_iduser = user.iduser WHERE user_iduser = ${user_iduser};`;
  connection.query(query, (error, results) => {
    if (error) throw error;
    callback(results);
  })
}
module.exports = { getAll, addBlog, getuser,addUser ,postUser,getAllpost};
