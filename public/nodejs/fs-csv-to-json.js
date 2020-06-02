const path = require("path");
const fs = require("fs");

console.log("Here we go!");

// Read file

fs.readFile(path.join(__dirname, "/test", "source.txt"), "utf8", (err, data) => {
    // error
    if (err) {
        throw err;
    // no error
    } else {

  
        // loop
        for (let i = 0; i < data.length; i++) {
            const currentLine = data.split("\n")[i];
            const currentEn = currentLine.split("\t")[0];
            const currentFr = currentLine.split("\t")[1];

            // line has two languages separated by a tabulation
            if (currentEn === undefined || currentFr === undefined) {
                break;
            // else
            } else {
                // create the template
                const dataToAppend = `{<br>fr: ${currentFr},<br>en: ${currentEn}<br>},`;

                // append to file
                fs.appendFile('message.txt', dataToAppend, function (err) {
                    if (err) {
                        throw err;
                    }
                });
            }

        }
    }

    // task is done
    console.log('Saved!');
    
});
