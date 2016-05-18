var express = require('express');
var router = express.Router();
var orgsRoutes = require("./orgs");
var admin = require('./admin');
var pearl = require('./dflink_logger');

router.get('/', function(req, res) {
    res.send("Hello World!");
});

router.use('/orgs', orgsRoutes);
router.use('/admin', admin);
router.use('/pearl', pearl);

module.exports = router;
