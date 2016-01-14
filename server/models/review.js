var mongoose = require('mongoose');

var reviewsSchema = mongoose.Schema({
    gameTitle: String,
    text: String,
    featured: Boolean,
    published: Date,
    author_id: Number
});

var Review = mongoose.model('review', reviewsSchema);

module.exports.seedInitialReviews = function() {
    Review.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find review: ' + err);
            return;
        }

        if (collection.length === 0) {

        }
    });
};
