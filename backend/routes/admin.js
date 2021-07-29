var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anasayfa' });
});

router.get('/campains', function(req, res, next) {
  res.render('campains', { title: 'Kampanyalar' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'İletisim' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Hakkında' });
});
module.exports = router;