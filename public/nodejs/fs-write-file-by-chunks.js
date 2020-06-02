const fs = require("fs");

// readStream object inherits from the event emitter class
// that means we can listen to events that occur
const readStream = fs.createReadStream("./example.txt", "utf8");

const writeStream = fs.createWriteStream("./example2.txt");

// avantage de "chunk" permet de commencer un travail sans attendre que la lecture d'un document soit terminée
readStream.on("data", (chunk) => {
    writeStream.write(chunk);
});
