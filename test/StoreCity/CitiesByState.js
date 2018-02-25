var path = require('path');
let methodName = path.basename(__filename, '.js');
let responseArray = require('../../lib/responseProperties/index.js')

var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var requestObj = require('../requestObject/index.js');

var secret = require('../../config');
var Geographic = require('../../lib/Geographic.js').geographic;

var geographic = new Geographic(secret.config.supermarketApiCode)

let testName = `${methodName} > ${responseArray[methodName].parent}`
describe(testName, function() {

  it('Promise resolves with an array', function() {
      return assert.eventually.isArray(
        geographic.CitiesByState(requestObj[methodName]),
        "Promise did NOT resolve with an array");
  });

});
