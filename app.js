var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var v1Routes = require('./routes/v1');
var auth = require('./middleware/auth');
var login = require('./middleware/login');

var app = express();
auth.authenticate(app, '/orgs*');
var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger(env));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//app.use('/v1', v1Routes);
app.use('/', v1Routes);
app.use('/login',login);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handler

// development error handler
// will print stacktrace
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  if (app.get('env') === 'development') {
    res.send(err.message)
  } else {
    res.end();
  }


});


module.exports = app;
