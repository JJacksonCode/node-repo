// here is another example of http server with js that can run in node v8 engine.
// noice it listens on 1337 ;)
// first req in http
var http = require('http');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello whomever reads this. Thank you.');

}).listen(1337, '127.0.0.1');
