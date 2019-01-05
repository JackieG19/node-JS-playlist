// asynchronous versions using the node core module FS

var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log(data);
});

console.log('test');









// var readMe = fs.readFileSync('readMe.text', 'utf8');
// console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe);
