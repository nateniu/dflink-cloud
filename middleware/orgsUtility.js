var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

var orgRoot = path.join(process.env.PROGRAMDATA, 'pearl', 'public', 'orgconfig');
var templatePath = path.join(orgRoot, 'template.json');

function prepareOrgRoot(callback) {
    mkdirp(orgRoot, function (err) {
        if (err) {
            console.log('Failed to prepare org root, due to: ' + err);
        } else {
            var templatePath = path.join(orgRoot, 'template.json');
            fs.exists(templatePath, function (exists) {
                if (exists == false) {
                    fs.writeFile(templatePath, '{\"configuration\":null,\"system_information\":null,\"deleted\":false}', function (err) {
                        if (err) {
                            console.log('Failed to generate org template, due to: ' + err);
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

exports.prepareOrgRoot = prepareOrgRoot;

