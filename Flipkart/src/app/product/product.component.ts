import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private comm : CommonService
  ){}

  product : any
  data:any;
  getProduct() {
      this.comm.getProductDetails().subscribe(response=>{
    this.product=response;
        this.data=this.product.products;
  })
  }

  

  ngOnInit(): void {
   
    
  }

}
