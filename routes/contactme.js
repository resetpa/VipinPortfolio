var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contactme', { title: 'Vipin Portfolio Website' });
});

module.exports = router;
