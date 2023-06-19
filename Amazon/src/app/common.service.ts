import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http : HttpClient) { }

  getProductData(){
    return this.http.get("https://dummyjson.com/products")
  }
}
