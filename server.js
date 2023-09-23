const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let currentPlayer = 'X';

// Serve the index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../frontend/index.html');
});

// Add your other route handlers here...

// Rest of your existing route handlers...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

