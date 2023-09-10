// Import classes   
import { Morpion } from './Morpion.js';  
import { Board } from './board.js';
const resetbutton = document.getElementById('reset')     
const transitionContainer = document.getElementById("transitionContainer");  
const startButton = document.getElementById('startButton');  
const startPage = document.getElementById('startPage');  
const items = document.querySelectorAll('.item');  

// class userInterface {  
  // }  
  const board = new Board(); 
  const morpion = new Morpion(board);
  console.log(board.gameOver)
  
  morpion.initCellListeners(); 
  resetbutton.addEventListener('click', () =>{
   board.resetGrid();
  });

startButton.addEventListener('click', () => {  
  startPage.classList.add('hidden');  
  items.forEach((item, index) => {  
    setTimeout(() => {  
      item.classList.add('slide-out');  
    }, index * 150); // Delay each item's animation by 200ms  
  });  
   setTimeout(() => {  
    transitionContainer.classList.add('hidden');  
  }, items.length * 150);  
});