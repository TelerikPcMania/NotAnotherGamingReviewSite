var Game = require('mongoose').model('game'),
    Review = require('mongoose').model('review');

module.exports = {
    getAllGames: function (req, res, next) {
        Game.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Games could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getGamesById: function (req, res, next) {
        Game.findOne({_id: req.params.id}).exec(function (err, game) {
            if (err) {
                console.log('Game could not be loaded: ' + err);
            }

            res.send(game);
        })
    },
    post: function (req, res) {
        var reqGame = req.body;
        console.log(req.file);

        if (!reqGame.image && req.file) {
            reqGame.image = req.file.path.substr('server/public'.length);
        }

        var game = new Game({
            title: reqGame.title,
            featured: true,
            released: reqGame.release,
            platforms: reqGame.platforms,
            image: reqGame.image,
            rating: +0,
            tags: reqGame.tags
        });

        game.save(function (err) {
            if (err) {
                throw err;
            }

            res.status(201)
                .redirect('/' + game._id);
        });
    },

    addRating: function (req, res) {
        var rating = req.body;
        Game.findOne({_id: req.params.id}).exec(function (err, game) {
            if (err) {
                console.log('Game could not be loaded: ' + err);
            }

            game.rating += +rating.rating;
            game.save(function (err) {
                if (err) {
                    console.log('Game rating couldn/t be saved: ' + err);
                }

                res.status(200);
            })

        })
    },

    addReview: function (req, res) {
        var review = req.body;
        Game.findOne({_id: req.params.id}).exec(function (err, game) {
            if (err) {
                console.log('Game could not be loaded: ' + err);
            }

            var gameReview = new Review({
                gameTitle: game.title,
                text: review.text,
                featured: true,
                published: new Date(),
                author_id: req.params.user_id
            });

            game.reviews.push(gameReview);

            game.save(function (err) {
                if (err) {
                    console.log('Game review couldn/t be added: ' + err);
                }

                res.status(201);
            })

        })
    },

    deleteReview: function (req, res) {
        var review = req.body;
        Review.findOne({_id: req.params.reviewId}).exec(function (err, review) {
            if (err) {
                console.log('Review could not be loaded: ' + err);
            }


            game.reviews.remove(review)(function (err) {
                if (err) {
                    console.log('Review couldnt be deleted ' + err);
                }

                res.status(200);
            });

            game.save(function (err) {
                if (err) {
                    console.log('Game review couldn/t be added: ' + err);
                }

                res.status(200);
            })

        })
    }
};