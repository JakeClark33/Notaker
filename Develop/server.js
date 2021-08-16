const express = require('express');
// use express for out get and app and router functions
const app = express();

<<<<<<< HEAD
const { notes } = require('./db/notes');
// Get the CSS for the index.html
app.use(express.static(__dirname + '/public'));
// connect the request to display html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    res.send()
});

// create the notes api
app.get('/api/notes', (req, res) => {
    res.json('Hello!');
  });
// create the port to listen on for the response
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
=======
const path = require('path');

const { notes } = require('./public/assets/js/notes');
// Get the CSS for the index.html
app.use(express.static(path.join(__dirname, 'public')));
// connect the request to display html


// create the notes api
app.get('/api/notes', (req, res) => {
    res.json(notes);
});
// create the port to listen on for the responseDevelop\public\assets\js\notes.js
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });
>>>>>>> develop
