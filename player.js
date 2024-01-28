
export class Player{
  constructor(symbole){
    this.symbole = symbole;
    this.valueName = ""
    this.score = []
  }

  getScore(){

  }
  setPlayerName(nameValue){
    this.valueName = nameValue
    if(this.symbole === 'Y'){
      localStorage.setItem('Player Y', this.valueName.value )

    }else{
      localStorage.setItem('Player X',this.valueName.value)

    }
    
  }

  getPlayerName(){

  }

  setPlayerSymbole(){

  }
}