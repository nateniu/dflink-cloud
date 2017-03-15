var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET mock appointment list */
router.get('/confirmationlist', function (req, res) { 
    console.log(req.query);
   var nameindex = req.query.username.indexOf('@');
   var name = req.query.username.substring(0, nameindex);
   res.redirect('../../../confirmationlist/'.concat(name).concat('_appts.xml'));
});

//1.0 use 
router.post('/confirmationlist', function (req, res) { 
   var nameindex = req.query.username.indexOf('@');
   var name = req.query.username.substring(0, nameindex);
   res.set('Content-Type', 'text/xml');
   var rootpath = path.dirname(require.main.filename || process.mainModule.filename);
   var xmlfile =  path.join(rootpath, '..','public', 'confirmationlist', name.concat('_appts.xml'));
   console.log(xmlfile);
   fs.readFile(xmlfile, function(err, data) {
    res.send(data);
   });
 });


module.exports = router;