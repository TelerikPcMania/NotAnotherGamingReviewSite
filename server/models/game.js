require('../models/review');
var mongoose = require('mongoose'),
    reviews = mongoose.model('review').schema;

var gamesSchema = mongoose.Schema({
    title: {type: String, required: true },
    featured: Boolean,
    released: Date,
    platforms: [String],
    image: String,
    rating: {type: Number, min: 0, max: 120, required: true},
    reviews: [reviews],
    tags: [String]
});

var Game = mongoose.model('game', gamesSchema);

module.exports.seedInitialGames = function() {
    Game.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find games: ' + err);
            return;
        }

        if (collection.length === 0) {
            Game.create({title: 'Fallout 4', featured: true, released: new Date('11/10/2015'), tags: ['Post-apocalyptic', 'Open World', 'Exploration', 'RPG'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', image: 'http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/v2_article_large/public/2015/06/12/fallout-4-logo.JPG'});
            Game.create({title: 'Grand Theft Auto V', featured: true, released: new Date('4/14/2015'), tags: ['Open World', 'Action', 'Multiplayer', 'Third Person'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', image: 'http://media.rockstargames.com/rockstargames/img/global/news/upload/52308_fb.jpg'});
            Game.create({title: 'Mass Effect 2', featured: true, released: new Date('1/29/2010'), tags: ['RPG', 'Sci-fi', 'Story Rich', 'Third Person Shooter'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0',  image: 'http://cdn1-www.playstationlifestyle.net/assets/uploads/2010/02/feature-Mass-Effect-2.jpg'});
            Game.create({title: 'Just Cause 3', featured: true, released: new Date('12/1/2015'), tags: ['Open World', 'Action', 'SDestruction', 'Adventure'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', image: 'http://images.christianpost.com/full/89131/just-cause-3.png'});
            Game.create({title: 'Portal 2', featured: true, released: new Date('4/19/2011'), tags: ['Puzzle', 'Co-op', 'First-Person', 'Comedy', 'Sci-fi'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', image: 'http://www.digiseller.ru/preview/526420/p1_2017243_c0385d04.jpg'});
            Game.create({title: 'The Witcher 3: Wild Hunt', featured: true, released: new Date('5/18/2015'), tags: ['RPG', 'Open World', 'Story Rich', 'Atmospheric'],
                platforms: ['PC', 'PS4', 'Xbox One'], rating: '0', image: 'http://im.ziffdavisinternational.com/t/ign_in/review/t/the-witche/the-witcher-3-the-wild-hunt-review_hfpf.640.jpg'});
            console.log('Games added to database...');
        }

    });
};
