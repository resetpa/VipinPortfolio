var express = require('express');
var router = express.Router();


//Contact form coding below some error in below line bro.....
var contactPersonModel = require('../modules/contactschema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vipin Portfolio Website', msg: '' });
});


router.post('/', function(req, res, next) {
  var contactName = req.body.name;
  var contactEmail = req.body.email;
  var contactMobile = req.body.mobile;
  var contactMessage = req.body.message;

  var contactDetails = new contactPersonModel({
    Name: contactName,
    Email: contactEmail,
    PhoneNumber: contactMobile,
    Message: contactMessage
  });
  contactDetails.save((err, doc)=> {
    if(err) throw err;
    res.render('index', { title: 'Vipin Portfolio Website', msg: 'Message Submitted Successfully' });
  });
  
});

module.exports = router;
