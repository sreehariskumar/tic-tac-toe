angular.module('ticTacToeApp', [])
  .controller('GameController', function($scope) {
    const vm = this;
    const EMPTY_CELL = '';
    const PLAYER_X = 'X';
    const PLAYER_O = 'O';

    vm.board = [
      [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
      [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
      [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL]
    ];

    vm.currentPlayer = PLAYER_X;
    vm.gameOver = false;
    vm.lineStyle = {};

    vm.makeMove = (row, col) => {
      if (!vm.gameOver && vm.board[row][col] === EMPTY_CELL) {
        vm.board[row][col] = vm.currentPlayer;
        if (vm.checkWin(row, col)) {
          alert(`Player ${vm.currentPlayer} wins!`);
          vm.gameOver = true;
          vm.drawLine();
        } else if (vm.checkDraw()) {
          alert('It\'s a draw!');
          vm.gameOver = true;
        } else {
          vm.currentPlayer = vm.currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        }
      }
    };

    vm.checkWin = (row, col) => {
      const symbol = vm.board[row][col];

      // Check the row
      let rowWin = true;
      for (let i = 0; i < 3; i++) {
        if (vm.board[row][i] !== symbol) {
          rowWin = false;
          break;
        }
      }
      if (rowWin) return true;

      // Check the column
      let colWin = true;
      for (let i = 0; i < 3; i++) {
        if (vm.board[i][col] !== symbol) {
          colWin = false;
          break;
        }
      }
      if (colWin) return true;

      // Check the diagonals
      if (row === col || row + col === 2) {
        let diag1Win = true;
        let diag2Win = true;
        for (let i = 0; i < 3; i++) {
          if (vm.board[i][i] !== symbol) {
            diag1Win = false;
          }
          if (vm.board[i][2 - i] !== symbol) {
            diag2Win = false;
          }
        }
        if (diag1Win || diag2Win) return true;
      }

      return false;
    };

    vm.checkDraw = () => {
      // Implement draw-checking logic
      // This is where you'll check if the game is a draw
    };

    vm.resetGame = () => {
      vm.board = [
        [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
        [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
        [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL]
      ];
      vm.currentPlayer = PLAYER_X;
      vm.gameOver = false;
      vm.lineStyle = {}; // Reset the line style on game reset
    };

    vm.drawLine = () => {
      // Logic to draw a line indicating the win
      // Set appropriate styles for the line based on the winning condition
      // For example:
      // vm.lineStyle = {
      //   top: '50%',
      //   left: '0',
      //   width: '100%',
      //   transform: 'translateY(-50%)',
      // };
    };
  });
