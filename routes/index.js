var express = require('express');
const { isAuthenticated } = require('../lib/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    layout: 'layouts/main',
    title: "Homepage"
  });
});

router.get('/acara', function(req, res, next) {
  res.render('acara', {
    layout: 'layouts/main',
    title: 'Acara Sekolah'
  });
});

router.get('/anggota', function(req, res, next) {
  res.render('anggota', {
    layout: 'layouts/main',
    title: 'Anggota Osis',
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    layout: 'layouts/main',
    title: 'About OSIS'
  });
});

router.get('/album', function(req, res, next) {
  res.render('album', {
    layout: 'layouts/main',
    title: 'Kenangan OSIS'
  });
});


module.exports = router;
