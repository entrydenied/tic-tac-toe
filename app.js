const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function(event) {
    event.target.textContent = currentPlayer;

    if (currentPlayer === 'X') {
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
  });
}