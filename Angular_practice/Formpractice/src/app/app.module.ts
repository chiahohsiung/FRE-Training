import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reactive1Component } from './reactive1/reactive1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Reactive2Component } from './reactive2/reactive2.component';


@NgModule({
  declarations: [
    AppComponent,
    Reactive1Component,
    Reactive2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
