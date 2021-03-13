import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchAlbumComponent } from './search-album/search-album.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AlbumListComponent,
    SearchAlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
