const express = require('express');
// require routes folder for api routes /api-define
const app = express();
const path = require('path');
const { notes } = require('./db/notes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
