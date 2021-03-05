import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangeTextDirective } from './CustomDirective/change-text.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SqrtPipe } from './pipes/sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective,
    CapitalizePipe,
    SqrtPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
