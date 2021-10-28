const router = require('express').Router();
const Notes = require('../../lib/Notes.js');
const db = require('../../db/notes.json');
const notesArray = [];

router.get('', async (_req, res, next) => {
  try {
    const notes = await Notes.getNotes();
    return res.json(Object.values(notes));
  } catch (err) {
    return next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const note = await Notes.getNoteById(req.params.id);
    return res.json(note);
  } catch (err) {
    return next(err);
  }
});

router.post('', async (req, res, next) => {
  try {
    const note = await Notes.addNote(req.body);
    return res.json(note)
  } catch (err) {
    return next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const note = await Notes.updateNote(req.body);
    return res.json(note);
  } catch (err) {
    return next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const noteId = req.params.id;
    const note = await Notes.deleteNoteById(noteId);
    return res.json(note);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
