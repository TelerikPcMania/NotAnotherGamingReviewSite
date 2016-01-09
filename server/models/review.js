var mongoose = require('mongoose');

var reviewsSchema = mongoose.Schema({
    title: String,
    description: String,
    featured: Boolean,
    published: Date,
    tags: [String],
    author_id: Int
});

var Review = mongoose.model('review', reviewsSchema);

module.exports.seedInitialReviews = function() {
    Review.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find review: ' + err);
            return;
        }

        if (collection.length === 0) {
            Review.create({title: 'C# for Sociopaths', featured: true, published: new Date('10/5/2013'), tags: ['C#']});
            Review.create({title: 'C# for Non-Sociopaths', featured: true, published: new Date('10/12/2013'), tags: ['C#']});
            Review.create({title: 'Super Duper Expert C#', featured: false, published: new Date('10/1/2013'), tags: ['C#']});
            Review.create({title: 'Visual Basic for Visual Basic Developers', featured: false, published: new Date('7/12/2013'), tags: ['VB']});
            Review.create({title: 'Pedantic C++', featured: true, published: new Date('1/1/2013'), tags: ['C++']});
            Review.create({title: 'JavaScript for People over 20', featured: true, published: new Date('10/13/2013'), tags: ['JS']});
            Review.create({title: 'Maintainable Code for Cowards', featured: true, published: new Date('3/1/2013'), tags: ['Coding']});
            Review.create({title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('2/1/2013'), tags: ['Coding']});
            Review.create({title: 'How to Job Hunt Without Alerting your Boss', featured: true, published: new Date('10/7/2013'), tags: ['Misc']});
            Review.create({title: 'How to Keep your Soul and go into Management', featured: false, published: new Date('8/1/2013'), tags: ['Management']});
            Review.create({title: 'Telling Recruiters to Leave You Alone', featured: false, published: new Date('11/1/2013'), tags: ['Misc']});
            Review.create({title: "Writing Code that Doesn't Suck", featured: true, published: new Date('10/13/2013'), tags: ['Coding']});
            Review.create({title: 'Code Reviews for Jerks', featured: false, published: new Date('10/1/2013'), tags: ['Coding']});
            Review.create({title: 'How to Deal with Narcissistic Coworkers', featured: true, published: new Date('2/15/2013'), tags: ['Misc']});
            Review.create({title: 'Death March Coding for Fun and Profit', featured: true, published: new Date('7/1/2013'), tags: ['Coding', 'Misc']});
        }
    });
};
