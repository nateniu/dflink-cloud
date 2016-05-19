var TEST_BUSINESSES = [
    { BusinessId: 137000111, LicesenKey: '79C2DBC4-03CC-03D4-CB28-539D35A1EB29' }
  , { BusinessId: 137000722, LicesenKey: '8A54A1A2-CC3A-6918-42D0-23826C8054AF' }
  , { BusinessId: 137001011, LicesenKey: '777D4E48-616A-2351-CE58-139B75414D79' }
  , { BusinessId: 1990002192, LicenseKey: '34211F8E-E575-462D-70DD-5DE095FC2471' }
];

exports.queryByToken = function (token, done) {
    process.nextTick(function () {
        for (var i = 0, len = TEST_BUSINESSES.length; i < len; i++) {
            var record = TEST_BUSINESSES[i];
            if (record.LicesenKey === token) {
                return done(null, record);
            }
        }
        return done(null, null);
    });
}

var TEST_ACCOUNTS = {
  "spa_test@demandforce.com:ondemand1!": {license_key: "79C2DBC4-03CC-03D4-CB28-539D35A1EB29", "business_id": "137000111", "industry": "1"},  
  "qb_auto_03@demandforce.com:dfsTest1!": {license_key: "8A54A1A2-CC3A-6918-42D0-23826C8054AF", "business_id": "137000722", "industry": "1"},
  "Vortx_test1@demandforce.com:Success1!": { license_key: "777D4E48-616A-2351-CE58-139B75414D79", "business_id": "137001011", "industry": "24" },
  "test2192:CpsR0cks": {license_key: "34211F8E-E575-462D-70DD-5DE095FC2471", "business_id": "1990002192", "industry": "2"},
};

exports.queryLiscenceByCredential = function (credentials) {
    return TEST_ACCOUNTS[credentials.username + ":" + credentials.password];
}
