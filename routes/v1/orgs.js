var express = require('express');
var router = express.Router();
var orgsHandler = require('../../routeHandlers/orgsHandler.js');

router.get('/:id', function(req, res) {
	orgsHandler.getOrg(req.params.id, function (org) {
		if (org == undefined) {
			res.status(500).send();
		} else {
			res.send(org);
		}
	});
});

router.put('/:id', function(req, res){
	orgsHandler.saveOrg(req.params.id, JSON.stringify(req.body), function (succeeded) {
		if (succeeded == false) {
			res.status(500).send();
		} else {
			res.send({});
		}
	});
})

module.exports = router;
