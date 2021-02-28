import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ShowPersonComponent } from './show-person/show-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    ShowPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
