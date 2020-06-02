const path = require("path");
const fs = require("fs");

// Create and write to file

fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Content I want to write", (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File written to...");
    }
});
