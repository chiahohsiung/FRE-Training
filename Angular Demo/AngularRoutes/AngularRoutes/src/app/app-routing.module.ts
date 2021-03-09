import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './ListComponents/list/list.component';
import { QuoteComponent } from './QuoteComponents/quote/quote.component';

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "quote", component: QuoteComponent },
  { path: "quote/:name", component: QuoteComponent },  
  { path: 'lazy', loadChildren: () => import(`./LazyModules/lazy-module.module`).then(m => m.LazyModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
