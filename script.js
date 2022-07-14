const fieldElements = document.querySelectorAll(".field");


const playerFactory = () => {

};

const gameBoard = (() => {
    var board = ['','','','','','','','','']; 


    const reset = (div) => {
        for(let i=0; i < board.length; i++) {
            board[i] = ''
        };
        fieldElements.forEach((field) => {
            field.innerHTML = '';
        });
    };

    return {board, reset};
})();

const displayController = (() => {
    var turnIndex = 0;
    var turn  = document.querySelector("#turn")
    const resetBtn = document.querySelector('#restart-button')
    turn.innerHTML = 'X'

    resetBtn.addEventListener('click', gameBoard.reset)

    fieldElements.forEach((field) => {
        field.addEventListener('click', () => {
            if(field.innerHTML === '' && (turnIndex === 0 || turnIndex === 0)) {
                field.innerHTML = 'X';
                gameBoard.board[field.dataset.index] = field.innerHTML;
                turnIndex = 1;
                turn.innerHTML = 'O';
            }
            else if (field.innerHTML === '' && turnIndex === 1){
                field.innerHTML = 'O';
                gameBoard.board[field.dataset.index] = field.innerHTML;
                turnIndex = 0;
                turn.innerHTML = 'X';
            };
        });
    });

    return {fieldElements}
})();


const gameController = (() => {

    const checkWinner = () => {

        
        if () {
            return ((gameBoard.board[0] === gameBoard.board[1] === gameBoard.board[2]) ||
                (gameBoard.board[3] === gameBoard.board[4] === gameBoard.board[5]) ||
                (gameBoard.board[6] === gameBoard.board[7] === gameBoard.board[8]) ||
                (gameBoard.board[0] === gameBoard.board[3] === gameBoard.board[6]) ||
                (gameBoard.board[1] === gameBoard.board[4] === gameBoard.board[7]) ||
                (gameBoard.board[2] === gameBoard.board[5] === gameBoard.board[7]) ||
                (gameBoard.board[3] === gameBoard.board[6] === gameBoard.board[8]) ||
                (gameBoard.board[0] === gameBoard.board[4] === gameBoard.board[8]) ||
                (gameBoard.board[2] === gameBoard.board[4] === gameBoard.board[6])
            );
        }
    };
    return {checkWinner};
})();




