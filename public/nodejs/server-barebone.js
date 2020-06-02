const http = require("http");

const server = http.createServer((req, res) => {
     res.write("Hello world from nodejs"); // says what the response is
     res.end(); // send the response
});

server.listen("3000");