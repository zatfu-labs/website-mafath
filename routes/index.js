var express = require('express');
const { loadData } = require("../modules/database")
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
  const users = loadData();
  res.render('anggota', {
    layout: 'layouts/main',
    title: 'Anggota Osis',
    users
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    layout: 'layouts/main',
    title: 'About OSIS'
  });
});

module.exports = router;
