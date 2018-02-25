var path = require('path');
let methodName = 'CitiesByState';

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var requestObj = require('../requestObject/originalResponse.js');

var secret = require('../../config');
var Geographic = require('../../lib/Geographic.js').geographic;

var geographic = new Geographic(secret.config.supermarketApiCode)

let testName = `originalResponse > Geographic > *Only method: ${methodName}`
let testNameAllUSStates = `originalResponse > Geographic > *static method: AllUSStates`

// To view full response
// before(function() {
//   console.log('*** Before test ***');
//   geographic.CitiesByState(requestObj[methodName])
//     .then((response)=>{
//       console.log(response);
//     })
// });

// AllUSStates example
// before(function() {
// Geographic.AllUSStates({originalResponse:true})
//   .then((response)=>{
//     console.log(response);
//   })
// });

describe(testName, function() {

  it('Resolves with original statusCode property', function() {
    return expect(geographic.CitiesByState(requestObj[methodName]))
      .to.eventually.have.property("statusCode");
  });

});

describe(testNameAllUSStates, function() {

  it('Resolves with original statusCode property', function() {
    return expect(Geographic.AllUSStates({
      originalResponse:true
    }))
      .to.eventually.have.property("statusCode");
  });

});
