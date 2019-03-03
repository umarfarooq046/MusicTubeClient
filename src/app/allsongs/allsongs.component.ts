import { Component, OnInit } from '@angular/core';
import { SongsdataService } from '../songsdata.service';

@Component({
  selector: 'app-allsongs',
  templateUrl: './allsongs.component.html',
  styleUrls: ['./allsongs.component.scss']
})
export class AllsongsComponent implements OnInit {

  songs: Object;

  constructor(private data: SongsdataService) { }

  ngOnInit() {
      this.data.getAllSongs().subscribe(data => {
        this.songs = data
        console.log(this.songs);
      });
  }
  
  getSongsList() {
    this.data.getAllSongs();
  }

}
