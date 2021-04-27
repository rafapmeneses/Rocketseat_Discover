const { EventEmitter } = require('events');

const event = new EventEmitter();

// event.on("saySomething", (message) => {
//     console.log("Eu ouvi você:", message);
// });

// event.emit("saySomething", "Rafa");

// event.emit("saySomething", "teste");

event.once("saySomething", (message) => {
    console.log("Eu ouvi você:", message);
});

event.emit("saySomething", "Rafa");

event.emit("saySomething", "teste");