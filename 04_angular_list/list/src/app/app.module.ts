import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadListComponent } from './page-todo/load-list/load-list.component';
import { FormsModule } from '@angular/forms';
import { TodoMainComponent } from './page-todo/todo-main/todo-main.component';
import { MainHomeComponent } from './main/main-home/main-home.component';
import { MainNavComponent } from './main/main-nav/main-nav.component';

@NgModule({
  declarations: [AppComponent, LoadListComponent, TodoMainComponent, MainHomeComponent, MainNavComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
