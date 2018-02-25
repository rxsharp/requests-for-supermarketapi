var request = require('request');

module.exports = (obj)=> {
  return new Promise(function(resolve, reject) {
    var apiUrl = `http://www.SupermarketAPI.com/api.asmx/AllUSStates`
    request({
        url: apiUrl
      }, (error, response, body) => {
        if (error) {
           reject('Unable to connect to server.');
        } else if (response.statusCode === 400) {
           reject('Unable to fetch data.');
        } else if (response.statusCode === 200) {
           let resolved = require('./getResponseType')(obj, response)
           resolve(resolved);
        }
      })
  })
}
