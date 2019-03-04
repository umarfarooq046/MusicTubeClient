import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SongsdataService {

  constructor(private socket: Socket, private http: HttpClient) { }

  getAllSongs() {
    return this.http.get('http://localhost:3002/musictube/song/get');
  }
  
  getSongDetails(name) {
    this.socket.emit("playing_new_song", {name});
    return this.http.get('http://localhost:3002/musictube/songdetail/get?name=' + name);
  }
}