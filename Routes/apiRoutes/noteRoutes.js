const router = require('express').Router();
const {findById, createNewNote} = require('../../lib/note');
const { notes } = require('../../db/notes.json');

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

router.post('/note', (req, res) => {
  const note = createNewNote(req.body, notes);
  // set id based on what the next index of the array will be
  req.body.id = note.length.toString();

    res.json(note);
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
