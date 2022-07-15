const fieldElements = document.querySelectorAll(".field");


const gameBoard = (() => {
    var board = ['','','','','','','','','']; 


    const reset = (div) => {
        for(let i=0; i < board.length; i++) {
            board[i] = ''
        };
        fieldElements.forEach((field) => {
            field.innerHTML = '';
        });
        displayController.result.innerHTML = '';
    };

    return {board, reset};
})();

const gameController = (() => { 

    const checkWinner = (mark) => {
        return (((gameBoard.board[0]===mark)&&(gameBoard.board[1]===mark)&&(gameBoard.board[2]===mark))||
        ((gameBoard.board[3]===mark)&&(gameBoard.board[4]===mark)&&(gameBoard.board[5]===mark))||
        ((gameBoard.board[6]===mark)&&(gameBoard.board[7]===mark)&&(gameBoard.board[8]===mark))||
        ((gameBoard.board[0]===mark)&&(gameBoard.board[3]===mark)&&(gameBoard.board[6]===mark))||
        ((gameBoard.board[1]===mark)&&(gameBoard.board[4]===mark)&&(gameBoard.board[7]===mark))||
        ((gameBoard.board[2]===mark)&&(gameBoard.board[5]===mark)&&(gameBoard.board[8]===mark))||
        ((gameBoard.board[0]===mark)&&(gameBoard.board[4]===mark)&&(gameBoard.board[8]===mark))||
        ((gameBoard.board[2]===mark)&&(gameBoard.board[4]===mark)&&(gameBoard.board[6]===mark))
        );
    };

    const checkDraw = () => {
        var drawIndex = 0;
        fieldElements.forEach((field)=> {
            if(field.innerHTML !== '') {
                drawIndex +=1;
            }
        });
        return (drawIndex === 9);
    };
    return {checkWinner, checkDraw};
})();

const displayController = (() => {
    var turnIndex = 0;
    var turn  = document.querySelector("#turn");
    const resetBtn = document.querySelector('#restart-button');
    const result = document.querySelector('#result');
    turn.innerHTML = 'X';
    let isWinnerO = false;
    let isWinnerX = false;
    let isDraw = false;
    

    resetBtn.addEventListener('click', gameBoard.reset)

    

    fieldElements.forEach((field) => {
        field.addEventListener('click', () => {
            if(field.innerHTML === '' && (turnIndex === 0)) {
                field.innerHTML = 'X';
                gameBoard.board[field.dataset.index] = field.innerHTML;
                turnIndex = 1;
                turn.innerHTML = 'O';
                if((displayController.isWinnerO===false)&&(displayController.isWinnerX===false)&&(gameController.checkWinner('X') === true)) {
                    displayController.isWinnerX = true;
                    result.innerHTML = 'Player X wins!'
                }
                if((displayController.isWinnerO===false)&&(displayController.isWinnerX===false)&&(gameController.checkDraw() === true)) {
                    displayController.isDraw = true;
                    result.innerHTML = 'Draw'
                }
            }
            else if (field.innerHTML === '' && turnIndex === 1){
                field.innerHTML = 'O';
                gameBoard.board[field.dataset.index] = field.innerHTML;
                turnIndex = 0;
                turn.innerHTML = 'X';
                if((displayController.isWinnerX===false)&&(displayController.isWinnerO===false)&&(gameController.checkWinner('O') === true)) {
                    displayController.isWinnerO = true;
                    result.innerHTML = 'Player O wins!'
                }
                if((displayController.isWinnerX===false)&&(displayController.isWinnerO === false)&&(gameController.checkDraw() === true)) {
                    displayController.isDraw = true;
                    result.innerHTML = 'Draw!'
                }
            };
        });
    });


    return {fieldElements, isWinnerO, isWinnerX, result}
})();

