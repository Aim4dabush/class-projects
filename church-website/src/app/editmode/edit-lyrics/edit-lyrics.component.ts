import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SongLyrics } from 'src/app/song-lyrics.module';
import { SongLyricsService } from 'src/app/song-lyrics.service';

@Component({
  selector: 'app-edit-lyrics',
  templateUrl: './edit-lyrics.component.html',
  styleUrls: ['./edit-lyrics.component.css']
})
export class EditLyricsComponent implements OnInit {
  public songLyrics: SongLyrics[];
  public editSongLyricsForm: FormGroup;

  constructor(private songLyricsService: SongLyricsService) { }

  ngOnInit(){
    this.songLyrics = this.songLyricsService.getSongLyrics();

    this.songLyricsService.songLyricChanges.subscribe(
      (songLyric: SongLyrics[]) => {
        this.songLyrics = songLyric;
      }
    )

    this.editSongLyricsForm = new FormGroup({
      'songTitle': new FormControl(null, Validators.required),
      'artist': new FormControl(null, Validators.required),
      'lryicLink': new FormControl(null, Validators.required)
    })
  }

  onDelete(index: number){
    this.songLyricsService.deleteSongLyric(index);
  }

  onSubmit(){
    this.songLyricsService.addSongLyric(this.editSongLyricsForm.value);
  }

}
