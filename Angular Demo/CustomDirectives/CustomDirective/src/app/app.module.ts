import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangetextDirective } from './CustomDirectives/changetext.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangetextDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
