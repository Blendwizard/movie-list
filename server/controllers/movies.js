// Bring in our models functions that actually handle database interactions
var models = require('../models');

// Our controllers will handle the incoming requests accordingly and call our correct model handlers.
module.exports = {

  get: function(req, res) {

    models.movies.getMovies((err, movies) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // Currently, we're just logging our returned movies to the console
        res.status(200).send(movies);
      }
    });
  },


  search: function(req, res) {

    var searchTerm = req.query.term;
    models.movies.searchMovies(searchTerm, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },

  post: function(req, res) {
    // console.log("MOVIE TITLE:::::", req.body.title);
    var movieToAdd = req.body.title;

    models.movies.addMovie(movieToAdd, (err, success) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(success);
      }
    });
  },

  patch: function(req, res) {
    // console.log("Made it to patch function");

    var watchStatus = req.body.watchedStatus;
    var movie_id = req.params.movie_id;


    models.movies.toggleWatchStatus(movie_id, watchStatus, (err, success) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(success);
      }
    });

  }



}


