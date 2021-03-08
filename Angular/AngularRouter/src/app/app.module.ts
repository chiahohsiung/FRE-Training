import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { QuoteComponent } from './components/quote/quote.component';
import { LazyComponent } from './lazymodules/components/lazy/lazy.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    QuoteComponent,
    LazyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
