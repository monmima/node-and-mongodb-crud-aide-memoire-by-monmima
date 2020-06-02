const url = require("url");

// hostname (root domain)

const myURL1 = new URL("http://mywebsite.com/hello.html?id=100&status=active");
const myURL2 = new URL("http://localhost:3000");

// console
console.log(myURL1.hostname);
console.log(myURL2.hostname);

// host (gets the port)

const myURL3 = new URL("http://mywebsite.com/hello.html?id=100&status=active");
const myURL4 = new URL("http://localhost:3000");

// console
console.log(myURL3.host);
console.log(myURL4.host);