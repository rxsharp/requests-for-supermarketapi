class Supermarket {
  constructor(ApiCode) {
    this.ApiCode = ApiCode;
  }

  getRequest(obj){
    return require('./methods/getRequest.js')(obj, this.ApiCode)
  }

}

module.exports = Supermarket;
