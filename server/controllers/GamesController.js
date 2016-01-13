var Game = require('mongoose').model('game');

module.exports = {
    getAllGames: function(req, res, next) {
        Game.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Games could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getGamesById: function(req, res, next) {
        Game.findOne({_id: req.params.id}).exec(function(err, game) {
            if (err) {
                console.log('Game could not be loaded: ' + err);
            }

            res.send(game);
        })
    },
    post: function(req, res) {
        var reqGame = req.body;
        console.log(req.file);

        if (!reqGame.image && req.file) {
            reqGame.image = req.file.path.substr('server/public'.length);
        }

        var game = new Game({
            title: reqGame.title,
            featured: true,
            released: reqGame.released,
            platforms: [],
            image: reqGame.image,
            rating: +0,
            review: [],
            tags: []
        });

        game.save(function(err) {
            if (err) {
                throw err;
            }

            res.status(201)
                .redirect('/games/' + game._id);
        });
    }
};