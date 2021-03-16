
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  { path: '', redirectTo: '/results', pathMatch: 'full' },
  { path: 'results', component: AlbumsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }