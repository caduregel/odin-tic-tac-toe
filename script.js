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
        console.log(i, gridDivided[i])
        if (gridDivided[i].every(element => element == 'X')) {
            // Returns X has won
        } else if (gridDivided[i].every(element => element == 'O')){
            // Returns O has won
        }
    }
}

GameBoard.setX(0)
GameBoard.setX(3)
GameBoard.setX(6)

checkGameOver()