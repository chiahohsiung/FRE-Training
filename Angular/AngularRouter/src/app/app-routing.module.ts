import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { QuoteComponent } from './components/quote/quote.component';
import { LazyComponent } from './lazymodules/components/lazy/lazy.component';

const routes: Routes = [
  {path:"list", component:ListComponent},
  {path:"lazy", component:LazyComponent},
  {path:"quote", component:QuoteComponent},
  {path:"quote/:name", component:QuoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
