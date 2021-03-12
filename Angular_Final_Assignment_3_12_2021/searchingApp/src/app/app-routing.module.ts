import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingPageComponent } from './listing-page/listing-page.component';
ListingPageComponent
const routes: Routes = [
  { path: '', component: ListingPageComponent },
  { path: ':id', component: ListingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
