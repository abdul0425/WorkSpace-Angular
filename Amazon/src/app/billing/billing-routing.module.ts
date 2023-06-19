import { BillingListComponent} from './billing-list/billing-list.component'
import { Component } from '@angular/core';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const route : Routes=[
  {
    path : 'billing-form',
    component : BillingFormComponent
  },
  {
    path : 'billing-list',
    component : BillingListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ],
  exports : [RouterModule]
})
export class BillingRoutingModule { }
