const fs = require("fs");

fs.writeFile("example.txt", "Lorem ipsum", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File successfully created...");
        fs.readFile("example.txt", "utf8", (err, file) => {
            if (err) {
                console.log(`===> ${file}`);
            } else {
                console.log(file);
            }
        });
    }
});
