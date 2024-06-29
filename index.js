// app.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});
app.get('/aboutme', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'aboutme.html'));
});

app.post('/contact', (req, res) => {
  const { name, email, description } = req.body;
  // Handle form submission (e.g., save data to a database, send email, etc.)
  res.send(`Thank you, ${name}! Your message has been received.`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
