const router = require('express').Router();
// const {findById} = require('../../lib/note');s
const { notes } = require('../../db/notes.json');
const notesArray = [];
require('../../lib/note');

router.get('/notes', (req, res) => {
  let results = notes;
  if (req.query) {
  
  }
  res.json(results);
});

router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
  // set id based on what the next index of the array will be
  const note = (req.body, notes);
    res.json(note);
    req.body.id = notesArray.length.toString();
    
  }
);

router.put('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.delete('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.put('/notes')

module.exports = router;
