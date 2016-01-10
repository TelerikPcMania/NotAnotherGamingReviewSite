var mongoose = require('mongoose'),
    reviews = require('../models/review');

var gamesSchema = mongoose.Schema({
    title: {type: String, required: true },
    featured: Boolean,
    released: Date,
    platforms: [String],
    img: { data: Buffer, contentType: String},
    rating: {type: Number, min: 0, max: 120, required: true},
    reviews: [reviews.schema],
    tags: [String]
});

var Game = mongoose.model('Game', gamesSchema);

module.exports.seedInitialCourses = function() {
    Games.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find games: ' + err);
            return;
        }

        if (collection.length === 0) {
            Game.create({title: 'Fallout 4', featured: true, released: new Date('10/11/2015'), tags: ['Post-apocalyptic', 'Open World', 'Exploration', 'RPG'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', reviews: {}});
            Game.create({title: 'Grand Theft Auto V', featured: true, released: new Date('14/4/2015'), tags: ['Open World', 'Action', 'Multiplayer', 'Third Person'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', reviews: {}});
            Game.create({title: 'Mass Effect 2', featured: true, released: new Date('29/1/2010'), tags: ['RPG', 'Sci-fi', 'Story Rich', 'Third Person Shooter'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', reviews: {}});
            Game.create({title: 'Just Cause 3', featured: true, released: new Date('1/12/2015'), tags: ['Open World', 'Action', 'SDestruction', 'Adventure'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', reviews: {}});
            Game.create({title: 'Portal 2', featured: true, released: new Date('19/4/2011'), tags: ['Puzzle', 'Co-op', 'First-Person', 'Comedy', 'Sci-fi'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', reviews: {}});
            Game.create({title: 'The Witcher 3: Wild Hunt', featured: true, released: new Date('18/5/2015'), tags: ['RPG', 'Open World', 'Story Rich', 'Atmospheric'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', reviews: {}});
        }
    });
};
