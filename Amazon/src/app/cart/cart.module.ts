import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartFormComponent } from './cart-form/cart-form.component';



@NgModule({
  declarations: [
    CartListComponent,
    CartFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CartModule { }
