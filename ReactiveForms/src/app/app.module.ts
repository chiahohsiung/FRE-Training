import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormBuilderComponent } from './components/reactive-form-builder/reactive-form-builder.component';
import { ReactiveFormArrayComponent } from './components/reactive-form-array/reactive-form-array.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    ReactiveFormBuilderComponent,
    ReactiveFormArrayComponent,
    CustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
