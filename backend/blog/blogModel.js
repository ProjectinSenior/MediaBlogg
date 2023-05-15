//const { password } = require("../database/config.js");
const connection = require("../database/index.js");



const getAll = (callback) => {
  const query = "SELECT post.*, user.name FROM post INNER JOIN user ON post.user_iduser = user.iduser;";
  connection.query(query, (error, results) => {
    if (error) throw error;
    callback(results);
  })
}
//---Post a new blog---//
// const createPost= (newPost, callback) => {
//   const query = 'INSERT INTO post (title, description, image, date, user_iduser) VALUES (?, ?, ?, ?, ?)';
//   const values = [newPost.title, newPost.description, newPost.image, newPost.date, newPost.user_iduser];

//   connection.query(query, values, (err, result) => {
//     if (err) throw err;
//     callback(result.idpost);
//   });
// }
const createPost = (newPost) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO post  SET ?'
    connection.query(query, newPost, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.idpost);
      }
    });
  });
};
    //-------Post User-----//
         const createUser = (user) => {
      return new Promise((resolve, reject) => {
        const sql = "INSERT INTO user (name,email,password) VALUES (?,?,?) ";
        const values =[user.name,user.email,user.password]
        connection.query(sql, values, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
  ///-------delete post -------/////
 

  const deletePost = (idpost, callback) => {
    const sql = 'DELETE FROM post WHERE idpost = ?';
    connection.query(sql, [idpost], (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  };
  //-------Update blog----///
 
  // const updateBlog = (idpost, blog) => {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'UPDATE post SET ? WHERE idpost = ?';
  //     connection.query(sql, [blog, idpost], (err, result) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve(result);
  //       }
  //     });
  //   });
  // };
  const updateBlog = (idpost, blog) => {
    return new Promise((resolve, reject) => {
      if (!blog) {
        reject(new Error('Blog is undefined'));
        return;
      }
  
      const sql = `UPDATE post SET ? WHERE idpost =${idpost}`;
      connection.query(sql, [blog, idpost], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  //-------Get one user------//
    const getOneUser = (email) => {
      return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM user WHERE email="${email}"`;
        connection.query(sql, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
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

module.exports = { getAll, createPost,deletePost,updateBlog,createUser,getOneUser, getAllpost};




