/**
 * Created by hyd on 2016/5/17.
 */
if (! process.env.LOGIN_STRATEGY) {
    process.env.LOGIN_STRATEGY = "local";
}

function handleError(res) {
    res.status(401).send({"error": "unauthorized"});
}

var express = require('express');
var dal = require('../db/dal');
var router = express.Router();

router.get('/', function(req, res, next) {
        var auth = req.headers["authorization"];
       // res.send(auth);
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
  dal.queryLiscenceByCredential({username: pieces[0], password: pieces[1]}, function (error, result) {
    if(error) {
      handleError(res);
    } else {
      res.status(200).send(result);
    }
  })
});

module.exports = router;

