// The path module provides utilities for working with file and directory path.

const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);
console.log(__filename);
