var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');

// for production, not to use .env file
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// To protect the app from some well-known web vulnerabilities by setting HTTP headers appropriately.
app.use(helmet());

// routing handled by the front-end framework, like Angular
app.use(function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
