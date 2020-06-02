const path = require("path");
const fs = require("fs");

// Rename file

fs.rename(
    path.join(__dirname, "./", "example.txt"),
    path.join(__dirname, "./", "new_example.txt"), (err) => {
    if (err) {
        throw err;
    } else {
        console.log("File renamed...");
    }
});
