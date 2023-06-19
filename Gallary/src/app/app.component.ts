import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(){}

  /*public firstName : string="";
  public lastName : string="";
  public designation : string="";*/

  employeeName : string = "";
  employeeId : string = "";
  employeeSalary : string = "";
  employeeAddress : string = "";

  ngOnInit(){
    /*this.firstName = "Mehmed";
    this.lastName = "Arsalan";
    this.designation = "Software Developer"*/

    this.employeeName="Mehmed Arsalan"
    this.employeeId="101"
    this.employeeSalary="100k"
    this.employeeAddress="Barwadih"

  }

}
