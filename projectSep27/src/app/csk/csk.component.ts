import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-csk',
  templateUrl: './csk.component.html',
  styleUrls: ['./csk.component.css']
})
export class CSKComponent implements OnInit {

  temp1 : String = "";
  constructor(
    public test : CommonService
  ) { }
  
  ngOnInit(): void {
    this.temp1=this.test.getMessage();
  }

}
