var request = require('request');

module.exports = (obj, ApiCode) => {
  return new Promise(function(resolve, reject) {
    var query = JSON.stringify(obj.query)
    var queryString = query.replace(/":"|":/g, "=").replace(/","|,"/g, '&').replace(/^{"|"}$|}$/g, "");
    var apiUrl = `http://www.supermarketapi.com/api.asmx/${obj.apiMethod}?APIKEY=${ApiCode}&${queryString}`
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
