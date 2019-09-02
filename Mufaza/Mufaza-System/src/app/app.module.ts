import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SuppliersService } from './shared/suppliers.service';
import { environment } from "../environments/environment";
import { OrderTypesService } from "./shared/order-types.service";

import { ProductService } from './shared/product.service';
import { InternalUserComponent } from './internal-user/internal-user.component';
import { RegisterComponent } from './internal-user/register/register.component';
import { RegisterService } from './shared/register.service';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeesService } from './shared/employees.service';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliveryRiderListComponent } from './delivery/delivery-rider-list/delivery-rider-list.component';
import { DeliveryAllocateRiderComponent } from './delivery/delivery-allocate-rider/delivery-allocate-rider.component';
import { DeliveryReportComponent } from './delivery/delivery-report/delivery-report.component';
import { DeliveryAddRiderComponent } from './delivery/delivery-add-rider/delivery-add-rider.component';
import { DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DepartmentService } from './shared/department.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import {UserListComponent} from './internal-user/user-list/user-list.component';
import { DeliveryService } from './shared/delivery.service';
import { EmployeesalaryComponent } from './employeesalary/employeesalary.component';
import { SalaryComponent } from './employeesalary/salary/salary.component';
import { SuppliesComponent } from './suppliers/supplies/supplies.component';
import { PromoComponent } from './promo/promo.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    SupplierComponent,
    InternalUserComponent,
    RegisterComponent,
    SupplierListComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DeliveryComponent,
    DeliveryRiderListComponent,
    DeliveryAllocateRiderComponent,
    DeliveryReportComponent,
    DeliveryAddRiderComponent,
    MatConfirmDialogComponent,
    UserListComponent,
    EmployeesalaryComponent,
    PromoComponent,
    PromoListComponent,
    SalaryComponent, 

    SuppliesComponent,
    PromoComponent
   
 

  ],
imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],

  providers: [SuppliersService,OrderTypesService ,ProductService,EmployeesService, RegisterService,DatePipe, DeliveryService],

  bootstrap: [AppComponent],
  
    entryComponents:[SupplierComponent,InternalUserComponent,EmployeesalaryComponent,EmployeeComponent,RegisterComponent,DeliveryAddRiderComponent,DeliveryAllocateRiderComponent, MatConfirmDialogComponent]
})
export class AppModule { }
