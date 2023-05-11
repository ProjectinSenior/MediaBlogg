//const { password } = require("../database/config.js");
const connection = require("../database/index.js");

const getAll = (callback) => {
  const q = "select * from post;";
  connection.query(q, (error, results) => {
    if (error) throw error;
    callback(results);
  });
};
// const addBlog = (idpost ,tittle, image, description, date,users_iduser, callback) => {
//   const sql = `INSERT INTO post VALUES (${idpost},"${tittle}","${image}","${description}","${date}",${users_iduser}) `;
//   return connection.query(sql, callback);
// };
const addBlog = (idpost, title, image, description, date, users_iduser, callback) => {
  const sql = 'INSERT INTO post (idpost, title, image, description, date, users_iduser) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [idpost, title, image, description, date, users_iduser];
  return connection.query(sql, values, callback);
};



const addUser = ( values,callback) => {
 //const sql = "INSERT INTO user (iduser,name,email,password) VALUES(?)";
 const sql =' INSERT INTO `user` SET ?';
  return connection.query(sql, values,(error, results)=>{
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

module.exports = { getAll, addBlog,addUser ,postUser};
