// Tic-Tac-Toe AI Game Project

// Tic-Tac-Toe is normally played with two people. One player is X and the other player is O. 
// Players take turns placing their X or O. If a player gets three of their marks on the board in a 
// row, column, or diagonal, they win. When the game board fills up with neither player winning, 
// the game ends in a draw.

// An AI (artificial intelligence) is a computer program that can intelligently respond 
// to the player’s moves. The AI that plays Tic-Tac-Toe isn’t complicated; it’s really just a few lines of code.

// Representing the Game Board as Data

// In the project, the Tic-Tac-Toe game board is represented as a array of strings. 
// Each string represents one of the nine spaces on the game board.

// The strings are either 'X' for the X player, 'O' for the O player, or a single space ' ' for a blank space.

// Remember that we’re laying out our game board like a number pad on a keyboard. 
// So if a array with 10 strings was stored in a variable named board, then board[7] 
// would be the top-left space on the board, board[8] would be the top-middle space, 
// board[9] would be the top-right space, and so on. 
// The project ignores the string at index 0 in the array. The player will enter a 
// number from 1 to 9 to tell the game which space they want to move on.

// Start the Source Code for Tic-Tac-Toe AI Game Project
// ES6+ or ES2015+ 


// * Step 1 - Printing the Game Board on the Screen * 

function drawGameBoard(board) {
    // This function prints out the game board that it was passed.
    // "board" is a array of 10 strings representing the board (ignore index 0).

    console.log(`${board[7]} | ${board[8]} | ${board[9]}`);
    console.log('--+---+--');
    console.log(`${board[4]} | ${board[5]} | ${board[6]}`);
    console.log('--+---+--');
    console.log(`${board[1]} | ${board[2]} | ${board[3]}`);
}

// let stringNumberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// drawGameBoard(stringNumberArray);

// drawGameBoard([' ', 'C', 'S', 'C', 'S', 'c', 'S', 'C', 'S', 'C'])

let theGameBoard = [" ", " ", " ", " ", "X", " ", " ", "O", " ", " "];
// drawGameBoard(theGameBoard);
theGameBoard[9] = 'O';
theGameBoard[8] = 'X';
drawGameBoard(theGameBoard)

// @mrizwanse
// Happy Learning 😊
