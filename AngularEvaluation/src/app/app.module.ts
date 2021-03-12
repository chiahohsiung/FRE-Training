import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumOverviewComponent } from './album-overview/album-overview.component';
import {ItunesService} from './shared/service/itunes.service';
import {FormsModule} from '@angular/forms';
import { PaginationPipe } from './shared/pipes/pagination.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultComponent,
    AlbumOverviewComponent,
    PaginationPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
