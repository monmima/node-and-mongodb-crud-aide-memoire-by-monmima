const express = require("express");
const path = require("path");
const app = express();

// se sert d'un dossier apparemment appelé "public" pour le client, mais en réalité appelé "static" sur le serveur
app.use("/public", express.static(path.join(__dirname, "static"))); // app.use() means middleware is used
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});
app.listen(3000);
