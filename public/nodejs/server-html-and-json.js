const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content); // "content" désigne la page HTML
        });
    } else if (req.url === "/api/users") {
        const users = [
            {name: "Bob Smith", age: 40},
            {name: "John Doe", age: 30}
        ]
        res.writeHead(200, {"Content-type": "application/json"});
        res.end(JSON.stringify(users));
    }
});

// on cherche d'abord la variable d'environnement; si on ne la trouve pas, on fait rouler le serveur sur le port 3000 
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
