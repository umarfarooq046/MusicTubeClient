import { Component, OnInit } from '@angular/core';
import { SongsdataService } from '../songsdata.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-songplayercomp2',
  templateUrl: './songplayercomp2.component.html',
  styleUrls: ['./songplayercomp2.component.scss']
})
export class Songplayercomp2Component implements OnInit {

  path: Object;
  
  constructor(private route: ActivatedRoute, private data: SongsdataService) { 
      this.route.params.subscribe(params => this.path = params.name);
  }

  ngOnInit() {
    this.data.getSongDetails(this.path).subscribe(
      data => {
      this.path = data.songs.path 
      console.log(this.path);
    });
  }

}
