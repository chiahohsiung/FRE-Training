import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './ListComponent/list/list.component';
import { LazyComponent } from './LazyModules/components/lazy/lazy.component';
import { QuoteComponent } from './QuoteComponent/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LazyComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
