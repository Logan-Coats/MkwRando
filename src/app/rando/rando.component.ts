import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import charactersJson from '../../characters.json';
import tracksJson from '../../tracks.json';
//const chars = require('../../characters.json');
const karts = require('../../karts.json');

@Component({
  selector: 'app-rando',
  templateUrl: './rando.component.html',
  styleUrls: ['./rando.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class RandoComponent implements OnInit {
  selectedValue!: string;

  constructor() { }
  charList:any[] = [] //not safely typed but for my purposes it does not matter too much.
  kartList:any[] = [] //not safely typed but for my purposes it does not matter too much.
  trackList:any[] = []
  num : number = 0
  numOfPlayers:any = 4;
  generatedChars:any[] = [];
  ngOnInit(): void {
    
  }

  create(){
    //generate characters
    this.generatedChars = []
    console.log("generating "+ this.numOfPlayers+ " characters")
    this.getCharacters()
    if(this.numOfPlayers == 1){
      this.randomChar(24)
    }else if(this.numOfPlayers == 2){
      this.randomChar(24)
      this.randomChar(23)
    }else if( this.numOfPlayers == 3){
      this.randomChar(24)
      this.randomChar(23)
      this.randomChar(22)
    }else{
      this.randomChar(24)
      this.randomChar(23)
      this.randomChar(22)
      this.randomChar(21)
    }
    console.log(this.generatedChars)
    //generate track(s)
    this.randomTrack()
  }
  
  getCharacters(){
    this.charList = []
    for(let i = 0; i < 24; i++){
      this.charList.push(charactersJson.characters[i])
    }
  }

  getTracks(){
    this.trackList = []
    for(let i = 0; i < 32; i++){
      this.trackList.push(tracksJson.tracks[i])
    }
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

  randomChar(cap:number){
    this.num = this.random(cap)
    let player = this.charList[this.num]
    let kartList = this.getKarts(player.class)
    this.charList.splice(this.num,1)
    this.num = this.random(6)
    let kart = kartList[this.num]
    this.generatedChars.push({"character": player.name,"char-img":player.image,"kart": kart.name, "kart-img":kart.image})
  }
  
  randomTrack(){ //add functionality later to not generate duplicate?
    this.getTracks()
    this.num = this.random(32)
    let track = this.trackList[this.num]
    console.log(track)

    this.getTracks()
    this.num = this.random(31)
    let track2 = this.trackList[this.num]
    console.log(track2)

    this.getTracks()
    this.num = this.random(30)
    let track3 = this.trackList[this.num]
    console.log(track3)

    this.getTracks()
    this.num = this.random(29)
    let track4 = this.trackList[this.num]
    console.log(track4)
  }
}
