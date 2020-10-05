import { Component, OnInit } from '@angular/core';
import { SongLyricsService } from '../song-lyrics.service';

@Component({
  selector: 'app-song-lyrics',
  templateUrl: './song-lyrics.component.html',
  styleUrls: ['./song-lyrics.component.css']
})
export class SongLyricsComponent implements OnInit {
  public songLyrics: any;
  public textStyle = {
    fontFamily: 'lemonada, cursive'
  }

  constructor(private songLyricsService: SongLyricsService) { }

  ngOnInit(){
    this.songLyrics = this.songLyricsService.songLyrics
  }

}
