// asynchronous writeFile

var fs = require('fs');

fs.readFileSync('readMe.txt', 'utf8', function(err, data){
    fs.readFile('writeMe.txt', data);
});




// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     console.log(data);
// });

// console.log('test');



// var readMe = fs.readFileSync('readMe.text', 'utf8');
// console.log(readMe);

// fs.writeFileSync('writeMe.txt', readMe);
