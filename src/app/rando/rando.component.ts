import { Component, OnInit } from '@angular/core';
import charactersJson from '../../characters.json'
//const chars = require('../../characters.json');
const karts = require('../../karts.json');

@Component({
  selector: 'app-rando',
  templateUrl: './rando.component.html',
  styleUrls: ['./rando.component.scss']
})


export class RandoComponent implements OnInit {
  selectedValue!: string;

  constructor() { }
  //charList:any[] = [] //not safely typed but for my purposes it does not matter too much.
  kartList:any[] = [] //not safely typed but for my purposes it does not matter too much.
  num : number = 0
  numOfPlayers:any
  charList: any
  charList2: any
  ngOnInit(): void {
    
  }

  create(){
    this.getCharacters()
    this.charList2 = new char()
    if(this.numOfPlayers == 1){
      this.randomChar()
    }else if(this.numOfPlayers == 2){
      this.twoRandomChar()
    }else if( this.numOfPlayers == 3){
      this.threeRandomChar()
    }else{
      this.fourRandomChar()
    }
    console.log( this.charList2)
  }
  
  getCharacters(){
    let newchar = new char()
    this.charList = newchar.charList
    console.log(this.charList)
    console.log(new char())
  }

  getKarts(weightClass:string){
    if(weightClass == "l"){
      return  karts.l
    } else if (weightClass == "m") {
      return karts.m
    } else {
      return karts.s
    }
  }

  random(max:number){
    return Math.floor(Math.random() * max);
  }

  randomChar(){
    this.num = this.random(24)
    let player = this.charList[this.num]
    let kartList = this.getKarts(player.class)
    
    this.num = this.random(6)
    let kart = kartList[this.num]
    
    console.log(player.name + " riding in " + kart.name)
  }
  
  twoRandomChar(){
    this.num = this.random(24)
    let player = this.charList[this.num]
    let kartList = this.getKarts(player.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart = kartList[this.num]
    
    console.log(player.name + " riding in " + kart.name)
    this.num = this.random(23)
    let player2 = this.charList[this.num]
    let kartList2 = this.getKarts(player.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart2 = kartList2[this.num]
    
    console.log(player2.name + " riding in " + kart2.name)
  }

  threeRandomChar(){
    this.num = this.random(24)
    let player = this.charList[this.num]
    let kartList = this.getKarts(player.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart = kartList[this.num]
    
    console.log(player.name + " riding in " + kart.name)
    this.num = this.random(23)
    let player2 = this.charList[this.num]
    let kartList2 = this.getKarts(player2.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart2 = kartList2[this.num]
    
    console.log(player2.name + " riding in " + kart2.name)
    this.num = this.random(22)
    let player3 = this.charList[this.num]
    let kartList3 = this.getKarts(player3.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart3 = kartList3[this.num]
    
    console.log(player3.name + " riding in " + kart3.name)
  }

  fourRandomChar(){
    this.num = this.random(24)
    let player = this.charList[this.num]
    let kartList = this.getKarts(player.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart = kartList[this.num]
    
    console.log(player.name + " riding in " + kart.name)
    this.num = this.random(23)
    let player2 = this.charList[this.num]
    let kartList2 = this.getKarts(player2.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart2 = kartList2[this.num]
    
    console.log(player2.name + " riding in " + kart2.name)
    this.num = this.random(22)
    let player3 = this.charList[this.num]
    let kartList3 = this.getKarts(player3.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart3 = kartList3[this.num]
    
    console.log(player3.name + " riding in " + kart3.name)
    this.num = this.random(21)
    let player4 = this.charList[this.num]
    let kartList4 = this.getKarts(player4.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart4 = kartList4[this.num]
    
    console.log(player4.name + " riding in " + kart4.name)
  }
}
class char {
  readonly charList: any[];
  constructor(){
    this.charList = charactersJson.characters;
  }
}