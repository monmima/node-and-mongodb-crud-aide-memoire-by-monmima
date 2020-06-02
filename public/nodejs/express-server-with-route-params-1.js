// use route parameters when you must have that data

const express = require("express");

// function returns an object with methods that can be used
const app = express();

// taper dans la barre d'adresse: "http://localhost:3000/example/pedro/99"
app.get("/example/:name/:age", (req, res) => {
    console.log(req.params);
    res.send(`${req.params.name} : ${req.params.age}`);
});

app.listen(3000);
