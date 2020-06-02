const fs = require("fs");

const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("example2.txt");

// More complicated way
// readStream.on("data", (chunk) => {
//     writeStream.write(chunk);
// });

// More simple way
readStream.pipe(writeStream);
