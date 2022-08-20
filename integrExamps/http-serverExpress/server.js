// this is code referenced from list site: https://ourcodeworld.com/articles/read/261/how-to-create-an-http-server-with-express-in-node-js

// require express and instantiate
var express = require('express');
var app = express();

// request calls root plays(localhost:3333/)
app.get('/', function (req, res) {
  res.send('<h1><b>My</b> simple express server for code example</h1>');
});

// on localhost:3333/welcome
app.get('welcome', function (req, res) {
  res.send('<h1>Welcome</h1><br><p>simple express http server @ localhost:3000</p>');
});

// start the server on port 3333
app.listen(3333, function() {
  console.log('Friendly unsecure server listening on 3333. :) go check it out.))');
});

// tested 20.8.2022 working pushed to git@github.com/JJacksonCode/node-repo/integrExamps/http-serverExpress/server.js
// have a nice day! JJackson 
