import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongsdataService {

  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get('http://localhost:3002/musictube/song/get');
  }
  
  getSongDetails(name) {
    return this.http.get('http://localhost:3002/musictube/songdetail/get?name=' + name);
  }
}