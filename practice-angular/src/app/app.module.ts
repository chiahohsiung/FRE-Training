import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateformsComponent } from './practiceforms/templateforms/templateforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './practiceforms/reactiveforms/reactiveforms.component';
import { ReactiveformbuilderComponent } from './practiceforms/reactiveforms/reactiveformbuilder/reactiveformbuilder.component';
import { ReactiveformarrayComponent } from './practiceforms/reactiveforms/reactiveformarray/reactiveformarray.component';
import { PipesComponent } from './practicePipes/pipes/pipes.component';
import { StrongtextPipe } from './practicePipes/strongtext.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformsComponent,
    ReactiveformsComponent,
    ReactiveformbuilderComponent,
    ReactiveformarrayComponent,
    PipesComponent,
    StrongtextPipe
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
