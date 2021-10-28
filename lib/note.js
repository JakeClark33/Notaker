// const fs = require('fs');
// const path = require('path');


// function findById(id, notesArray) {
//   const result = notesArray.filter(note => note.id === id)[0];
//   return result;
// }



// get add(Post) and remove(delete) a note
const util = require('util');
const fs = require('fs');
const uuid = require('uuid');
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class notes{
    read(){
        return readFileAsync('notes.json', 'utf-8')
    }
    write(data){
        return writeFileAsync('notes.json', Json.stringify(data))
    }

    getNotes(){
        return this.read()
        .then (data => {
            let parseNotes 
            try {
                parseNotes= [].concat(json.parse(data))
            }
            catch (error) {
                console.log(error);
                parseNotes= []
            }
            return parseNotes
        })
    }
    addNotes() {
        return this.write()
        .then (data => {
            let parseNotes
            try {
                parseNotes= [].concat(json.parse(data))
            }
            catch (error) {
                console.log(error);
                parseNotes= []
            }
            return parseNotes
        })

    }
    
    deleteNotes(){


    }
  }
  function createNewNote(body, notesArray) {
    var notesArray = [];
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join('db/notes.json'),
      JSON.stringify({ notesArray }, null)
    );
    return note;
  }
//   function createNewNote(body, notesArray) {
//     const note = body;
//     animalsArray.push(note);
//     fs.writeFileSync(
//         path.join(__dirname, '../db/notes.json'),
//         JSON.stringify({notes: notesArray}, null, 2)
//     );
//     return note;
// Create an add note method

// create a remove note method all inside notes class
//     }
