var express = require('express');
var router = express.Router();

/* GET mock appointment list */
router.get('/confirmationlist', function (req, res) { 
   var nameindex = req.query.username.indexOf('@');
   var name = req.query.username.substring(0, nameindex);
   res.redirect('../../../confirmationlist/'.concat(name).concat('_appts.xml'));
});

//1.0 use 
router.post('/confirmationlist', function (req, res) { 
   var nameindex = req.query.username.indexOf('@');
   var name = req.query.username.substring(0, nameindex);
   res.redirect('../../../confirmationlist//'.concat(name).concat('_appts.xml'));
});

module.exports = router;