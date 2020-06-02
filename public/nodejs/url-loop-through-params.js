const url = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Loop through the params
myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
