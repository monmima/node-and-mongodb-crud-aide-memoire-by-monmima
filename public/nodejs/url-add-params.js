const url = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Add param
myURL.searchParams.append("abc", "123");

// Params object
console.log(myURL.searchParams);
