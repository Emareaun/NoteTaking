const express = require('express');
const path = require('path');
const router = express.Router();

// HTML endpoint for the home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// HTML endpoint for the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'notes.html'));
});

module.exports = router;
