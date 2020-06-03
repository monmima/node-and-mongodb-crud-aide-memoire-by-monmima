# MongoDB

I have to give credit where credit is due. Most of the content below is from the notes I took while watching (Brad Traversy's)[https://www.youtube.com/watch?v=-56x56UppqQ] MongoDB tutorial on YouTube. Thanks for making your tutorial!

By the way, Brad Traversy has also created a MongoDB cheatsheet, which he (made available on Github Gist)[https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6]. His cheat sheet actually seems more complete than what you have below!

### Installation

sudo apt-get install mongodb
sudo apt-get update
sudo serivce mongodb start

Type "mongo" in the console to start a MongoDB server!!!!!!

### Hotkeys

CTRL + L = clear console

### Commands

show dbs // display all databases
use newdb // creates new database and switch to it if it already exists | doesn't show if empty
db // gives the name of current database
show collections // return name of collections

### Create collection

db.createCollection("cars")

### Show collections

show collections

### Insert document in database

***

### Find()

db.student.find({name: "Rachel})

db.posts.find() // displays the values in the collection
db.posts.find().pretty() // plus lisible
db.posts.find({ category: "News" }) // finds where "category" = "news"
db.posts.find({ category: "News" }).pretty() // plus lisible
db.posts.find().sort({ title: 1 }).pretty() // sorts by "title" field in alphabetical order because of the 1 (reverse order is -1)

### FindOne()

db.posts.findOne({category: "News"})

### Drop Database

db.dropDatabase() // deletes database

### Count

db.posts.find({category: "News"}).count()

### forEach

db.posts.find().forEach(function(doc) {print("Blog Post: " + doc.title)})

### Update()

usually you want to do this with the ID
upsert = if not found, will create it

***

Exemple de code

db.posts.update({ title: "Post One" },
    {
        title: "Post One",
        body: "New post 2 body",
        date: Date()
    },
    {
        upsert: true
    }
)

***

***

Exemple de code

Ajoute des éléments

db.car.update({
    name: "ford"
},
{ $set:
    {
        transmission: "automatic"
    }
},
{ $upsert: true })

***

### Set()

to just replace one or two fields but keep what is already there, you need to use the set operator, it won't replace everything

db.posts.update({ title: "Post One" },
    {
        $set: {
            body: "Body of Post 2",
            category: "Technology"
        }
    }
)

### Delete/remove

// you ususally do that with the object ID

db.posts.remove({title: "Post Two"})
db.posts.remove() // removes all of the documents from the collection

### Add subdocument

db.posts.update({title: "Post One"},
    {
        $set: {
            comments: [
                {
                    user: "Mary Williams",
                    body: "Comment One",
                    data: Date()
                },
                {
                    user: "Harry Smith",
                    body: "Comment Two",
                    data: Date()
                }
            ]
        }
    }
)

### eleMatch Operator / Find all the posts with the comment "Mary Williams"

db.posts.find({
    comments: {
        $elemMatch: {
            user: "Mary Williams"
        }
    }
}).pretty();

### Document vs collection

#### Document

{
	"_id" : ObjectId("5ea87c8c3b1122d502c43d3e"),
	"title" : "Post Two",
	"views" : 10
}

#### Collection

{
	"_id" : ObjectId("5ea7541d333389e2c592c7e2"),
	"title" : "Post One",
	"body" : "Body of Post 2",
}
{
	"_id" : ObjectId("5ea7550e333389e2c592c7e4"),
	"title" : "Post Three",
	"body" : "Body of post 3",
}
{
	"_id" : ObjectId("5ea87c8c3b1122d502c43d3e"),
	"title" : "Post Two",
	"views" : 10
}

### In

// students enrolled in history

db.student.find({classes: {$in: ["history"]}})

### Sort

db.student.find({classes: {$in: ["history"]}}).sort({units: 1}).pretty() // ascending
db.student.find({classes: {$in: ["history"]}}).sort({units: -1}).pretty() // descending
