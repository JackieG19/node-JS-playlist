// normal function statment
function sayHi(){
    console.log("hi");
}
	
sayHi();

// function expression
var sayBye = function(){
    console.log('bye');  
};
	
sayBye();

// example code
function callFunction(fun){
    fun();
}
callFunction();

setTimeout(function(){
    console.log("3 seconds have passed");
}, 3000);
	
	
var time = 0;
	
setInterval(function(){
    time += 2;
	console.log(time + "seconds have passed");
}, 2000);
	
	
var time2 = 0;
	
var timer = setInterval(function(){
    time2 += 2;
	console.log(time2 + "seconds have passed");
	
	if (time2 > 5){
	    clearInterval(timer);
	}
	
}, 2000);
	
console.log(__dirname); 
	
console.log(__filename);
