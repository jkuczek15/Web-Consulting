var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('API Index Page');
});

module.exports = router;