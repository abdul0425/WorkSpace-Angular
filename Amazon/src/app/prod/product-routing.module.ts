import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const route :Routes=[
  {
    path : 'produst-form',
    component : ProductFormComponent
  },
  {
    path : 'product-list',
    component : ProductListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductRoutingModule { }
