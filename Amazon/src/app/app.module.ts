import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './common.service';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { OppoComponent } from './oppo/oppo.component';
import { CustomPipe } from './custom.pipe';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    TableComponent,
    ImageComponent,
    FormComponent,
    OppoComponent,
    CustomPipe,
    HomeComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
