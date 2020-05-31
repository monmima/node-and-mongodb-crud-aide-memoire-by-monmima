const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const port = process.env.port || 3000;

const urlString = mongodb.MongoClient.connect('mongodb://localhost:27017');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

// post
app.post('/post-feedback', (req, res) => {
    urlString.then((db) => {
        delete req.body._id; // for safety reasons
        db.collection('feedbacks').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

// view EJS template
app.get('/view-ejs', (req, res) => {
    urlString.then((db) => {
        db.collection('feedbacks').find({}).toArray().then((feedbacks) => {
            res.render("views/template");
        });
    });
});

/**
 * EJS
 * concatenate the current working directory
 * and a folder called views
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// view all ejs
app.get('/template', (req, res) => {
    urlString.then((db) => {
        db.collection('feedbacks').find({}).toArray().then((feedbacks) => {
            res.render("template", { feedbacks : feedbacks });

            console.log(feedbacks);
        });
    });
});

// view all
app.get('/view-all', (req, res) => {
    urlString.then((db) => {
        db.collection('feedbacks').find({}).toArray().then((feedbacks) => {
            res.status(200).json(feedbacks);
        });
    });
});

// view limit 2
app.get('/view-limit-2', (req, res) => {
    urlString.then((db) => {
        db.collection('feedbacks').find({}).limit(2).toArray().then((feedbacks) => {
            res.status(200).json(feedbacks);
        });
    });
});

// rename Ariel
app.get('/rename-name-field', (req, res) => {
    urlString.then((db) => {
        db.collection('feedbacks').update({name: "Ariel"}, {$rename: {name: "firstName"}});
    });
    res.send('Done!');
});

// increment number ariel (first instance of name "Ariel" if many in database)
app.get('/increment-ariel', (req, res) => {
    urlString.then((db) => {
        db.collection('feedbacks').update({name: "Ariel"}, {$inc: {number: 2}});
    });
    res.send('Done!');
});

// increment number ariel (first instance of name "Ariel" if many in database)
app.get('/rename-field-value', (req, res) => {
    urlString.then((db) => {
        db.collection('feedbacks').update({name: "Ariel"}, {$set: {name: "Juliet"}});
    });
    res.send('Done!');
});

// delete the whole collection
app.get("/delete", (req, res) => {

    urlString.then((db) => {
        db.collection('feedbacks').remove();
    });

    res.send('Done!');
});


// string is exactly "test" in "comment" field
app.get('/view-string-exactly-test', (req, res) => {
    urlString.then((db) => {
        db.collection('feedbacks').find({comment: "test"}).toArray().then((feedbacks) => {
            res.status(200).json(feedbacks);
        });
    });
});

// string contains for "test" in "name" or "comment" field
app.get('/view-string-contains-test', (req, res) => {
    urlString.then((db) => {

        db.collection('feedbacks').createIndex({comment: "text", name: "text" });

        db.collection('feedbacks').find( {$text:{$search: "test"}}).toArray().then((feedbacks) => {

            res.status(200).json(feedbacks);

        });

    });
});

// view values greater than 5
app.get('/view-greater-than-5', (req, res) => {
    urlString.then((db) => {
        // db.collection('feedbacks').find({number: {$gt: 5}}).toArray().then((feedbacks) => { // >
        // db.collection('feedbacks').find({number: {$gte: 5}}).toArray().then((feedbacks) => { // >=
        // db.collection('feedbacks').find({number: {$lt: 5}}).toArray().then((feedbacks) => { // <
        // db.collection('feedbacks').find({number: {$lte: 5}}).toArray().then((feedbacks) => { // <=

        db.collection('feedbacks').find({number: {$gt: 5}}).toArray().then((feedbacks) => {
            res.status(200).json(feedbacks);
        });
    });
});

// insert()
app.get('/insert-one', (req, res) => {
    urlString.then((db) => {
    // console.log("test");

        db.collection('feedbacks').insertMany([
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
    });

    res.send('Done!');
});

// insertMany()
app.get('/insert-many', (req, res) => {
    urlString.then((db) => {
    // console.log("test");

        db.collection('feedbacks').insertMany([
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

    });
    res.send('Done!');
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
