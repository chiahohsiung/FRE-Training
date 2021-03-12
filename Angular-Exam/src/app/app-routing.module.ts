
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from './albums-list/albums-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/albumlist', pathMatch: 'full' },
  { path: 'albumlist', component: AlbumsListComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }