DATABASE_NAME = 'diary';
COLLECTION_NAME = 'notes';
CONNECTION = 'mongodb://127.0.0.1:27017/';
const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
mongoose.connect(CONNECTION+DATABASE_NAME, (err, db)=>{
    if(err) console.log('mongoose error connecting')
});

const notesSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    body: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Object,
        default: new Date()
    },
    important: {
        type: Boolean,
        default: false
    }
});

const notesModel = mongoose.model('Notes_model', notesSchema, COLLECTION_NAME);

module.exports = {notesModel};

