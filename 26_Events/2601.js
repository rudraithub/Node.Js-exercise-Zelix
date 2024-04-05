const EventEmitter = require('events');


const emitter = new EventEmitter();


emitter.on('customEvent', (data) => {
    console.log(data);  
});


emitter.emit('customEvent', 'Custom event occurred!');
