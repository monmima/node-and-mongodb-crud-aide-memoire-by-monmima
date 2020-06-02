const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(`Adresse actuelle de la page (une fois chargée): ${req.url}`);
});

// on cherche d'abord la variable d'environnement; si on ne la trouve pas, on fait rouler le serveur sur le port 3000 
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));