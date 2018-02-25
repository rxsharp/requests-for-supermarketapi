var Supermarket = require('./Supermarket.js');
class Geographic extends Supermarket {
  constructor(ApiCode){
    super(ApiCode);
  }

  static AllUSStates(obj){
    let defaultObj = {originalResponse:false};
    let objVerified = (obj == undefined)? defaultObj : obj
    return require('./methods/AllUSStates.js')(objVerified);
  }

  CitiesByState(obj){
    return require('./methods/getRequest.js')(obj, this.ApiCode);
  }

}

module.exports.geographic = Geographic;
