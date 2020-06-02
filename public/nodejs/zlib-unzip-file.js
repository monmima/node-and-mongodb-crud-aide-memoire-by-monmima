const fs = require("fs");
const zlib = require("zlib"); // module pour la compression
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream("./example2.txt.gz");
const writeStream = fs.createWriteStream("uncompressed.txt");

// More simple way
readStream.pipe(gunzip).pipe(writeStream);
