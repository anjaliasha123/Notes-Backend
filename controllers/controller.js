const model = require('../models/model');
//retreiving all notes
let getAllNotes = async (req, res)=>{
    try{
        let notes = await model.notesModel.find();
        res.status(200).json(notes);
    }catch(err){
        console.log('Error fetching all diary notes!');
        res.status(404).send('Error fetching all notes '+ err)
    }
}
//entering a note
let enterANote = async (req, res)=>{
    try{
        await model.notesModel.create(req.body);
        res.status(200).send('Note entered into diary!');

    }catch(error){
        console.log('Error creating a note');
        res.status(404).send('Unable to create a note '+ error);
    }

}
//retreiving a note by id
let retrieveNoteById = async (req, res)=>{
    try{

        let id = req.params.id;
        const notes = await model.notesModel.find({'_id': id});
            res.status(200).json(notes);
        

    }catch(error){
        console.log('Error to retrieve note by id '+ error);
        res.status(404).send('Error to retrieve note by id/ Id does not exist ');
    }

}
//updating a note by id
let updateNoteById = async (req, res)=>{
    try{
        let id = req.params.id;
        await model.notesModel.findByIdAndUpdate(id, {"body": req.body.note}, (err, data)=>{
            if(err){
                res.status(404).send('Note not found to be updated'+err);
            }
            res.status(200).send('Note updated successfully!');
        })
    }catch(err){
        // res.status(404).send('Note not found to be updated...'+err);
    }
}
//deleting a note by id
let deleteNoteById = async (req, res)=>{
    try{
        let id = req.params.id;
        let note = await model.notesModel.deleteOne({"_id": id});
        console.log(note);
        if(note.deletedCount != 0){
            res.status(200).send('Successfully deleted the note!');
        }else{
            res.status(200).send('There is no note with the id to be deleted');
        }
        
    }catch(error){
        res.status(404).send('Unable to find note to delete')
    }

}
//get 3 most recent notes
let getThreeMostImportantNotes = async (req, res)=>{
    try{
        let notes = await model.notesModel.find({}).sort({"dateCreated" : -1}).limit(3);
        res.status(200).json(notes);
    }catch(err){
        res.status(404).send('Error fetching 3 recent notes!');
    }
}
//get important notes
let getImportantNotes = async (req, res)=>{
    try{
        let notes = await model.notesModel.find({"important":true});
        res.status(200).json(notes);
    }catch(err){
        res.status(404).send('Error getting important notes '+ err);
    }
}

//get by date - OPTIONAL
let getByDate = async (req, res)=>{
    try{
        let date = req.body.date;
        let notes = await model.notesModel.find({"dateCreated" : date});
        res.status(200).json(notes);
    }catch(err){
        res.status(404).send('Error fetching by date');
    }
}

module.exports = {getImportantNotes, getThreeMostImportantNotes, deleteNoteById, updateNoteById, retrieveNoteById, enterANote, getAllNotes, getByDate};