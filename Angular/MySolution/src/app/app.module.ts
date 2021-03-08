import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPersonComponent } from './components/hw1/add-person/add-person.component';
import { PersonListComponent } from './components/hw1/person-list/person-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/hw2/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PersonListComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
