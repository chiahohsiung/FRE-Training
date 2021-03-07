import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './tiktaktoe/board/board.component';
import { BoxComponent } from './tiktaktoe/box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
