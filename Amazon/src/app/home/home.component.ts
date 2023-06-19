import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  public message : string = "Two way Binding";

  ngOnInit(): void {}

  public product = ['mobile', 'clothes', 'homeAppliances'];

  public productCategories = [
    {
      mobile: [
        {
          brandName: 'oppo',
          price: 7000,
          color: 'green',
        },
        {
          brandName: 'iphone',
          price: 140000,
          color: 'gray',
        },
      ],

      clothes: [
        {
          brandName: 'zara',
          price: 1000,
          color: 'black',
        },
        {
          brandName: 'fuka',
          price: 500,
          color: 'white',
        },
      ],

      homeAppliances: [
        {
          brandName: 'Cooker',
          price: 3000,
          color: 'steel',
        },
        {
          brandName: 'bed',
          price: 20000,
          color: 'gray',
        },
      ],
    },
  ];

  public data: any;
  // public productArray: any;
  getProductData(event: any) {
    if (event) {
      let anyProduct = event.target.value;
      console.log(anyProduct);
      let productArray: any = this.productCategories[0];
      console.log(productArray);
      // this.productArray = src[anyProduct];

      this.data = productArray[anyProduct];
    }
  }
}
