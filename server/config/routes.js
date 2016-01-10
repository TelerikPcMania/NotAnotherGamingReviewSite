var auth = require('./auth'),
    controllers = require('../controllers');
//TODO: modify routes if needed
module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/games', controllers.games.getAllGames);
    app.get('/api/games/:id', controllers.games.getGamesById);

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../client/app/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
}
