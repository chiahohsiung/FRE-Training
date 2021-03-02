import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
