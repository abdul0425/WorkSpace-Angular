import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-rcb',
  templateUrl: './rcb.component.html',
  styleUrls: ['./rcb.component.css']
})
export class RCBComponent implements OnInit {

  temp: string = "";
  constructor(
    public _commonService :CommonService
  ) { }
  
  ngOnInit(): void {
    this.temp = this._commonService.getMessage();
  }

}
