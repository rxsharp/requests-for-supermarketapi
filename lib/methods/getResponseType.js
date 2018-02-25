var parseToJson = require('../parser/index.js');

module.exports = (obj, response) => {
  if(obj.originalResponse == true){
    return response;
  }else {
    const arrayOfJson = parseToJson(response)
    let resolved = (arrayOfJson !== undefined)? arrayOfJson
      : [{NoResults: "No results found"}];
    return resolved
  };
}
