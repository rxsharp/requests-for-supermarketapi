var parser = require('xml2json');
responseProperty = require('../responseProperties/index.js')

module.exports = (response)=> {
  let apiMethod = response.request.uri.pathname.replace(/\/api.asmx\//, '');
  let parent = responseProperty[apiMethod].parent;
  let child = responseProperty[apiMethod].child;
  let json = JSON.parse(parser.toJson(response.body));

  return json[parent][child];
}
