var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    content: String,
    published: Date,
    review_id: Int,
    author_id: Int
});

var Comment = mongoose.model('review', commentSchema);

module.exports.seedInitialComments = function() {
    Comment.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find comment: ' + err);
            return;
        }

        if (collection.length === 0) {
            Comment.create({content: 'C# for Sociopaths', published: new Date('10/5/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'C# for Non-Sociopaths', published: new Date('10/12/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'Super Duper Expert C#', published: new Date('10/1/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'Visual Basic for Visual Basic Developers', published: new Date('7/12/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'Pedantic C++', published: new Date('1/1/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'JavaScript for People over 20', published: new Date('10/13/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'Maintainable Code for Cowards', published: new Date('3/1/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'A Survival Guide to Code Reviews', published: new Date('2/1/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'How to Job Hunt Without Alerting your Boss', published: new Date('10/7/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'How to Keep your Soul and go into Management', published: new Date('8/1/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'Telling Recruiters to Leave You Alone', published: new Date('11/1/2013'), review_id: '' , author_id: ''});
            Comment.create({content: "Writing Code that Doesn't Suck", published: new Date('10/13/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'Code Reviews for Jerks', published: new Date('10/1/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'How to Deal with Narcissistic Coworkers', published: new Date('2/15/2013'), review_id: '' , author_id: ''});
            Comment.create({content: 'Death March Coding for Fun and Profit', published: new Date('7/1/2013'), review_id: '' , author_id: ''});
        }
    });
};
