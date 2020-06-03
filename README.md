# node-and-mongodb-barebone-example

This is a simple yet complete example of a CRUD app using Node.js and MongoDB.

Doing this exercice helped me wrap my head around how to have Node.js and MongoDB interact with one another. It is also meant as a template and an ***aide-mémoire*** for myself.

The other reason why I created this is I couldn't find a similar tool for learning. The information I was able to gather was either fragmented or too complex (trying to teach EJS, MongoDB, Node.js, Mongoose all at the same time, for instance). [Programming Mentor](http://programmingmentor.com/post/save-form-nodejs-mongodb/) is one of the few who has done something similar, but his material is now outdated.

## EJS: You don't want to learn it for now? No problem!

There are a few pages of the site/app using EJS.

If you don't want to learn EJS from the get-go or if you don't want to be overwhelmed as a newcomer to MongoDB and Node.js, just don't take into account this part of the code. It is **NOT** used all over the place.

Once you feel comfortable with Node.js and MongoDB, then you'll be ready for EJS. EJS is a templating tool that enables you to insert data from your database into .ejs files, which are then rendered into HTML.

## The GET Method

Please keep in mind that using the GET method all over the place the way I do is just for the sake of convenience (I'm talking about the Create, Read, Update and Delete links on the main page of the site/app). I would not recommend it in something else than an exercise. Normally, you would use PUT, DELETE, etc.

I might improve this in the future.

## The Starting Point for this Project

The starting point for this exercise was [Programming Mentor's tutorial](http://programmingmentor.com/post/save-form-nodejs-mongodb/). The final result is now quite different. And given the important security issue and the outdated MongoDB 2.0, the code needed a major overhaul which makes it unrecognizable. Still, thank you, Programming Mentor! :-)
