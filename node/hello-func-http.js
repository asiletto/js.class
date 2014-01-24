var http = require('http');

function handleRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello world!');
  response.end();
}

http.createServer(handleRequest).listen(8080);
