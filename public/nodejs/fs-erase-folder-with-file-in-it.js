const fs = require("fs");

fs.unlink("./tutorial/example.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted...")
        fs.rmdir("tutorial", (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Deleted folder...")
            }
        });
    }
});
