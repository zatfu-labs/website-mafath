const express = require('express');
const router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  res.send({
      message: "Hayolo Ngapain >:D",
      statuscode: 200
  });
});

router.get('/add', function(req, res, next) {
    res.send({
        message: "Module blm di buat :)",
        statuscode: 200
    });
  });


module.exports = router;
