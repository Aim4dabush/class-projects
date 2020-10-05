import { Injectable } from '@angular/core';
import { SongLyrics } from './song-lyrics.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongLyricsService {
  public songLyricChanges = new Subject<any>();
  public songLyrics: SongLyrics[] = [
    {
      songTitle: 'What a beautiful name it is',
      artist: 'Hillsong Worship',
      lyricLink: 'https://hillsong.com/lyrics/what-a-beautiful-name/'
    }
  ]

  constructor() { }

  getSongLyrics(){
    return this.songLyrics;
  }

  addSongLyric(songLyric: SongLyrics){
    this.songLyrics.push(songLyric);
  }

  deleteSongLyric(index: number){
    this.songLyrics.splice(index, 1);
    this.songLyricChanges.next(this.songLyrics.slice())
  }
}
