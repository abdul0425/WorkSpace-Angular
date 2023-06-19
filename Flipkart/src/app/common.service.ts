import { Injectable, NgModule } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(
     private http : HttpClient
  ) { }

  getProductDetails(){
    return this.http.get('https://dummyjson.com/products')
  }
}
