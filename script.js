const GameBoard = (function () {
    const grid = Array(9).fill('')
    const setX = (cell) => { if (grid[cell] == '') { grid[cell] = 'X' } }
    const setO = (cell) => { if (grid[cell] == '') { grid[cell] = 'O' } }
    const setEmpty = (cell) => { grid[cell] = '' }
    const showBoard = () => { console.log(grid) }

    return { grid, setX, setO, setEmpty, showBoard }
})()

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
        // Returns the game is tied
        gameOver = true
        winner = 'tie'
    }
    // console.log(gameOver, winner, grid)
    return { gameOver, winner }
}




const displayGame = function () {
    document.getElementById('game-board').innerHTML = ''
    let gameGrid = GameBoard.grid.map(function (value, index) {
        const gameCell = document.createElement('div')
        gameCell.classList.add('cell')

        const gameCellValue = document.createElement('p')
        gameCellValue.textContent = value

        gameCell.appendChild(gameCellValue)
        gameCell.addEventListener('click', () => {
            return index
        })
        return gameCell 
    })

    gameGrid.forEach(function (cell) {
        document.getElementById('game-board').appendChild(cell)
    })


}()

const playGame = function () {
    let currentPlayer = 'X'

    while (checkGameOver().gameOver !== true) {

        if (currentPlayer == 'X') {
            GameBoard.setX(inputValue)
        } else {
            GameBoard.setO(inputValue)
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkGameOver()
        displayGame()
    }
}

// playGame()