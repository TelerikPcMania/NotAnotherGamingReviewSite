var express = require('express');

var env = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/mongoose')(config);

//custom model routes to be added

app.listen(config.port);
console.log("Server running on port: " + config.port);
