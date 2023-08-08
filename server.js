const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON data in request bodies
app.use(express.json());

// Middleware to serve static files (CSS, JS, images, etc.)
app.use(express.static('public'));

// API routes
app.use('/api/notes', require('./routes/apiRoutes'));

// HTML routes
app.use('/', require('./routes/htmlRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
