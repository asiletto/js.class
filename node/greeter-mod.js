var url = require('url');

function handleRequest(request, response){
  parsedUrl = url.parse(request.url, true);
  console.log('url: ',parsedUrl);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello '+parsedUrl.query.name+'!');
  response.end();
}

exports.handleRequest = handleRequest;