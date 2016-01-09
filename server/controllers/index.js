var usersController = require('../controllers/UsersController');
var reviewsController = require('../controllers/ReviewsController');
var commentsController = require('../controllers/CommentsController');

module.exports = {
    users: usersController,
    reviews: reviewsController,
    comments: commentsController
}