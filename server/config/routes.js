'use strict';

var auth = require('./auth'),
    controllers = require('../controllers'),
    multer = require('multer');

var storage = multer.diskStorage({
    destination: './server/public/images',
    filename: function(req, file, cb) {
        console.log(file);
        var ext = file.originalname.split('.')
            .pop();
        cb(null, file.fieldname + '-' + Date.now() + '.' + ext);
    }
});

var upload = multer({
    storage: storage
});


module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/games', controllers.games.getAllGames);
    app.get('/api/games/:id', controllers.games.getGamesById);
    app.put('/api/games/:id', auth.isAuthenticated, controllers.games.addRating);
    app.post('/api/games/:id/add-review', auth.isAuthenticated, controllers.games.addReview);
    app.delete('/api/games/:id/delete-review/:review_id', auth.isInRole('admin'), controllers.games.deleteReview);
    app.post('/api/games/add-game', auth.isAuthenticated, upload.single('image-file'), controllers.games.post);

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../client/app/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.get('/403', function(req, res) {
        res.render('403');
    });

    app.get('/about', function(req, res){
       res.render('about');
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
}
