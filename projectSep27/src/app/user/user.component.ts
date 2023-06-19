import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private test : CommonService
  ) { }

  ngOnInit(): void {
  }

  userList : any;
  getUsers(){
    this.test.getUserData().subscribe(res=>{
      let temp : any = res;
      this.userList=temp.data;
    }

      
    )
  }

}
