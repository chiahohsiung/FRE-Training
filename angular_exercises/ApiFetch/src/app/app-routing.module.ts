import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ApiComponent } from './components/api/api.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'api', component: ApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
