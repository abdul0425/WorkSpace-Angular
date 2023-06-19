import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { FistRoutingModule } from './fist-routing.module';



@NgModule({
  declarations: [
    LaptopComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    FistRoutingModule
  ]
})
export class FirstModule { }
