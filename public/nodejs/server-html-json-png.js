// Serveur fonctionnant pour HTML, JSON ou PNG

const http = require("http");

const fs = require("fs");

http.createServer((req, res) => {
    const readStream = fs.createReadStream("./static/index.html");
    // a header lets the client know what type of data I am expecting
    // ou application/json
    // ou image/png
    res.writeHead(200,{"content-type": "text/html"});
    readStream.pipe(res);
}).listen(3000);
