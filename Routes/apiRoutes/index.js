const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes);

module.exports = router;










// require notes.js from the db folder (to access methods refer to the notes.js)get add/delete
require('../lib/notes');


function findById(id, notesArray) {
    const result = notessArray.filter(note => note.id === id)[0];
    return result;
  }

//create  get post and delete routes
app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });

  app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    res.json(req.body);
  });
  module.exports = router;