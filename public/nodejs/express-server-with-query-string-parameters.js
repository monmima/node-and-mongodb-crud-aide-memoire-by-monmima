// use query string parameters for optional parameters

const express = require("express");

// function returns an object with methods that can be used
const app = express();

// taper dans la barre d'adresse: "http://localhost:3000/example/tutorial=paramstutorial&sort=byage"
app.get("/example", (req, res) => {
    console.log(req.query);
    res.send(`Affichage dans le navigateur.`);
});

app.listen(3000);

***

+++

Résultat dans la console

{ tutorial: 'paramstutorial', sort: 'byage' }
