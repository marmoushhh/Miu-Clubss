const express = require('express');
const cors = require('cors'); // <-- 1. Import cors

const app = express(); // <-- 2. Initialize express

const port = process.env.PORT || 3000;

const indexRoutes = require('./routes/index');

app.use(cors()); // <-- 3. Use cors AFTER app is defined
app.use(express.json());

app.use(express.static('public'));

// Use the routes
app.use('/api', indexRoutes);
app.get('/', (req, res) => {
  res.send('MIU Clubs Backend is working!');
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
