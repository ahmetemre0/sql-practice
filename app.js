const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Passport middleware
app.use(passport.initialize());

// Define a simple route
app.get('/', (req, res) => {
  res.send('SQL Practice Website Backend');
});

// Define the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
