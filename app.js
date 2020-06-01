const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const port = process.env.port || 3000;
const url = "mongodb://localhost:27017/";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

/**
 * EJS
 * concatenate the current working directory
 * and a folder called views
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**
 * post method
 */
app.post('/post-feedback', (req, res) => {
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // for safety reasons
        delete req.body._id;

        dbo.collection('feedbacks').insertOne(req.body);
    });

    res.send('Data received:\n' + JSON.stringify(req.body));

});

/**
 * EJS template
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/template', (req, res) => {
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // name of the collection in the database
        dbo.collection("feedbacks").find().toArray((err, result) => {

            if (err) {
                throw err;
            }

            res.status(200).render("template", { feedbacks : result });
            db.close();
        });
    });
});

/**
 * view-all
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/view-all', (req, res) => {
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // name of the collection in the database
        dbo.collection("feedbacks").find().toArray((err, result) => {

            if (err) {
                throw err;
            }

            res.status(200).json(result);
            db.close();

        });
    });
});

/**
 * view-limit-2
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/view-limit-2', (req, res) => {
    
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // name of the collection in the database
        dbo.collection("feedbacks").find().limit(2).toArray((err, result) => {

            if (err) {
                throw err;
            }

            res.status(200).json(result);
            db.close();

        });
    });
});

/**
 * rename "name" to "firstName" for Ariel
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/rename-name-field', (req, res) => {

    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        dbo.collection('feedbacks').updateMany({name: "Ariel"}, {$rename: {name: "firstName"}});
    });

    res.send("Done!");
});

/**
 * increment-ariel
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/increment-ariel', (req, res) => {

    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        dbo.collection('feedbacks').updateMany({name: "Ariel"}, {$inc: {number: 2}});
    });

    res.send("Done!");
});

/**
 * /rename-ariel-to-juliet
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/rename-ariel-to-juliet', (req, res) => {

    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        dbo.collection('feedbacks').updateMany({name: "Ariel"}, {$set: {name: "Juliet"}});
    });

    res.send("Done!");
});

/**
 * increment-ariel
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/delete', (req, res) => {

    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        dbo.collection('feedbacks').deleteMany();
    });

    res.send("Done!");
});

/**
 * view-string-exactly-test
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/view-string-exactly-test', (req, res) => {
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // name of the collection in the database
        dbo.collection("feedbacks").find({comment: "test"}).toArray((err, result) => {

            if (err) {
                throw err;
            }

            res.status(200).json(result);
            db.close();

        });
    });
});

/**
 * string contains "test" in "name" or "comment" field
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/view-string-contains-test', (req, res) => {
    
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // name of the collection in the database
        dbo.collection("feedbacks").createIndex({comment: "text", name: "text" });

        dbo.collection('feedbacks').find( {$text:{$search: "test"}} ).toArray((err, result) => {
            if (err) {
                throw err;
            }

            res.status(200).json(result);
            db.close();
        });

    });
});

/**
 * view-greater-than-5
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/view-greater-than-5', (req, res) => {
    
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // name of the collection in the database
        dbo.collection("feedbacks").find({number: {$gt: 5}}).toArray((err, result) => {

            if (err) {
                throw err;
            }

            res.status(200).json(result);
            db.close();

        });
    });
});

/**
 * insert-one
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/insert-one', (req, res) => {
    
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // name of the collection in the database
        dbo.collection('feedbacks').insertMany([
            {
                name: "Bob",
                email: "bob@email.com",
                number: 7,
                comment: "test",
                user: {
                    added: "automatically",
                    date: Date()
                }
            }
        ]);

        res.send("Done!");
    });
});

/**
 * insert-many
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/insert-many', (req, res) => {
    
    mongodb.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) {
            throw err;
        }

        // name of the database
        const dbo = db.db("admin");

        // name of the collection in the database
        dbo.collection('feedbacks').insertMany([
            {
                name: "Jack",
                email: "jack@email.com",
                number: 4,
                comment: "test",
                user: {
                    added: "automatically",
                    date: Date()
                }
            },
            {
                name: "Ariel",
                email: "ariel@email.com",
                number: 2,
                comment: "test or not?",
                user: {
                    added: "automatically",
                    date: Date()
                }
            }
        ]);

        res.send("Done!");
    });
});

/**
 * handling 404 errors
 * source: https://expressjs.com/en/starter/faq.html
 */
app.use(function (req, res, next) {
    res.status(404).send("404 - Sorry can't find that!")
})

/**
 * Listening to a port
 * Steve Griffith
 * https://www.youtube.com/watch?v=iM_S4RczozU
 */
app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});
