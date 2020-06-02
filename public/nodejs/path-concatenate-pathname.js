// Peut être utile comme le délimiteur n'est pas le même sous Windows et Linux.

const path = require("path");

// Concatenate path 
console.log(path.join(__dirname, "test", "hello.html"));
