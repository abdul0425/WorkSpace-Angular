import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // created http client to use in method.
  constructor(private http : HttpClient) { }

  message = " CSK vs RCB Zindabad. "

  getMessage(){
    return this.message
  }

  getEmployeeData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
    
  }

  getUserData(){
    return this.http.get("https://reqres.in/api/users?page=2");
  }

 
}
