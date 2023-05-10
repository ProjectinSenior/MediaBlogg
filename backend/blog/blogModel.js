const connection= require ("../database/index.js")

const getAll = (callback) => {
    const q="select * from post;"
   connection.query(q, (error, results) => {
      if (error) throw error;
        callback(results);
});
};
module.exports = {getAll};