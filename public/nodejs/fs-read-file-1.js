const path = require("path");
const fs = require("fs");

// Read file

fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});
