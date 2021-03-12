import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumListComponent} from '../app/components/album-list/album-list.component'

const routes: Routes = [
  { path: '', component: AlbumListComponent },
  { path: 'albums', component: AlbumListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
