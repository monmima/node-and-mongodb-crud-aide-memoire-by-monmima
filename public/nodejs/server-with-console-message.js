// Exemple de code (https://www.w3schools.com/nodejs/nodejs_get_started.asp)

const http = require("http");

// Create a server object
http.createServer((req, res) => {
    // Write response
    res.write("Hello word"); // output in the browser
    res.end();
}).listen(3000, () => console.log("Server running..."));