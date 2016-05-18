/**
 * Created by hyd on 2016/5/17.
 */

var express = require('express');
var dal = require('../db/dal');
var router = express.Router();

function handleError(res) {
    res.status(401).send({"error": "unauthorized"});
}

function handleSuccess(res,result) {
    res.status(200).send(result);
}

function handleLogin(credential,res)
{
  var result = dal.queryLiscenceByCredential(credential);

  if(!result) {
    handleError(res);
  } else {
    handleSuccess(res,result);
  }
}

router.get('/', function(req, res, next) {
        var auth = req.headers["authorization"];

        if(!req.headers["authorization"]) {
            return handleError(res);
        }
        var pieces = auth.split(" ");

        if(pieces[0] != 'Basic') {
            return handleError(res);
        }
        auth = new Buffer(pieces[1], 'base64');

        if(!auth) {
            handleError(res);
        }
        var pieces = auth.toString().trim().split(":");

  handleLogin( {username: pieces[0], password: pieces[1]},res);
});

module.exports = router;

