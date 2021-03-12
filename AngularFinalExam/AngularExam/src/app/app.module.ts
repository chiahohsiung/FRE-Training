import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AlbumCardListComponent } from './album-card-list/album-card-list.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StorageServiceModule } from 'ngx-webstorage-service';

const appRoutes: Routes = [
  {
    path: '', component: AppComponent
  }, {
    path: ':name', component: AppComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AlbumCardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
