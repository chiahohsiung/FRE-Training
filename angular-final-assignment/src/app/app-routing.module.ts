import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchResultsComponent} from "./component/search-results/search-results.component"
import {HomeComponent} from "./component/home/home.component";
const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"search/:searchWord",component:SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
