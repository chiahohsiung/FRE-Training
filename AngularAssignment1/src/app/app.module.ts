import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { DisplayPersonComponent } from './display-person/display-person.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddPersonComponent, DisplayPersonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
