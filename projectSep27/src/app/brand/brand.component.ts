import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
@Input() public data : any
  constructor() { }
  ModelData=[{
    modelName:"Nexon",
    brand:"Tata",
    price:"10 lacs"
  },

  {
    modelName:"Iphone",
    brand:"Apple",
    price:"80k"
  },
  {
    modelName:"Buggati Chiron",
    brand:"Buggati",
    price:"85lacs"
  }]

  receiveData(data : any)
  {
    alert("Data received inside Brand : selected data "+ data);
  }
  ngOnInit(): void {
  }

}
