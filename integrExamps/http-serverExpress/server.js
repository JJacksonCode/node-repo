// this is code referenced from list site: https://ourcodeworld.com/articles/read/261/how-to-create-an-http-server-with-express-in-node-js
// don't forget to run npm install express if you get an error expess module not found
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
// adding some functionality
// 1 - add a route that answers all requests, sounds bad. :/
app.route('/article')
.get(function (req, res) {
  res.send('Get the article.');
})
.post(function (req, res) {
  res.send('Add an article');
})
.put(function (req, res) {
  res.send('Update the article');
});

// 2 - use a wildcard for a route
// answers to : theAnyman, thebatman, thespiderman
app.get('/the*man', function (req, res) {
  res.send('the*man');
});

// 3 - use regex in routes
// responds to : batboat, batlintu, batcave, batsauna -> batman is visiting Finland :))
app.get(/bat/, function (req, res) {
  res.send('/bat/');
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry, that route doesn't exist in this part of the multiverse. Try again, please. Have a nice day.");
});

// start the server on port 3333
app.listen(3333, function() {
  console.log('Friendly unsecure server listening on 3333. :) go check it out.))');
});

// tested 20.8.2022 working pushed to git@github.com/JJacksonCode/node-repo/integrExamps/http-serverExpress/server.js
// have a nice day! JJackson
