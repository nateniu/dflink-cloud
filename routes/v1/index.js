var express = require('express');
var router = express.Router();
var orgsRoutes = require("./orgs");
var admin = require('./admin');
var pearl = require('./dflink_logger');
var two_way = require('./2way');
var upload = require('./upload');

router.get('/', function(req, res) {
    res.redirect('../../index.html');
});

router.use('/business', orgsRoutes);
router.use('/admin', admin);
router.use('/pearl', pearl);
router.use('/v1.0/appointments', two_way);
router.use('/upload', upload);
module.exports = router;
