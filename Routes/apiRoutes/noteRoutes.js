const router = require('express').Router();
const {findById, createNewNote} = require('../../lib/note');
const { notes } = require('../../db/notes.json');
var notesArray = []
router.get('/note', (req, res) => {
  let results = notes;
  if (req.query) {
  
  }
  res.json(results);
});

router.get('/note/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  const note = createNewNote(req.body, notes);
    res.json(note);
    req.body.id = notesArray.length.toString();
    
  }
);

router.put('/note/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.delete('/note/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.put('/note')

module.exports = router;
