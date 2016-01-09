var path = require('path');
var rootPath = path.normalize(__dirname + '/../../')

module.exports = {
    development: {
        rootPath: rootPath,
        db: '', //db connection string to be added
        port: process.env.PORT || 2020
    },
    production: {
        rootPath: rootPath,
        db: '', //db connection string to be added
        port: process.env.PORT || 2020
    }
}