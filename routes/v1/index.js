var express = require('express');
var router = express.Router();
var orgsRoutes = require("./orgs.js")

router.get('/', function(req, res) {
  res.send("Hello World!")
});

router.use('/orgs', orgsRoutes)

module.exports = router;
