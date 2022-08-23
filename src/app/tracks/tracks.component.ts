import { Component, OnInit } from '@angular/core';
import tracksJson from '../../tracks.json';
@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  trackList:any[] = []
  num:number = 0;
  generatedTracks:any[] = []
  constructor() { }

  ngOnInit(): void {


  }
  
  generateTracks(){
    this.generatedTracks = []
    this.getTracks()
    for(let i = 0; i < 4; i++){
      this.randomTracks(32-i)
    }
    console.log(this.generatedTracks)
  }

  random(max:number){
    return Math.floor(Math.random() * max);
  }

  getTracks(){
    this.trackList = []
    for(let i = 0; i < 32; i++){
      this.trackList.push(tracksJson.tracks[i])
    }
  }

  randomTracks(cap:number){ //add functionality later to not generate duplicate?
    this.num = this.random(cap)
    let track = this.trackList[this.num]
    this.generatedTracks.push({"track":track.name , "image":track.image})
  }

}
