var passport = require('passport');
var logger = require('../utils/logger');
var BearerStrategy = require('passport-http-bearer').Strategy;
var dal = require('../db/dal');

var auth_strategies = ['bearer'];

passport.use(new BearerStrategy(
    function (token, done) {
        logger.info("executing token strategy");
        bearerAuth(token, done);
    }
));

var bearerAuth = function (token, done) {
    dal.queryByToken(token, function (error, rows) {
		logger.error(token);
        if (error) {
            logger.error("error while authenticating token " + error);
            done(null, null);
        }
        if (rows) {
            done(null, "d3:" + rows.BusinessId, { scope: 'read-write' });
        } else {
            logger.error("authentication failed for token:" + token);
            done(null, null);
        }
    });
};

exports.authenticate = function (server, regex) {
    server.all(regex,
        passport.authenticate(auth_strategies, { session: false }),
        function (req, res, next) {
        next();
    });
};

console.log("finish registering authenticaion middleware");