var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, config) {
    app.set('view engine', 'jade');
    app.set('views', config.rootPath + '/server/views');
    app.use(cookieParser());

    app.use(express.static(path.join(__dirname, '../public')));

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'random string',
        name: 'default cookie',
        proxy: true,
        resave: true,
        saveUninitialized: true
    }));
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/client',
            compile: function(str, path) {
                return stylus(str).set('filename', path);
            }
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/client'));
}