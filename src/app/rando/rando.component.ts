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
  generatedTracks:any[] = [];

  panelOpenState = false;
  ngOnInit(): void {
    
  }

  create(){
    //generate characters
    this.generatedChars = []
    console.log("generating "+ this.numOfPlayers+ " characters")
    this.getCharacters()
    for(let i = 0; i < this.numOfPlayers; i++){
      this.randomChar(24-i)
    }
    console.log(this.generatedChars)
    //generate track(s)
    this.generatedTracks = []
    this.getTracks()
    for(let i = 0; i<4; i++){
      this.randomTracks(32-i)
    }
    console.log(this.generatedTracks)
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
    this.generatedChars.push({"character": player.name,"char_img":player.image,"kart": kart.name, "kart_img":kart.image})
  }
  
  randomTracks(cap:number){ //add functionality later to not generate duplicate?
    this.num = this.random(cap)
    let track = this.trackList[this.num]
    this.generatedTracks.push({"track":track.name , "image":track.image})
  }
}
