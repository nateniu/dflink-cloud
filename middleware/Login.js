/**
 * Created by hyd on 2016/5/17.
 */
if (! process.env.LOGIN_STRATEGY) {
    process.env.LOGIN_STRATEGY = "local";
}
var crypto   = require('crypto')

//Need to read the real data.
var TEST_ACCOUNTS = {
    "test2190:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2469", "business_id": "1990002190", "industry": "2"},
    "test2191:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2470", "business_id": "1990002191", "industry": "2"},
    "test2192:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2471", "business_id": "1990002192", "industry": "2"},
    "test2193:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2472", "business_id": "1990002193", "industry": "2"},
    "test2194:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2473", "business_id": "1990002194", "industry": "2"},
    "test2195:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2474", "business_id": "1990002195", "industry": "2"},
    "test2196:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2475", "business_id": "1990002196", "industry": "2"},
    "test2197:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2476", "business_id": "1990002197", "industry": "2"},
    "test2198:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2477", "business_id": "1990002198", "industry": "2"},
    "test2199:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2478", "business_id": "1990002199", "industry": "2"},
    "test2200:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2479", "business_id": "1990002200", "industry": "2"},
    "test2201:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2480", "business_id": "1990002201", "industry": "2"},
    "test2202:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2481", "business_id": "1990002202", "industry": "2"},
    "test2203:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2482", "business_id": "1990002203", "industry": "2"},
    "test2204:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2483", "business_id": "1990002204", "industry": "2"},
    "test2205:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2484", "business_id": "1990002205", "industry": "2"},
    "test2206:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2485", "business_id": "1990002206", "industry": "2"},
    "test2207:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2486", "business_id": "1990002207", "industry": "2"},
    "test2208:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2487", "business_id": "1990002208", "industry": "2"},
    "test2209:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2488", "business_id": "1990002209", "industry": "2"},
    "test2210:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2489", "business_id": "1990002210", "industry": "2"},
    "test2211:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2490", "business_id": "1990002211", "industry": "2"},
    "test2212:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2491", "business_id": "1990002212", "industry": "2"},
    "test2213:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2492", "business_id": "1990002213", "industry": "2"},
    "test2214:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2493", "business_id": "1990002214", "industry": "2"},
    "test2215:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2494", "business_id": "1990002215", "industry": "2"}
};

function handleError(res) {
    res.status(401).send({"error": "unauthorized"});
}

loginStrategy = {
    "local": function(credentials, done) {
        if (TEST_ACCOUNTS[credentials.username + ":" + credentials.password]) {
            return done(null, TEST_ACCOUNTS[credentials.username + ":" + credentials.password]);
        } else {
            return done("Unauthorized");
        }
    },
    //"credentials" has the form: {username: "mbieser@intuit.com", password: "ondemand"}
    "d3": function(credentials, done) {
        var hash = crypto.createHash("sha1");
        var raw = hash.update(credentials.password, "utf8");
        var xpassword = raw.digest("base64");
        var topic = "cps-d3_queries";
        var options = {
            action: "query",
            message: {username: credentials.username, xpassword: xpassword},
            org_id: "0"
        };
    }
};

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
        var auth = req.headers["authorization"];
       // res.send(auth);
        if(!req.headers["authorization"]) {
            return handleError(res);
        }
        var pieces = auth.split(" ");
        if(pieces[0] != 'Basic') {
            return handleError(res);
        }

        //auth = new Buffer(pieces[1], 'base64');
        auth = pieces[1];
        if(!auth) {
            handleError(res);
        }
        var pieces = auth.toString().trim().split(":");
        loginStrategy[process.env.LOGIN_STRATEGY]({username: pieces[0], password: pieces[1]}, function (error, result) {
            if(error) {
                handleError(res);
            } else {
                res.status(200).send(result);
            }
        })
    });

module.exports = router;

