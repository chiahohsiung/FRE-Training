import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ShowFormComponent } from './components/show-form/show-form.component';
import { CustompipePipe } from './pipe/custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowFormComponent,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
