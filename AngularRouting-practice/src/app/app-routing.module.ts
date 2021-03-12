import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './Components/department/department.component';
import { EmployeesComponent } from './Components/employees/employees.component';

const routes: Routes = [
  {path:"department",component:DepartmentComponent},
  {path:"employees",component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [DepartmentComponent,EmployeesComponent]
