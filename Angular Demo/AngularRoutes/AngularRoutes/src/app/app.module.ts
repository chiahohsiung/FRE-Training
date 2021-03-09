import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyComponent } from './LazyModules/components/lazy/lazy.component';
import { ListComponent } from './ListComponents/list/list.component';
import { QuoteComponent } from './QuoteComponents/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    LazyComponent,
    ListComponent,
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
