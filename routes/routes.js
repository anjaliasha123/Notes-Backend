const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

//access point for /api/notes/important
router.route('/notes/important')
.get(controller.getImportantNotes);

//access point for /api/notes/recent
router.route('/notes/recent')
.get(controller.getThreeMostImportantNotes);

//[OPTIONAL] access point for /api/notes/date
router.route('/notes/date')
.get(controller.getByDate);

//access point for /api/notes/note/:id
router.route('/notes/note/:id')
.get(controller.retrieveNoteById)
.patch(controller.updateNoteById)
.delete(controller.deleteNoteById);

//access point for /api/notes/
router.route('/notes')
.get(controller.getAllNotes)
.post(controller.enterANote);

module.exports = {router};

