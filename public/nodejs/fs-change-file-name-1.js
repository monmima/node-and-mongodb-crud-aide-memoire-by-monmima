const path = require("path");
const fs = require("fs");

// Rename file

fs.rename(
    path.join(__dirname, "/test", "hello.txt"),
    path.join(__dirname, "/test", "new_hello.txt"), (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File renamed...");
    }
});
