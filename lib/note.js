const fs = require('fs');
const path = require('path');
var notesArray = [];

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './db/note.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}


module.exports = {
  findById,
  createNewNote,
};







// // get add(Post) and remove(delete) a note
// const util = require('util');
// const fs = require('fs');
// const uuid = require('uuid');
// const readFileAsync = util.promisify(fs.readFile)
// const writeFileAsync = util.promisify(fs.writeFile)

// class notes{
//     read(){
//         return readFileAsync('db.json', 'utf-8')
//     }
//     write(data){
//         return writeFileAsync('db.json', Json.stringify(data))
//     }

//     getNotes(){
//         return this.read()
//         .then (data => {
//             let parseNotes 
//             try {
//                 parseNotes= [].concat(json.parse(data))
//             }
//             catch (error) {
//                 console.log(error);
//                 parseNotes= []
//             }
//             return parseNotes
//         })
//     }
// }
//Create an add note method

//create a remove note method all inside notes class

