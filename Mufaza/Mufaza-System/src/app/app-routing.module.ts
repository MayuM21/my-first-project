
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from "./suppliers/suppliers.component";

import {RegisterComponent} from "./internal-user/register/register.component";
import { DeliveryComponent } from './delivery/delivery.component';
import { EmployeesComponent } from './employees/employees.component';
import { InternalUserComponent} from './internal-user/internal-user.component'
import { EmployeesalaryComponent } from './employeesalary/employeesalary.component';

import { SuppliesComponent } from "./suppliers/supplies/supplies.component";
import { PromoComponent } from './promo/promo.component';


const routes: Routes = [
  {path: 'suppliers', component: SuppliersComponent},

  {path: 'delivery', component: DeliveryComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employeesalary', component: EmployeesalaryComponent},
  {path: 'internal-user', component: InternalUserComponent},
 
  {path: 'supplies', component: SuppliesComponent},
  {path: 'promo', component: PromoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
