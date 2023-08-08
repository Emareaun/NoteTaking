const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'db.json');

// Read notes from the db.json file
const getNotes = () => {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

// Write notes to the db.json file
const saveNotes = (notes) => {
  fs.writeFileSync(dbPath, JSON.stringify(notes, null, 2), 'utf8');
};

// API endpoint to get all notes
router.get('/', (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

// API endpoint to save a new note
router.post('/', (req, res) => {
  const notes = getNotes();
  const newNote = {
    id: Date.now().toString(),
    title: req.body.title,
    text: req.body.text,
  };
  notes.push(newNote);
  saveNotes(notes);
  res.json(newNote);
});

// API endpoint to delete a note by ID
router.delete('/:id', (req, res) => {
  const notes = getNotes();
  const noteId = req.params.id;
  const updatedNotes = notes.filter((note) => note.id !== noteId);
  saveNotes(updatedNotes);
  res.json({ message: 'Note deleted successfully.' });
});

module.exports = router;
