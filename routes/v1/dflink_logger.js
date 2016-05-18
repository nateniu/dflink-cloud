/**
 * Created by INTGDev on 5/18/2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var global = require('../../utils/global.js');
var rootPath = path.join(global.DBROOT, 'public');

var fs = require('fs');

var splunk_path = rootPath + '/posttosplunk.txt';

router.post('/', function(req, res){
  fs.appendFile(splunk_path, JSON.stringify(req.body) + '\r\n', 'utf-8' , function(err){
    logger.error(err);
  });
})

module.exports = router;
