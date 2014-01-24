var http = require('http');
var router = require('router');
var url = require("url");
var routes = router();

routes.get("/hello", function(request, response) {
  name = url.parse(request.url, true).query.name;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("hello "+name+"!");
});

routes.get("/goodbye", function(request, response) {
  name = url.parse(request.url, true).query.name;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("goodbye "+name+"!");
});

http.createServer(routes).listen(8080);
console.log("server started");