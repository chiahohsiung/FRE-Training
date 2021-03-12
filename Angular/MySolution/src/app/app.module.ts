import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './components/hw1/add-person/add-person.component';
import { PersonListComponent } from './components/hw1/person-list/person-list.component';
import { ReactiveFormComponent } from './components/hw2/reactive-form/reactive-form.component';
import { TemplatedFormComponent } from './components/hw2/templated-form/templated-form.component';
import { AlbumSearchComponent } from './components/exam/album-search/album-search.component';
import { ScaleSizePipe } from './components/exam/album-search/scale-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PersonListComponent,
    ReactiveFormComponent,
    TemplatedFormComponent,
    AlbumSearchComponent,
    ScaleSizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
