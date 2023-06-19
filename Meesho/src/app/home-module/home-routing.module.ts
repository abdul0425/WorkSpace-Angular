import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

const route: Routes = [
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product-form',
    component: ProductFormComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
