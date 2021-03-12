import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/album.reducer';
import { AlbumCardComponent } from './album-card/album-card.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    SearchBarComponent,
    AlbumCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      album: reducer
    }, {}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
