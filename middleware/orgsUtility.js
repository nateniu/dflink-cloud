var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var global = require('../utils/global.js');
var logger = require('../utils/logger.js');

var orgRoot = path.join(global.DBROOT, 'public', 'orgconfig');
var templatePath = path.join(orgRoot, 'template.json');

// function to get org root path for use
function getOrgRoot() {
	return orgRoot;
}

// function to prepare the org root folder, and the org template file
function prepareOrgRoot(callback) {
	// create org root folder by calling mkdirp module
    mkdirp(orgRoot, function (err) {
        if (err) {
            logger.error('Failed to prepare org root, due to: ' + err);
		} else {
			// if template file does not existed, generate one with default content
            var templatePath = path.join(orgRoot, 'template.json');
            fs.exists(templatePath, function (exists) {
                if (exists == false) {
                    fs.writeFile(templatePath, '{\"configuration\":null,\"system_information\":null,\"deleted\":false}', function (err) {
                        if (err) {
                            logger.error('Failed to generate org template, due to: ' + err);
                            callback(false);
                        } else {
                            callback(true);
                        }
                    });
                } else {
                    callback(true);
                }
            });
        }
    });
}

// function to generate org file for new business, by making a copy of the template
function generateBusinessOrg(bizId, callback) {
	var orgPath = path.join(orgRoot, bizId + '.json');

	// read the template content
	fs.readFile(templatePath, 'utf-8', function (err, data) {
		if (err) {
			callback(err);
		} else {
			// write the content to org file
			fs.writeFile(orgPath, data, 'utf-8', function (err) {
				logger.info('generating new org for business ' + bizId);
				if (err) {
					callback(err);
				} else {
					logger.info('org ready');
					callback(null);
				}
			});
		}
	});
}

exports.getOrgRoot = getOrgRoot;
exports.prepareOrgRoot = prepareOrgRoot;
exports.generateBusinessOrg = generateBusinessOrg;
