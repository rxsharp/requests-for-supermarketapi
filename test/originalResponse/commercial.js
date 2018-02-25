var path = require('path');
let methodName = 'COMMERCIAL_GetGroceries';

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var requestObj = require('../requestObject/originalResponse.js');

var secret = require('../../config');
var Supermarket = require('../../lib/Supermarket.js');

var supermarket = new Supermarket(secret.config.supermarketApiCode)

let testName = `originalResponse > COMMERCIAL > Example methodL: ${methodName}`

// To view full response
// before(function() {
//   console.log('*** Before test ***');
//   supermarket.getRequest(requestObj[methodName])
//     .then((response)=>{
//       console.log(response);
//     })
// });

describe(testName, function() {

  it('Resolves with original statusCode property', function() {
    return expect(supermarket.getRequest(requestObj[methodName]))
      .to.eventually.have.property("statusCode");
  });

});
