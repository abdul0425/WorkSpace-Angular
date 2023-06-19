import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  public biryani = "https://i.ytimg.com/vi/BCKMeHuRX0I/maxresdefault.jpg"; alt="Biryani Image."

  constructor() { }

  ngOnInit(): void {
  }

}
