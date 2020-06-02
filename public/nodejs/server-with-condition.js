const http = require("http");

const server = http.createServer((req, res) => {
    // si la requête correspond à la racine
    if (req.url === "/") {
        // définit la réponse
        res.write("Hello world from nodejs");
        // renvoie la réponse
        res.end();
    } else {
        // définit la réponse
        res.write("using some other domain");
        // renvoie la réponse
        res.end();
    }
});

server.listen("3000");