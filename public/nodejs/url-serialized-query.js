const url = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized query
console.log(myURL.search);
