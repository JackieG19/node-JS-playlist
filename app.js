
var fs = require('fs');

// asynchronous versions 

fs.mkdir('stuff', function(){
// creates a directory called stuff
   fs.readFile('readMe.txt', 'utf8', function(err, data){
    // read the readMe file
       fs.writeFile('./stuff/writeMe.txt', data);
       // makes a writeMe file inside the stuff directory
   }) ;
});







// fs.mkdirSync('stuff');
//creates a folder(directory) called stuff

// fs.rmdirSync('stuff');
// removes the folder(directory) called stuff

// fs.unlink('writeMe.txt'); 
// in terminal: node app = writeMe.txt is deleted

