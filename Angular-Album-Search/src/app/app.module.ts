import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AlbumService} from './album.service';
import {FormsModule} from '@angular/forms';
import { SearchArtistComponent } from './components/search-artist/search-artist.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchArtistComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
