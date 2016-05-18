var express = require('express');
var router = express.Router();
var orgsRoutes = require("./orgs");
var admin = require('./admin');

router.get('/', function(req, res) {
    res.send("Hello World!");
});

router.use('/orgs', orgsRoutes);
router.use('/admin', admin);

module.exports = router;
