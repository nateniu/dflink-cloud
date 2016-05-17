var fs = require('fs');
var async = require('async');
var path = require('path');

var orgRoot = path.join(process.env.PROGRAMDATA, 'pearl', 'public', 'orgconfig');

function getOrg(bizId, callback) {
	console.log('Requesting org for business ' + bizId);
	
	var orgPath = path.join(orgRoot, bizId + '.json');
	async.waterfall([
		// Step 1: check if the org file is exists
		function (callback) {
			fs.exists(orgPath, function (exists) {
				callback(null, exists);
			});
		},
		// Step 2: generate an org file from template, if it isn't existed
		function (exists, callback) {
			if (exists == false) {
				var templatePath = path.join(orgRoot, 'template.json');
				// read the template content
				fs.readFile(templatePath, 'utf-8', function (err, data) {
					if (err) {
						throw err;
					} else {
						// write the content to org file
						fs.writeFile(orgPath, data, 'utf-8', function (err) {
							console.log('generating new org for business ' + bizId);
							if (err) {
								throw err;
							} else {
								console.log('org ready');
								callback(null);
							}
						});
					}
				});
			} else {
				console.log('org ready');
				callback(null);
			}
		},
		// Step 3: read the content of org file for return
		function (callback) {
			fs.readFile(orgPath, 'utf-8', function (err, data) {
				if (err) {
					callback(err, undefined);
				} else {
					callback(null, data);
				}
			});
		}
	], function (err, org) {
		if (err) {
			console.log(err);
			callback(undefined);
		} else {
			// actually return the org content
			callback(org);
		}
	});
}

function saveOrg(bizId, content, callback) {
	console.log('Saving org for business ' + bizId);
	
	var orgPath = path.join(orgRoot, bizId + '.json');
	// write the new content to org file
	fs.writeFile(orgPath, content, 'utf-8', function (err) {
		if (err) {
			console.log(err);
			callback(false);
		} else {
			callback(true);
		}
	});
}



exports.getOrg = getOrg;
exports.saveOrg = saveOrg;