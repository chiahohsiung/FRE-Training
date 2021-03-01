import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { PersonListComponent } from './components/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
