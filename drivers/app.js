var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var consolidate = require('consolidate');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Routes definition
var index = require('./routes/index');
app.use('/', index);
app.use('/driverapp', index);

module.exports = app;