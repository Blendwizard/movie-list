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
  },

  addMovie(movie, callback) {
    console.log("Made it to our addMovie function");
    var query = 'INSERT INTO movies_table VALUES (null, ?, ?)';
    var queryArgs = [movie, 'n'];

    db.connection.query(query, queryArgs, (err, success) => {
      if (err) {
        callback(err);
      } else {
        callback(null, success);
      }
    });

  },

  toggleWatchStatus(movie_id, watchStatus, callback) {
    // console.log(`Toggled watch status at DB: movieID = ${movie_id}`);
    var toggleTo;

    if (watchStatus === 'y') {
      toggleTo = 'n';
    } else {
      toggleTo = 'y';
    }

    var query = 'UPDATE movies_table SET watched = ? WHERE id = ?';
    var queryArgs = [toggleTo, movie_id];
    db.connection.query(query, queryArgs, (err, success) => {
      if (err) {
        callback(err);
      } else {
        callback(null, success);
      }
    });

  }

};
