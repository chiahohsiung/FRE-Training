import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { RouteResolver } from './routeResolver/routeResolver';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: ':name', component: SearchComponent ,
  //resolve: {results: RouteResolver},
  //runGuardsAndResolvers: 'always' 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
