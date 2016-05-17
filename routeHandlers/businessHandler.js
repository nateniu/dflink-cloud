var business = require("../lib/business")

function getBusinessId(req, res, next){
  business.getBusinessById(req.params["businessId"], function(err, business){
    if(err) {
      console.log(err.message)
      next(err)
    } else if(business==null) {
      next(new Error("Business not found"))
    } else {
      res.send(business)
    }
  });
}

module.exports = {
  getBusinessId: getBusinessId
}
