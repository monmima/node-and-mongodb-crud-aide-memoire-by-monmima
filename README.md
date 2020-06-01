# node-and-mongodb-barebone-example

This is a simple yet complete example of a CRUD app using Node.js and MongoDB.

Doing this exercice helped me wrap my head around how to have Node.js, MongoDB and EJS interact with one another. It is also meant as a template and an aide-mémoire for myself.

The other reason why I created this is I couldn't find a similar tool for learning. The information I was able to gather was either fragmented or too complex (trying to teach EJS, MongoDB, Node.js, Mongoose all at the same time, for instance). As far as I know, no one else but (Programming Mentor)[http://programmingmentor.com/post/save-form-nodejs-mongodb/] has done something similar, but his material is now outdated.

## EJS: used on exactly one page of the site/app

There is exactly **one page** of the site/app that uses EJS.

If you don't want to learn EJS from the get-go or if you don't want to be overwhelmed as a newcomer to MongoDB and Node.js, just don't take into account this part of the code. Maybe you'll feel ready for it later.

Once you feel comfortable with Node.js and MongoDB, then you'll be ready for EJS. EJS is a templating tool that enables you to insert data from your database into .ejs files, which are then rendered into HTML.

## The GET method

Please keep in mind that using the GET method all over the place the way I do is just for the sake of convenience (I'm talking about the list of links doing multiple different things on the main page of the site/app). I would not recommend it in something else than a exercise. Normally, you would use PUT, DELETE, etc.

I might change this in the future.

## The starting point for this project

The starting point for this exercise was (Programming Mentor's tutorial)[http://programmingmentor.com/post/save-form-nodejs-mongodb/]. The final result is now quite different. And given the important security issue and the outdated MongoDB 2.0, the code needed a major overhaul which makes it unrecognizable.
