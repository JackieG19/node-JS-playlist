module.exports.counter = function(arr){
    return 'There are ' + arr.length + 'elements in this array';
};

module.exports.adder = function(a,b){
    return 'the sum of the 2 numbers is ${a+b}';
};

module.exports.pi = 3.142;

// another way to export is to reference theses modules to the functions
