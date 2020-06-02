const url = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Pathname
console.log(myURL.pathname);
