var server = require("./server-mod");
var greeter = require("./greeter-mod");

server.startServer(greeter.handleRequest);