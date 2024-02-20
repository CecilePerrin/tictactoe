// import 
import { Morpion } from './Morpion.js';  
import { Board } from './board.js';
import { Player } from './player.js';

// Elements du DOM 
const resetbutton = document.getElementById('reset')     
const transitionContainer = document.getElementById("transitionContainer");  
const startButton = document.getElementById('startButton');  
const startPage = document.getElementById('startPage');  
const items = document.querySelectorAll('.item');  
const playerYName = document.getElementById('player-nameY')
const playerXName = document.getElementById('player-nameX')
const mainContainer = document.getElementById('mainContainer')
const symbolX = document.getElementById('avatarX'); 
const symbolY = document.getElementById('avatarY'); 
const setNameItem = document.getElementById('display-player')

// initialize object
const board = new Board(); 
const morpion = new Morpion(board);
const playerX = new Player('X')  
const playerY = new Player('Y')

// reset button
resetbutton.addEventListener('click', () =>{
   board.resetGrid();
  });

// start button 
startButton.addEventListener('click', () => {  
  playerX.setPlayerName(playerXName)
  playerY.setPlayerName(playerYName)
  morpion.initCellListeners();
  startPage.classList.add('hidden');  
  items.forEach((item, index) => {  
    setTimeout(() => {  
      item.classList.add('slide-out');  
    }, index * 150); // Delay each item's animation by 200ms  
  });  
   setTimeout(() => {
    mainContainer.classList.remove('hidden');
    transitionContainer.classList.add('hidden');  
  }, items.length * 150);  

});