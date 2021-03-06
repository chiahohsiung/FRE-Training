import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TemplatedFormComponent } from './Forms/templated-form/templated-form.component';
import { TemplatedFormValidationComponent } from './Forms/templated-form-validation/templated-form-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatedFormComponent,
    TemplatedFormValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
