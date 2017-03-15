var express = require('express');
var router = express.Router();

/* GET mock upload */
router.post('/1.0/xml.jsp', function (req, res) { 
   res.send("fake upload!");
});

module.exports = router;