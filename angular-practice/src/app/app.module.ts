import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { UsersComponent } from './feeds/users/users.component';
import { ContainerComponent } from './feeds/container/container.component';
import { LikeComponent } from './feeds/like/like.component';
import { CommentComponent } from './feeds/comment/comment.component';
import { ShareComponent } from './feeds/share/share.component';
import { ContentComponent } from './feeds/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PersonListComponent,
    FavoriteComponent,
    UsersComponent,
    ContainerComponent,
    LikeComponent,
    CommentComponent,
    ShareComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
