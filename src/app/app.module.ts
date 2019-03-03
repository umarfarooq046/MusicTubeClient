import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllsongsComponent } from './allsongs/allsongs.component';
import { SongplayerComponent } from './songplayer/songplayer.component';
import { Songplayercomp2Component } from './songplayercomp2/songplayercomp2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllsongsComponent,
    SongplayerComponent,
    Songplayercomp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
