var http = require('http');

function startServer(requestHandler) {
  http.createServer(requestHandler).listen(8080);
  console.log('server started');
}

exports.startServer = startServer;