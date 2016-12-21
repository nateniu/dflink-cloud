var TEST_BUSINESSES = [
   { BusinessId: 137000111, LicenseKey: '79C2DBC4-03CC-03D4-CB28-539D35A1EB29' }
   ,{ BusinessId: 137000722, LicenseKey: '8A54A1A2-CC3A-6918-42D0-23826C8054AF' }
   ,{ BusinessId: 137001011, LicenseKey: '777D4E48-616A-2351-CE58-139B75414D79' }
   ,{ BusinessId: 1990002192, LicenseKey: '34211F8E-E575-462D-70DD-5DE095FC2471' }
   ,{ BusinessId: 137000333, LicenseKey: '85609B6E-93E7-4716-55B7-1E63636F2092' } 
   ,{ BusinessId: 137000444, LicenseKey: 'D13E93EF-D71F-0335-782A-1977B513AC90' } 
   ,{ BusinessId: 109000812, LicenseKey: 'C849B3B5-4AB7-5FEB-4598-D3BE4340BD98' }
   ,{ BusinessId: 666, LicenseKey: '30CFB206-C689-203B-ED45-BFF41BEE0174' }
   ,{ BusinessId: 667, LicenseKey: '30CFB206-C689-203B-ED45-BFF41BEE0174' }
   ,{ BusinessId: 668, LicenseKey: '30CFB206-C689-203B-ED45-BFF41BEE0174' }
   ,{ BusinessId: 1, LicenseKey: '79C2DBC4-03CC-03D4-CB28-539D35A1EB29' }
   ,{ BusinessId: 137000759, LicenseKey: 'FA924FC5-300E-EBA1-47EC-0EB61E5B7E55' }
   ,{ BusinessId: 137000753, LicenseKey: '97F339FA-56F3-7AD7-3D32-CC1B013F249D' }
   ,{ BusinessId: 137000208, LicenseKey: '8FDF9CA7-C120-41BC-1F4A-4F06637C6A70' }
   ,{ BusinessId: 137000888, LicenseKey: '30CFB206-C689-203B-ED45-BFF41BEE0174' }
   ,{ BusinessId: 137001011, LicenseKey: '777D4E48-616A-2351-CE58-139B75414D79' }
];

exports.queryByToken = function (token, done) {
    process.nextTick(function () {
        for (var i = 0, len = TEST_BUSINESSES.length; i < len; i++) {
            var record = TEST_BUSINESSES[i];
            if (record.LicenseKey == token) {
                return done(null, record);
            }
        }
        return done(null, null);
    });
}

var TEST_ACCOUNTS = {
  "vet_test1@demandforce.com:ondemand1!":"79C2DBC4-03CC-03D4-CB28-539D35A1EB29\nVET\n11\n137000111\nDemoBusiness1\ndoPost Method invoked.......",
  "spa_test@demandforce.com:ondemand1!": "79C2DBC4-03CC-03D4-CB28-539D35A1EB29\nSPA\n3\n137000111\nDemoBusiness1\ndoPost Method invoked.......",  
  "qb_auto_03@demandforce.com:dfsTest1!": "8A54A1A2-CC3A-6918-42D0-23826C8054AF\nAuto\n1\n137000722\nDemoBusiness2\ndoPost Method invoked.......",
  "vortx_test1@demandforce.com:Success1!": "777D4E48-616A-2351-CE58-139B75414D79\nDental\n2\n137001011\nDemoBusiness3\ndoPost Method invoked.......",
  "test2192:CpsR0cks": "34211F8E-E575-462D-70DD-5DE095FC2471\nDental\n2\n1990002192\nDemoBusiness4\ndoPost Method invoked.......",
  "test_2602@demandforce.com:ondemand1!": "85609B6E-93E7-4716-55B7-1E63636F2092\nDental\n2\n13700333\nDemoBusiness5\ndoPost Method invoked......." ,
  "auto_test1@demandforce.com:ondemand1!": "D13E93EF-D71F-0335-782A-1977B513AC90\nAuto\n1\n137000444\nDemoBusiness6\ndoPost Method invoked.......",
  "test_2603@demandforce.com:ondemand1!": "30CFB206-C689-203B-ED45-BFF41BEE0174\nSPA\n1\n667\nDemoBusiness8\ndoPost Method invoked.......",
  "leo_test_ortho@demandforce.com:ondemand1!": "30CFB206-C689-203B-ED45-BFF41BEE0174\nSPA\n1\n668\nDemoBusiness9\ndoPost Method invoked.......",
  "bruce_test@demandforce.com:ondemand1!": "79C2DBC4-03CC-03D4-CB28-539D35A1EB29\nAuto\n1\n1\nDemoBusiness10\ndoPost Method invoked.......",
  "dfs_qb_auto_03@demandforce.com:dfsTest1!": "FA924FC5-300E-EBA1-47EC-0EB61E5B7E55\nMENTAL_HEALTH\n1\n137000759\nDemoBusiness11\ndoPost Method invoked.......",
  "dfs_qb_hs_08@demandforce.com:dfsTest1!": "97F339FA-56F3-7AD7-3D32-CC1B013F249D\nMENTAL_HEALTH\n1\n137000753\nDemoBusiness12\ndoPost Method invoked.......",
  "plumbing_test1@demandforce.com:ondemand1!": "8FDF9CA7-C120-41BC-1F4A-4F06637C6A70\nVET\n11\n137000208\nJustin &amp; Bella Testing... 1234567890 <@_@>\ndoPost Method invoked.......",
  "test_2603@demandforce.com:ondemand1!": "30CFB206-C689-203B-ED45-BFF41BEE0174\nORTHO\n1\n137000888\nDemoBusiness14\ndoPost Method invoked......."
};

