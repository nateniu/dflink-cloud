var express = require('express');
var router = express.Router();

/* GET health */
router.get('/health', function(req, res) {
  res.send('OK');
});

module.exports = router;
