var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();
var User = require('../models/User.js');

/* GET USER */
router.post('/', function(req, res, next) {
  User.find(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;