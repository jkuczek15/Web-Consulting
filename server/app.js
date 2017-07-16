var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
require('./api/models/User');
require('./api/config/passport');

// Connect to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/database', {
    useMongoClient: true
}).then(() =>  console.log('MongoDB Connection Successful'))
  .catch((err) => console.error(err));

// Pull in our API routes
var chat = require('./api/routes/chat');
var login = require('./api/routes/login');
var profile = require('./api/routes/profile');
var register = require('./api/routes/register');
var app = express();

// Initialize the node logger
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, '/../', 'client', 'dist')));

// Initialize passport for secure API auth
app.use(passport.initialize());

// Add API routes to our app
app.use('/api/chat', chat);
app.use('/api/login', login);
app.use('/api/profile', profile);
app.use('/api/register', register);

// For all public routes, send our index.html file
// We will let the Angular Router handle it from there
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/../', 'client', 'dist', 'index.html'));
});

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // Send our error messages to browser console for debugging
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
  return;
});

module.exports = app;