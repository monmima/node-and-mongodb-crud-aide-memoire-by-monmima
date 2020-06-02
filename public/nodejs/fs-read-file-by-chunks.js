const fs = require("fs");

// préférable à readFile() pour lire un gros fichier

const readStream = fs.createReadStream("./example.txt", "utf8");

readStream.on("data", (chunk) => {
    console.log(chunk);
});
