var controllers = require('../controllers');
//TODO: modify routes if needed
module.exports = function(app) {

    app.get('/api/games', controllers.games.getAllGames);
    app.get('/api/games/:id', controllers.games.getGamesById);
    app.get('/login', controllers.users.getUserById);
    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../client/app/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
}
