var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost:27017/pcmania', //db connection string to be added
        port: process.env.PORT || 2020
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://pcmania:pcmania@ds039185.mongolab.com:39185/heroku_2j8dwp6n', //heroku mongolab connection string
        port: process.env.PORT || 2020
    }
}