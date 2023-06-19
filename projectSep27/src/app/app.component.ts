import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectSep27';
  BrandData=[{
    name:"Tata",
    type:"Car"
  },
  
  {
    name:"Apple",
    type:"Mobile"
  },
  {
    name:"Buggati",
    type:"Buggati Chiron"
  }]
}
