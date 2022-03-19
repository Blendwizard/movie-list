// Within Models/movies.js, we want to use these functions to handle our SQL queries
// We need to bring in our DB connection as well
var db = require('../db');


module.exports = {
  getMovies: function(callback) {
    // Define our query: We want a to retrieve all movies from our movies_table
    var query = 'SELECT * FROM movies_table';

    // connection.query takes in 2 parameters currently:
    // A query, and an error-first async function that will give our callback access to the return data

    db.connection.query(query, (err, results) => {
      if (err) {
        // Propagate error if found
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  searchMovies(search, callback) {

    var query = `SELECT * FROM movies_table WHERE title = '${search}'`;
    db.connection.query(query, (err, searchResults) => {
      if (err) {
        callback(err);
      } else {
        callback(null, searchResults)
      }
    });
  }

};
