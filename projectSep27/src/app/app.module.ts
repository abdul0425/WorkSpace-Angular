import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { BrandComponent } from './brand/brand.component';
import { CSKComponent } from './csk/csk.component';
import { RCBComponent } from './rcb/rcb.component';
import { UserComponent } from './user/user.component';
import { SportsComponent } from './sports/sports.component';
import { EmployeeComponent } from './employee/employee.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    BrandComponent,
    CSKComponent,
    RCBComponent,
    UserComponent,
    UserComponent,
    SportsComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
