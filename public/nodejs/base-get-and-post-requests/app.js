const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// app.use = to use middleware
app.use("/public", express.static(path.join(__dirname, "static")));
// parses the data for us and attaches it to the requested body
// extended to false = we're not dealing with any complicated objects
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.post("/", (req, res) => {
     console.log(req.body);
     // database work here

     // once the database work is done, you just send back a response to the user
     res.json({success: true});
});

app.listen(3000);
