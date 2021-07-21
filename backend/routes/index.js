
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/campains', function(req, res, next) {
  res.render('campains');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
module.exports = router;