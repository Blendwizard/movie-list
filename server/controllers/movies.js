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
        console.log(res.status(200).send(movies));
      }
    });
  },

  post: function() {
    console.log("Posting this from the POST controller for movies");
  }



}


