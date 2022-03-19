// Goes into controllers index to find our specific modules
var controller = require('./controllers');
// This creates a top-level express object for us to use with HTTP methods and specific URL endpoints
router = require('express').Router();

router.get('/movies', controller.movies.get);


// Export router
module.exports = router;