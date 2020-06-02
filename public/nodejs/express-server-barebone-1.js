// S'emploie à la place des modules http et fs de Node.js
// Does the job with much less code

const express = require("express");

// function returns an object with methods that can be used
const app = express();

app.get("/", (req, res) => {
   res.send("Hello world!");
});

app.listen(3000);
