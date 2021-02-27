import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildrenComponent } from './components/children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
