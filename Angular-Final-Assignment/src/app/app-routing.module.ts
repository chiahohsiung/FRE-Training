import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsListComponent } from './albums-list/albums-list.component';

const routes: Routes = [
  { path: 'albumlist', component: AlbumsListComponent },
  { path: '', redirectTo: '/albumlist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
