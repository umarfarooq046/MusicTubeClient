import { Component, OnInit } from '@angular/core';
import { SongsdataService } from '../songsdata.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-songplayer',
  templateUrl: './songplayer.component.html',
  styleUrls: ['./songplayer.component.scss']
})
export class SongplayerComponent implements OnInit {
  songdetail: Object;
  
  constructor(private route: ActivatedRoute, private data: SongsdataService) { 
      this.route.params.subscribe(params => this.songdetail = params.name);
  }

  ngOnInit() {
    this.data.getSongDetails(this.songdetail).subscribe(
      data => {
      this.songdetail = data
      console.log(this.songdetail);
    });
  }

}
