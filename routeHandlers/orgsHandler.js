var fs = require('fs');
var async = require('async');
var path = require('path');
var orgUtil = require('../middleware/orgsUtility.js');
var logger = require('../utils/logger.js');

function getOrg(bizId, callback) {
	logger.info('Requesting org for business ' + bizId);
	
	var orgPath = path.join(orgUtil.getOrgRoot(), bizId + '.json');
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
				orgUtil.generateBusinessOrg(bizId, function (err) {
					if (err) {
						callback(err, false);
					} else {
						callback(null, true);
					}
				});
			} else {
				logger.info('org ready');
				callback(null, true);
			}
		}
	], function (err, orgReady) {
		if (orgReady == false) {
			logger.error(err);
			callback(undefined);
		} else {
			// Step 3: read the content of org file for return
			fs.readFile(orgPath, 'utf-8', function (fserr, data) {
				if (fserr) {
					logger.error(fserr);
					callback(undefined);
				} else {
					callback(data);
				}
			});
		}
	});
}

function saveOrg(bizId, content, callback) {
	logger.info('Saving org for business ' + bizId);
	
	var orgPath = path.join(orgUtil.getOrgRoot(), bizId + '.json');
	// write the new content to org file
	fs.writeFile(orgPath, content, 'utf-8', function (err) {
		if (err) {
			logger.error(err);
			callback(false);
		} else {
			callback(true);
		}
	});
}

exports.getOrg = getOrg;
exports.saveOrg = saveOrg;