import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    ListPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
