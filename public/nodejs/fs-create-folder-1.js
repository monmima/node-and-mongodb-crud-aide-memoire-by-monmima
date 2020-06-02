const path = require("path");
const fs = require("fs");

// Create folder

fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
    if (err) {
        throw err;
    } else {
        console.log("Folder created...");
    }
});
