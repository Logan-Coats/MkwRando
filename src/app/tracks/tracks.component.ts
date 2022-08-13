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
  constructor() { }

  ngOnInit(): void {


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

  generateTracks(){
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
