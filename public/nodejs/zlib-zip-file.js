const fs = require("fs");
const zlib = require("zlib"); // module pour la compression
const gzip = zlib.createGzip();

const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("example2.txt.gz");

// More simple way
readStream.pipe(gzip).pipe(writeStream);

