var express = require('express');
var router = express.Router();
var businessHandler = require("../../routeHandlers/businessHandler")

router.get('/:businessId', function(req, res, next) {
    businessHandler.getBusinessById(req, res, next);
});

router.get("/", function(req, res){
    res.send("Hello Business World!");
})

module.exports = router;
