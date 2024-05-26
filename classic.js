// Переменные для хранения текущего игрока и статуса игры
let currentPlayer = 'X';
let gameStatus = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];

// Функция для обновления доски и проверки на победу
function updateBoard(cellId) {
    if (gameStatus[cellId] === '-' && !checkWinner()) {
        gameStatus[cellId] = currentPlayer;
        document.getElementById(cellId).innerText = currentPlayer;
        
        if (checkWinner()) {
            document.getElementById('winner').innerText = `Игрок ${currentPlayer} выиграл!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Функция для проверки победителя
function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикали
        [0, 4, 8], [2, 4, 6]             // Диагонали
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (gameStatus[a] !== '-' && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            return true;
        }
    }
    return false;
}
