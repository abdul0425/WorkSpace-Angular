import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private com : CommonService
  ) { }

    
    
    x : any
    y : any
    getProducts(){
      this.com.getProductData().subscribe(response=>{
        this.x=response;
        this.y = this.x.products;
      })
    }


  ngOnInit(): void {
  }

}
