var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Belajar Membuat REST API dengan Express.");
});

module.exports = router;