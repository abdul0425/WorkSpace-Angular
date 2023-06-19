import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartFormComponent } from './cart-form/cart-form.component';
import { CartListComponent } from './cart-list/cart-list.component';

const route : Routes =[
  {
    path : 'cart-form',
    component : CartFormComponent
  },
  {
    path : 'cart-list',
    component : CartListComponent
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
export class CartRoutingModule { }
