// routes/index.js
const express = require('express');
const router = express.Router();

// Example GET route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the backend route!' });
});

module.exports = router;
