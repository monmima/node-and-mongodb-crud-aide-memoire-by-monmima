// Génération de la liste de tous les fichiers dans un dossier (méthode asynchrone, donc meilleure)

const fs = require("fs");

fs.readdir("./", function(err, files) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Result", files);
    }
});
