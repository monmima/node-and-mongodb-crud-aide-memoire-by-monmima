const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!!!!");
});

app.get("/", (req, res) => {
    res.send([1, 2, 3]);
});

// PORT | CRÉATION D'UNE VARIABLE POUR LE PORT: IDÉAL
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));
