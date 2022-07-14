const fieldElements = document.querySelectorAll(".field");


const playerFactory = (mark) => {
    this.mark = mark;

  const getMark = () => {
    return mark;
  };

  return { getMark };
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

const gameController = (() => { 

    const checkWinner = (mark) => {
        return ((gameBoard.board[0]=== mark)&&((gameBoard.board[0]===gameBoard.board[1])&&(gameBoard.board[0]===gameBoard.board[2]))||
            (gameBoard.board[3]=== mark)&&((gameBoard.board[3]===gameBoard.board[4])&&(gameBoard.board[3]===gameBoard.board[5]))||
            (gameBoard.board[6]=== mark)&&((gameBoard.board[6]===gameBoard.board[7])&&(gameBoard.board[6]===gameBoard.board[8]))||
            (gameBoard.board[0]=== mark)&&((gameBoard.board[0]===gameBoard.board[3])&&(gameBoard.board[0]===gameBoard.board[6]))||
            (gameBoard.board[1]=== mark)&&((gameBoard.board[1]===gameBoard.board[4])&&(gameBoard.board[1]===gameBoard.board[7]))||
            (gameBoard.board[2]=== mark)&&((gameBoard.board[2]===gameBoard.board[5])&&(gameBoard.board[2]===gameBoard.board[8]))||
            (gameBoard.board[0]=== mark)&&((gameBoard.board[0]===gameBoard.board[4])&&(gameBoard.board[0]===gameBoard.board[8]))||
            (gameBoard.board[2]=== mark)&&((gameBoard.board[0]===gameBoard.board[4])&&(gameBoard.board[0]===gameBoard.board[6])));    
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
    let isWinnerO, isWinnerX = false;

    resetBtn.addEventListener('click', gameBoard.reset)

    

    fieldElements.forEach((field) => {
        field.addEventListener('click', () => {
            if(field.innerHTML === '' && (turnIndex === 0 || turnIndex === 0)) {
                field.innerHTML = 'X';
                gameBoard.board[field.dataset.index] = field.innerHTML;
                turnIndex = 1;
                turn.innerHTML = 'O';
                if(gameController.checkWinner('X') === true) {
                    console.log('X wins');
                    isWinnerX = true;
                }
                if(gameController.checkDraw() === true) {
                    console.log('Draw');
                }
            }
            else if (field.innerHTML === '' && turnIndex === 1){
                field.innerHTML = 'O';
                gameBoard.board[field.dataset.index] = field.innerHTML;
                turnIndex = 0;
                turn.innerHTML = 'X';
                if(gameController.checkWinner('O') === true) {
                    console.log('O wins');
                    isWinnerO = true;
                }
                if(gameController.checkDraw() === true) {
                    console.log('Draw');
                }
            };
        });
    });

    const displayResult = (()=> {
        if(isWinnerX === true) {
            result.innerHTML = 'Player X won!'
        }
        else if(isWinnerO === true) {
            result.innerHTML = 'Player O won!'
        }
    })();

    return {fieldElements, isWinnerO, isWinnerX, displayResult}
})();


