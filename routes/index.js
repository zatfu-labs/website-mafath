var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

router.get('/acara', function(req, res, next) {
  res.render('acara', { title: 'Acara Sekolah' });
});

router.get('/anggota', function(req, res, next) {
  res.render('anggota', { title: 'Anggota Osis' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About OSIS' });
});

module.exports = router;
