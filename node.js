var counter = function(arr){
    return 'There are ' + arr.length + 'elements in this array';
};
	
module.exports = counter;
	

var stuff = require('./stuff');
	
console.log(stuff.counter()['shaun','crystal','ryu']);
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5)); 
	


var adder = function(a,b){
    return 'the sum of the 2 numbers is ${a+b}';
};
	
var pi = 3.142;
	
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
