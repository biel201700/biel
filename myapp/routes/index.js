var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rmr', { title: 'express' });
});

module.exports = router;
