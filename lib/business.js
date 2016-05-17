"use strict";

var fakeBusiness = {
    "id": "12345",
    "name": "Dog Grooming By Anthony",
    "status": "0"
}

function getBusinessById(id, callback){
  //simulated asynchronous business lookup
  callback(null, fakeBusiness)
};

module.exports = {
  getBusinessById: getBusinessById
};
