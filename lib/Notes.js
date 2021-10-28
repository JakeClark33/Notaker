const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

const fsPromises = require('fs/promises');

class Notes {
    static path = './db/notes.json';

    static getNotes = async () => {
        try {
            const notes = await readFileAsync(Notes.path, 'utf-8');
            const result = JSON.parse(notes);
            return result;
        } catch (err) {
            throw err;
        }
    }

    static getNoteById = async (noteId) => {
        const notes = await Notes.getNotes();
        if (!(noteId in notes)) throw (new Error("Note not found."));
        return notes[noteId];
    }

    static addNote = async (note) => {
        const notes = await Notes.getNotes();
        const id = uuidv4();
        note.id = id;
        notes[id] = note;
        try {
            await Notes.save(notes);
            return note;
        } catch (err) {
            throw err;
        }
    }

    static updateNote = async (note) => {
        const notes = await Notes.getNotes();
        if (!(note.id in notes)) throw (new Error("Note not found."));
        notes[note.id] = note;
        await Notes.save(notes);
        return note;
    }

    static save = async (notes) => {
        return await fsPromises.writeFile(Notes.path, JSON.stringify(notes));
    }

    static deleteNoteById = async (noteId) => {
        const notes = await Notes.getNotes();
        if (!(noteId in notes)) throw (new Error("Note not found."));
        const note = notes[noteId];
        delete notes[noteId];
        await Notes.save(notes);
        return note;
    }
}

module.exports = Notes;
