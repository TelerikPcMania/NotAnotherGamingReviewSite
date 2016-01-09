
//TODO: modify routes if needed
module.exports = function(app) {


    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../client/app/' + req.params.partialArea + '/' + req.params.partialName)
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
}
