// notes app for Node.js Developer course on Udemy
// see repo -> git@github.com:JJacksonCode/node-repo.git
//import React

const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file written by Node.js, Sir.')
fs.appendFileSync('notes.txt', 'this is a tracking id .98989898 767676')
