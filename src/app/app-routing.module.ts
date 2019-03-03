import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { SongplayerComponent } from './songplayer/songplayer.component';

const routes: Routes = [
  { path: '', component: AllsongsComponent },
  { path: 'songlist', component: AllsongsComponent },
  { path: 'currentsong/:name', component: SongplayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
