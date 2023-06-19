import { AnimateTimings } from '@angular/animations';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  public rowdata :any;
  constructor(
    private temp : CommonService
  ) { }

  ngOnInit(): void {
  }

  getEmployeeData : any
  getEmployee(){
    this.temp.getEmployeeData().subscribe((resp)=>{
      this.getEmployeeData=resp;
    })
  }

  columnDefs: ColDef[] = [
    { field: 'Name' },
    { field: 'UserName' },
    { field: 'Email' }
];

}
