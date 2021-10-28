const express = require('express');
// require routes folder for api routes /api-define
const PORT = process.env.PORT || 3001;
const app = express();

// const path = require('path');
// const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes');
// const { notes } = require('./db/notes.json');
// const fs = require('fs');
const notesArray= [];
const fs= require('fs');
const path = require('path');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
app.get('/db', (req, res) => {
  let results = notes;
  console.log(req, query);
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  res.json(notes);
  return results;
  });



  function createNewNote(body, notesArray) {
    const note = body;
    fs.writeFileSync(
      path.join(__dirname, '/db/notes.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
  }
//create  get post and delete routes
function findById(id, notesArray) {
  const result = notes.filter(note => note.id === id)[0];
  
  return result;
}
app.post('/api/note', function(req, res) {
  // set id based on what the next index of the array will be
  
  
  req.body.id = notesArray.length.toString();
  console.log(req.body);
  // add animal to json file and animals array in this function
  const note = createNewNote(req.body);
  res.json()
  // res.json(req.body);
});

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
app.put('/', (req, res) => {
  res.send("PUT Request Called")
})

app.delete('/api/notes', (req, res) => {
    res.send("DELETE Request Called")
  })

 

  // module.exports= notes;