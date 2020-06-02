// Version de Mosh 1

// Le serveur ci-dessous a toutes les possibilités d'un "event emitter" (méthodes on/addListener, emit, etc.).

// Concernant "server.on": In real-world applications, you're not going to respond to the connection event to build an http service. This is very low level.

const http = require("http");

const server = http.createServer();
server.on("connection", (socket) => {
    console.log("New connection...");
}); // paramètre 1: nom de l'événement | paramètre 2: callback/listener
server.listen(3000);

console.log("Listening on port 3000...");
