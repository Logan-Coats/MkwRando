import { Component, OnInit } from '@angular/core';

const chars = require('../../characters.json');
const karts = require('../../karts.json');

@Component({
  selector: 'app-rando',
  templateUrl: './rando.component.html',
  styleUrls: ['./rando.component.scss']
})

export class RandoComponent implements OnInit {

  constructor() { }

  charList:any[] = [] //not safely typed but for my purposes it does not matter too much.
  kartList:any[] = []
  num : number = 0
  ngOnInit(): void {
    this.getCharacters()
    this.randomChar()
  }

  getCharacters(){
    this.charList = chars.characters
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
}
