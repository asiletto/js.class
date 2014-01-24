var http = require('http');
var router = require('router');
var routes = router();

routes.get("/hello/{name}", function(request, response) {
  name = request.params.name;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("hello "+name+"!");
});

routes.get("/goodbye/{name}", function(request, response) {
  name = request.params.name;
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("goodbye "+name+"!");
});

http.createServer(routes).listen(8080);
console.log("server started");