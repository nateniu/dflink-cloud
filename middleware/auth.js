var PORTAL_URL, config, log, request, url;
request = require('request');
config = require('../config/env.json')[process.env.NODE_ENV];
url = require("url");
log = require('../config/logger').mainLogger;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

PORTAL_URL = config.portal.url;

module.exports = function(cookie) {
  var options;
  options = {
    url: PORTAL_URL + "/bp2/session.jsp",
    headers: {
      cookie: "JSESSIONID=" + req.cookies.JSESSIONID
    },
    followRedirect: false
  };
  return request(options, function(error, response, body) {
    var url_parts;
    if (error) {
      return res.status(500).end();
    }
    if (response.statusCode === 200) {
      req.business = JSON.parse(body).business;
      return next();
    } else if (response.statusCode === 301 || response.statusCode === 302) {
      url_parts = url.parse(response.headers.location);
      log.error({
        err: {
          response: response.statusCode,
          cookie: req.cookies,
          sessionID: req.cookies.JSESSIONID,
          url_parts: url_parts
        }
      }, 'session 300');
      res.redirect("/bp2/secureRedirect.jsp?redirectUrl=/portal/settings/scheduling");
    } else {
      return res.status(500).end();
    }
  });
};
