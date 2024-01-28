const PLAYER_X = "X"; 
const PLAYER_O = "O"; 

export class Morpion { 
  constructor(board) { 
    this.currentPlayer = PLAYER_X; 
    this.board = board;
  } 

  initCellListeners() {
    const boardContainer = document.getElementById('board');
    if (!this.board.gameOver) {
      const clickHandler = (event) => {
        const clickedCell = event.target;
        if (clickedCell.classList.contains('tile')) {
          const position = parseInt(clickedCell.dataset.position);
          const imgChildDivs = clickedCell.children;
          this.makeMove(clickedCell, imgChildDivs, position);
        }
      };
  
    boardContainer.addEventListener('click', clickHandler);
  
      this.clickHandler = clickHandler;
    }
  }
  removeCellListeners() {
    const boardContainer = document.getElementById('board');
    boardContainer.removeEventListener('click', this.clickHandler);
  }

  getCurrentPlayer() { 
    this.currentPlayer = (this.currentPlayer === PLAYER_X) ? PLAYER_O : PLAYER_X;
    return this.currentPlayer;
  } 


  makeMove(clickedCell, imgChildDivs, position) { 
        if (!clickedCell.classList.contains("playerX") && !clickedCell.classList.contains("playerO")) { 
          const currentPlayerValue = this.getCurrentPlayer(); 
          if (currentPlayerValue === PLAYER_X ) { 
            clickedCell.classList.add("playerX"); 
            for (let i = 0; i < imgChildDivs.length; i++) { 
              imgChildDivs[i].classList.add("playerImgX"); 
            }
          } else { 
            clickedCell.classList.add("playerO"); 
            for (let i = 0; i < imgChildDivs.length; i++) { 
              imgChildDivs[i].classList.add("playerImgO"); 
            } 
          }
          this.board.updateGrid(position, currentPlayerValue);
          if (this.board.winVerify(position)) {
           alert(`Victoire pour  ${currentPlayerValue}`);
           this.board.gameOver = true; 
           this.removeCellListeners();
          } 
      
    }      
  }

}