/**
 * Created by hyd on 2016/5/17.
 */
var express = require('express');
var dal = require('../db/dal');
var router = express.Router();
var crypto  = require('crypto');

function handleError(res) {
    res.status(401).send({"error": "unauthorized"});
}

function handleSuccess(res,result) {
    res.status(200).send(result);
}

function handleLogin(credential,flag,res)
{
  console.log(credential.license);
  var result = dal.queryLiscenceByCredential(credential,flag);

  if(!result) {
    handleError(res);
  } else {
    handleSuccess(res,result);
  }
}

router.get('/', function(req, res, next) {

        if(!req.headers["userid"] && !req.headers["password"]) {
        } else {      
        console.log(req.headers["userid"]);
       handleLogin( {username: req.headers["userid"], password: req.headers["password"]},0,res);
}
});

router.post('/', function(req, res, next) {
            if (req.body.username && req.body.password) {
                  handleLogin({username: req.body.username, password: req.body.password},1,res)
            }
            else {
              if(req.body.license){
                   console.log(req.body.license)
                   handleLogin({license: req.body.license},2,res)
              }
            }
});


module.exports = router;

