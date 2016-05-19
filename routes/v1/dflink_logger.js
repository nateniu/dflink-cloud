
var express = require('express');
var router = express.Router();
var path = require('path');
var global = require('../../utils/global.js');
var logger = require('../../utils/logger');
var rootPath = path.join(global.DBROOT, 'public');

var fs = require('fs');

var splunk_path = rootPath + '/dflinkclientlog.txt';

router.post('/', function(req, res) {
    fs.appendFile(splunk_path, JSON.stringify(req.body) + '\r\n', 'utf-8', function (err) {
        if (err) {
            logger.error(err);
            res.status(500);
        } else {
            res.status(200);
        }
        res.end();
    });
});

module.exports = router;
