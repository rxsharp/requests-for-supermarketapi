var path = require('path');
let methodName = path.basename(__filename, '.js');
let responseArray = require('../../lib/responseProperties/index.js')

var chai = require('chai');
var assert = chai.assert;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var requestObj = require('../requestObject/index.js');

var secret = require('../../config');
var Supermarket = require('../../lib/Supermarket.js');

var supermarket = new Supermarket(secret.config.supermarketApiCode)

let testName = `${methodName} > ${responseArray[methodName].parent}`
describe(testName, function() {

  it('Promise resolves with an *object', function() {
      return assert.eventually.isObject(
        supermarket.getRequest(requestObj[methodName]),
        "Promise did NOT resolve as an *object");
  });

});
