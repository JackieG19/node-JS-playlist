// read and write files using the node core module FS

var fs = require('fs');

var readMe = fs.readFileSync('readMe.text', 'utf8');
console.log(readMe);