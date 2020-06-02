// Si cela ne marche pas, c'est sans doute que Node n'est pas à jour.

const os = require("url");

const myURL = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString);
