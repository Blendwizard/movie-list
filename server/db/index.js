var mysql = require('mysql2');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movie_database'
});

connection.connect((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to database successfully');
  }
});

module.exports.connection = connection;