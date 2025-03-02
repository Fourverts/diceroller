const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware for cross-origin resource sharing
app.use(cors());

// Define a route for the Dice Roller API
app.get('/roll-dice', (req, res) => {
  const sides = req.query.sides || 6;  // Default to a 6-sided dice
  const roll = Math.floor(Math.random() * sides) + 1;
  res.json({ roll });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