TEST_ACCOUNTS1 = {
  "spa_test@demandforce.com:ondemand1!": "{\"id\":\"137000111\",\"name\":\"Test\",\"industry\":\"3\",\"nodegroup\":\"d36.demandforced3.com\",\"license\":\"79C2DBC4-03CC-03D4-CB28-539D35A1EB29\",\"industryName\":\"SPA\"}",  
  "auto@demandforce.com:ondemand1!": "{\"id\":\"137000722\",\"name\":\"Test Seaside\",\"industry\":\"3\",\"nodegroup\":\"d36.demandforced3.com\",\"license\":\"8A54A1A2-CC3A-6918-42D0-23826C8054AF\",\"industryName\":\"Auto\"}",
  "vortx_test1@demandforce.com:ondemand1!": "{\"id\":\"137001011\",\"name\":\"Test Seaside\",\"industry\":\"2\",\"nodegroup\":\"d36.demandforced3.com\",\"license\":\"777D4E48-616A-2351-CE58-139B75414D79\",\"industryName\":\"Dental\"}",
  "test_2602@demandforce.com:ondemand1!": "{\"id\":\"137000333\",\"name\":\"Test Seaside\",\"industry\":\"2\",\"nodegroup\":\"d36.demandforced3.com\",\"license\":\"85609B6E-93E7-4716-55B7-1E63636F2092\",\"industryName\":\"Dental\"}",
  "auto_test1@demandforce.com:ondemand1!": "{\"id\":\"137000444\",\"name\":\"Test Seaside\",\"industry\":\"1\",\"nodegroup\":\"d337.demandforced3.com\",\"license\":\"D13E93EF-D71F-0335-782A-1977B513AC90\",\"industryName\":\"Auto\"}",
  "vet_test1@demandforce.com:ondemand1!": "{\"id\":\"137000753\",\"name\":\"Test Seaside\",\"industry\":\"11\",\"nodegroup\":\"d337.demandforced3.com\",\"license\":\"97F339FA-56F3-7AD7-3D32-CC1B013F249D\",\"industryName\":\"Vet\"}"
};

TEST_ACCOUNTS2 = {
  "79C2DBC4-03CC-03D4-CB28-539D35A1EB29": "{\"id\":\"137000111\",\"name\":\"Test\",\"industry\":\"3\",\"nodegroup\":\"d36.demandforced3.com\",\"license\":\"79C2DBC4-03CC-03D4-CB28-539D35A1EB29\",\"industryName\":\"SPA\"}",  
  "8A54A1A2-CC3A-6918-42D0-23826C8054AF": "{\"id\":\"137000722\",\"name\":\"Test Seaside\",\"industry\":\"1\",\"nodegroup\":\"d36.demandforced3.com\",\"license\":\"8A54A1A2-CC3A-6918-42D0-23826C8054AF\",\"industryName\":\"Auto\"}",
  "777D4E48-616A-2351-CE58-139B75414D79": "{\"id\":\"137001011\",\"name\":\"Test Seaside\",\"industry\":\"2\",\"nodegroup\":\"d36.demandforced3.com\",\"license\":\"777D4E48-616A-2351-CE58-139B75414D79\",\"industryName\":\"Dental\"}",
  "85609B6E-93E7-4716-55B7-1E63636F2092": "{\"id\":\"137000333\",\"name\":\"Test Seaside\",\"industry\":\"2\",\"nodegroup\":\"d36.demandforced3.com\",\"license\":\"85609B6E-93E7-4716-55B7-1E63636F2092\",\"industryName\":\"Dental\"}",
  "D13E93EF-D71F-0335-782A-1977B513AC90": "{\"id\":\"137000444\",\"name\":\"Test Seaside\",\"industry\":\"1\",\"nodegroup\":\"d337.demandforced3.com\",\"license\":\"D13E93EF-D71F-0335-782A-1977B513AC90\",\"industryName\":\"Auto\"}",
  "97F339FA-56F3-7AD7-3D32-CC1B013F249D": "{\"id\":\"137000753\",\"name\":\"Test Seaside\",\"industry\":\"11\",\"nodegroup\":\"d337.demandforced3.com\",\"license\":\"97F339FA-56F3-7AD7-3D32-CC1B013F249D\",\"industryName\":\"Vet\"}"
};

exports.queryLiscenceByCredential = function (credentials, flag) {
    if(flag == 0){
      return TEST_ACCOUNTS[credentials.username + ":" + credentials.password];
    }
    if(flag == 1) {
      return TEST_ACCOUNTS1[credentials.username + ":" + credentials.password];
    }
    if (flag == 2) {
      return TEST_ACCOUNTS2[credentials.license];
    }
}
