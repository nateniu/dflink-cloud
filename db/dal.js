var records = [
    { BusinessId: 137000722, LicesenKey: '123' }
  , { BusinessId: 137000111, LicesenKey: 'abc' }
];

exports.queryByToken = function (token, done) {
    process.nextTick(function () {
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.LicesenKey === token) {
                return done(null, record);
            }
        }
        return done(null, null);
    });
}

var TEST_ACCOUNTS = {
  "test2190:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2469", "business_id": "1990002190", "industry": "2"},
  "test2191:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2470", "business_id": "1990002191", "industry": "2"},
  "test2192:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2471", "business_id": "1990002192", "industry": "2"},
};

exports.queryLiscenceByCredential = function (credentials, done) {
  if (TEST_ACCOUNTS[credentials.username + ":" + credentials.password]) {
    return done(null, TEST_ACCOUNTS[credentials.username + ":" + credentials.password]);
  } else {
    return done("Unauthorized");
  }
}
