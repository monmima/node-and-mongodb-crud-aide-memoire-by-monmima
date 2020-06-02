const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listener
emitter.on("messageLogged", function() {
    console.log("Listener called");
}); // paramètre 1: nom de l'événement; paramètre 2: callback/listener/fonction appelée quand un événement est détecté

// Raise an event
emitter.emit("messageLogged");
