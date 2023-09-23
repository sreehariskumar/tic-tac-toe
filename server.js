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

app.get('/api/board', (req, res) => {
  res.json({ board, currentPlayer });
});

app.post('/api/move', (req, res) => {
  const { row, col } = req.body;

  if (board[row][col] === '' && currentPlayer) {
    board[row][col] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    res.json({ success: true, currentPlayer });
  } else {
    res.json({ success: false });
  }
});

app.post('/api/reset', (req, res) => {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  res.json({ success: true, currentPlayer });
});

// Serve the frontend
app.use(express.static(__dirname + '/../frontend'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
