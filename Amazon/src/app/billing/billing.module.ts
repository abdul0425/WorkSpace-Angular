import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingListComponent } from './billing-list/billing-list.component';
import { BillingFormComponent } from './billing-form/billing-form.component';



@NgModule({
  declarations: [
    BillingListComponent,
    BillingFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BillingModule { }
