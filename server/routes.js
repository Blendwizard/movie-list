// Goes into controllers index to find our specific modules
var controller = require('./controllers');
// This creates a top-level express object for us to use with HTTP methods and specific URL endpoints
router = require('express').Router();

// GETs all movies from DB
router.get('/movies', controller.movies.get);
// GETS movies that match search results
router.get('/movies/search', controller.movies.search);

// Adds a movie into our database via POST
router.post('/movies', controller.movies.post);


// Export router
module.exports = router;