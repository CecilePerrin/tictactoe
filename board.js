import { Morpion } from './Morpion.js';  

export class Board{ 
  constructor() { 
    this.grid = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],     
    ];
    this.gameOver = false;
  } 

  updateGrid(position, symbol) {
    this.grid[position] = symbol;
  }
  
  winVerify(position){
  const playerSymbol = this.grid[position];

  for (let i = 0; i < this.winConditions.length; i++) {
    const [a, b, c] = this.winConditions[i];
    if (
      this.grid[a] === playerSymbol &&
      this.grid[b] === playerSymbol &&
      this.grid[c] === playerSymbol
    ) {
      return true; 
    }
  }

  return false; 
}
resetGrid(){
  const imgCellsX = document.querySelectorAll('.playerImgX')
  const imgCellsO = document.querySelectorAll('.playerImgO')
  const cells = document.querySelectorAll('.tile');
  this.gameOver = false;

  cells.forEach((cell) => {
    if (cell.classList.contains("playerX") || cell.classList.contains("playerO") ) {
      cell.classList.remove("playerX");
      cell.classList.remove("playerO");
      imgCellsX.forEach((imgCellX) => {
        imgCellX.classList.remove("playerImgX");
      });
    } imgCellsO.forEach((imgChildO) => {
      imgChildO.classList.remove("playerImgO");
    });
  });
  for (let i = 0; i < this.grid.length; i++){
  this.grid[i] ='';
 }
 Morpion.initCellListeners();
}
}
