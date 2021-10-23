const express = require('express');
// require routes folder for api routes /api-define
const app = express();
const path = require('path');
const { notes } = require('./db/notes');
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

  module.exports= notes;