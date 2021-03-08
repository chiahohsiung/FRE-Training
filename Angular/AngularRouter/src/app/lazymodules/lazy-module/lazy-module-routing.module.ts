import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from 'src/app/components/list/list.component';
import { QuoteComponent } from 'src/app/components/quote/quote.component';
import {LazyComponent} from '../components/lazy/lazy.component';

const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"quote", component:QuoteComponent},
  {path:"quote/:name", component:QuoteComponent},
  {path:"lazy", loadChildren:() => import('./lazy-module.module').then(m=>m.LazyModuleModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule { }
