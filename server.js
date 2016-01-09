var express = require('express');

var env = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config/config')[env];

require('./server/config/mongoose')(config);

//custom model routes to be added

//TODO: The below code to be removed once routes.js logic is properly modified
app.set('view engine', 'jade');
app.set('views', config.rootPath + '/server/views');
app.get('*', function(req, res) {
    res.render('index');
});

app.listen(config.port);
console.log("Server running on port: " + config.port);
