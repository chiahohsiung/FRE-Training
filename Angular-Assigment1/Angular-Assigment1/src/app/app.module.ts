import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ForbiddenNameValidatorDirective } from './forbidden-name-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonInputComponent,
    NameEditorComponent,
    ForbiddenNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
