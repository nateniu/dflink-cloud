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