const GameBoard = (function () {
    const grid = Array(9).fill('')
    const setX = (cell) => { if (grid[cell] == '') { grid[cell] = 'X' } }
    const setO = (cell) => { if (grid[cell] == '') { grid[cell] = 'O' } }
    const setEmpty = (cell) => { grid[cell] = '' }
    const showBoard = () => { console.log(grid) }

    return { grid, setX, setO, setEmpty, showBoard }
})()

const createPlayers = function (name, startingPlayer) {

}

const checkGameOver = function () {
    grid = GameBoard.grid
    gameOver = false
    winner = 'none'

    gridDivided = [
        // Grid rows
        [grid[0], grid[1], grid[2]],
        [grid[3], grid[4], grid[5]],
        [grid[6], grid[7], grid[8]],
        //grid columns
        [grid[0], grid[3], grid[6]],
        [grid[1], grid[4], grid[7]],
        [grid[2], grid[5], grid[8]],
        //grid diagonals
        [grid[0], grid[4], grid[8]],
        [grid[2], grid[4], grid[6]],
    ]

    for (let i = 0; i < gridDivided.length; i++) {
        if (gridDivided[i].every(element => element == 'X')) {
            // Returns X has won
            gameOver = true
            winner = 'X'
        } else if (gridDivided[i].every(element => element == 'O')) {
            // Returns O has won
            gameOver = true
            winner = 'O'
        }
    }

    if (grid.every(element => element !== '')) {
        // Returns the game is tie
        gameOver = true
        winner = 'tie'
    }
    gameWinnerDisplay = document.querySelector('#game-winner-display')
    gameWinnerDisplay.textContent = 'The winner is: ' +  
    return { gameOver, winner }
}




const displayGame = (function () {
    document.getElementById('game-board').innerHTML = ''
    let currentPlayer = 'O'
    // checkGameOver().gameOver 

    const gameGrid = GameBoard.grid.map(function (value, index) {
        const gameCell = document.createElement('div')
        gameCell.classList.add('cell')


        const gameCellValue = document.createElement('p')
        gameCellValue.textContent = value

        const clearCells = function () {
            gameCellValue.textContent = ''
        }

        gameCell.appendChild(gameCellValue)
        gameCell.addEventListener('click', () => {
            if (gameCellValue.textContent == '') {
                playGame(index, currentPlayer)

                if (currentPlayer == 'O') {
                    currentPlayer = 'X'
                    gameCellValue.textContent = currentPlayer

                } else if (currentPlayer == 'X') {
                    currentPlayer = 'O'
                    gameCellValue.textContent = currentPlayer

                } else {
                    console.log(checkGameOver().winner)
                }

                if (checkGameOver().gameOver == true) {
                    currentPlayer = 'none'
                }
            }
            checkGameOver()
            // GameBoard.showBoard()
        })

        const restartButton = document.querySelector('.button-6')
        restartButton.addEventListener('click', () => {
            restart()
            gameCellValue.textContent = ''
        })
        return gameCell
    })

    gameGrid.forEach(function (cell) {
        document.getElementById('game-board').appendChild(cell)
    })

})()

const playGame = function (inputValue, currentPlayer) {
    const gameWinner = checkGameOver().winner

    if (checkGameOver().gameOver == false) {
        if (currentPlayer == 'O') {
            GameBoard.setX(inputValue)
        } else {
            GameBoard.setO(inputValue)
        }
    }
    return currentPlayer
}

const restart = function () {
    for (i = 0; i < 8; i++) {
        GameBoard.setEmpty(i)
    }
    console.log('clicked')
    checkGameOver()
}