var express = require('express');
var router = express.Router();
var orgsHandler = require('../../routeHandlers/orgsHandler.js');

router.get('/:scope::id', function(req, res) {
	orgsHandler.getOrg(req.params.id, function (org) {
		if (org == undefined) {
			res.sendStatus(500);
		} else {
			res.send(org);
		}
	});
});

router.put('/:scope::id', function(req, res){
	orgsHandler.saveOrg(req.params.id, JSON.stringify(req.body), function (succeeded) {
		if (succeeded == false) {
			res.sendStatus(500);
		} else {
			res.sendStatus(200);
		}
	});
})

module.exports = router;
