// Génération de la liste de tous les fichiers dans un dossier (méthode synchrone, donc moins bonne)

const fs = require("fs");

const files = fs.readdirSync("./"); // dossier actuel

console.log(files);
