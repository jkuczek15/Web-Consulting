var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connect to mongoDB
mongoose.connect('mongodb://localhost/mean-chat', {
    useMongoClient: true
}).then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

// Initialize our API route for Chat
var chat = require('./api/routes/chat');
var app = express();

// Initialize the node logger
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

// add routes to our app
app.use('/api/chat', chat);

// send the index file for any implicit routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  res.status(err.status || 500);
  res.render('error');
  return;
});

module.exports = app;