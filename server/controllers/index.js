var usersController = require('../controllers/UsersController');
var reviewsController = require('../controllers/ReviewsController');
var gamesController = require('../controllers/GamesController');
var commentsController = require('../controllers/CommentsController');

module.exports = {
    users: usersController,
    reviews: reviewsController,
    games: gamesController,
    comments: commentsController
}