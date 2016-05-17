var express = require('express');
var router = express.Router();
var businessRoutes = require("./business")

router.get('/', function(req, res) {
  res.send("Hello World!")
});

router.use('/business', businessRoutes)

module.exports = router;
