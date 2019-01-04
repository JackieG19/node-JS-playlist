var events = require('events');

// element.on('click', function(){});

var myEmitter = new event.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});	

myEmitter.emit('someEvent', 'the event was emitted');
	