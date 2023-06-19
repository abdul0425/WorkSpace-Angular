import { EmployeeComponent } from './employee/employee.component';
import { CSKComponent } from './csk/csk.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RCBComponent } from './rcb/rcb.component';
import { UserComponent } from './user/user.component';

  

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'rcb',
    component: RCBComponent,
  },
  {
    path: 'csk',
    component: CSKComponent,
  },
  {
    path : 'first',
    loadChildren : ()=> import('./first/first.module')
    .then(m=>m.FirstModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
