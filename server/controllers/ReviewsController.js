var Review = require('mongoose').model('review');

module.exports = {
    getAllReviews: function(req, res, next) {
        Review.find({}).exec(function(err, collection) {
            if (err) {
                console.log('Reviews could not be loaded: ' + err);
            }

            res.send(collection);
        })
    },
    getReviewById: function(req, res, next) {
        Review.findOne({_id: req.params.id}).exec(function(err, review) {
            if (err) {
                console.log('Review could not be loaded: ' + err);
            }

            res.send(review);
        })
    }
};
