import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './main/main-home/main-home.component';
import { TodoMainComponent } from './page-todo/todo-main/todo-main.component';

const routes: Routes = [
  { path: 'home', component: MainHomeComponent },
  { path: 'todo', component: TodoMainComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
