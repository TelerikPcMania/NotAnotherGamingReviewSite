var Game = require('mongoose').model('game');

module.exports = {
    getAllGames: function (req, res) {
        Game.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Games could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getGamesById: function (req, res) {
        Game.findOne({_id: req.params.id}).exec(function (err, game) {
            if (err) {
                console.log('Game could not be loaded: ' + err);
            }

            res.send(game);
        })
    },
    getGamesByTag: function(req, res){
        Game.find({tags: {$in: req.params.tags}}).exec(function(err, game){
            if(err){
                console.log('Tags could not be loaded: ' + err);
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
        var tagsList = reqGame.tags.split(',');
        var game = new Game({
            title: reqGame.title,
            featured: true,
            released: reqGame.release,
            platforms: reqGame.platforms,
            image: reqGame.image,
            rating: +0,
            review: [],
            tags: tagsList
        });

        game.save(function (err) {
            if (err) {
                throw err;
            }

            res.status(201)
                .redirect('/');
        });
    },

    put: function (req, res) {
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
    }
};