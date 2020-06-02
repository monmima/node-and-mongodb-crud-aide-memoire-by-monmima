// https://stackoverflow.com/questions/2496710/writing-files-in-node-js

const fs = require("fs");

fs.writeFileSync('./test-sync', 'Hey there!');