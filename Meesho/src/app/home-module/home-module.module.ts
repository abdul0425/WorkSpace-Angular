import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductFormComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModuleModule { }
