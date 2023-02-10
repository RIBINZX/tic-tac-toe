const squares = document.querySelectorAll('.square');
const restartBtn = document.querySelector('#restart');
const winnerDisplay = document.querySelector('#winner');
let currentPlayer = 'X';

squares.forEach(square => {
  square.addEventListener('click', function(e) {
    e.target.textContent = currentPlayer;

    if (checkWin(currentPlayer)) {
      winnerDisplay.textContent = `Winner: Player ${currentPlayer}`;
    } else if (checkDraw()) {
      winnerDisplay.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

restartBtn.addEventListener('click', function() {
  squares.forEach(square => {
    square.textContent = '';
  });
  winnerDisplay.textContent = '';
  currentPlayer = 'X';
});

function checkWin(player) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      squares[a].textContent === player &&
      squares[b].textContent === player &&
      squares[c].textContent === player
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i].textContent === '') {
      return false;
    }
  }

  return true;
}
