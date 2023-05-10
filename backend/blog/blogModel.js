const connection = require("../database/index.js");

const getAll = (callback) => {
  const q = "select * from post;";
  connection.query(q, (error, results) => {
    if (error) throw error;
    callback(results);
  });
};
const addBlog = (idpost ,tittle, image, description, date,users_iduser, callback) => {
  const sql = `INSERT INTO post VALUES (${idpost},"${tittle}","${image}","${description}","${date}",${users_iduser}) `;
  return connection.query(sql, callback);
};
module.exports = { getAll, addBlog };
