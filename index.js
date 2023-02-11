//constants
PORT = 3000;
DATABASE_NAME = 'diary';
COLLECTION_NAME = 'notes';
CONNECTION = 'mongodb://127.0.0.1:27017/';


const express = require('express');
app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const routes = require('./routes/routes');
app.use('/api', routes.router);

//connecting with mongodb
const mongodb = require('mongodb');
const client = mongodb.MongoClient;
client.connect(CONNECTION + DATABASE_NAME, (err, db) => {
    if (err) console.log('error in connecting with database');
    console.log('Connected to the Database ', DATABASE_NAME);
})

/**
 * Following code is to insert dummy data for testing the working of the codes
 */
// let data = [
//     {
//         "dateCreated": "2021-12-28T20:44:21.000Z",
//         "important": false,
//         "title": "First note",
//         "body": "First note entered after switching back to Date type",
//     },
//     {
//         "dateCreated": "2019-01-14T20:44:21.000Z",
//         "important": true,
//         "title": "First Note",
//         "body": "This is the first note created",
//     },
//     {
//         "dateCreated": "2019-02-06T20:44:21.000Z",
//         "important": false,
//         "title": "Second Note",
//         "body": "This is the second note created",
//     },
//     {
//         "dateCreated": "2019-05-15T20:44:21.000Z",
//         "important": false,
//         "title": "Third Note",
//         "body": "This is the third note created",
//     },
//     {
//         "dateCreated": "2020-01-31T20:44:21.000Z",
//         "important": true,
//         "title": "Welcome Note",
//         "body": `Welcome, in this website you can add notes and prioritize them based on 
//     your needs. You can add a title, date created and how important the note is to 
//     you. You can also edit and delete old notes, and add new notes`,
//     },
//     {
//         "dateCreated": "2021-12-29T20:44:21.000Z",
//         "important": false,
//         "title": "Future Note",
//         "body": "This is the first note entered through mongoose",
//     }
// ];
// let dummyModel = require('./models/model');
// dummyModel.notesModel.insertMany(data);

app.listen(PORT, () => {
    console.log('Listening to ', PORT);
})