import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  constructor() { }

  @Input() public src:any
  ngOnInit(): void {
  }


  submit(event :any)
  {
    console.log(event);
    alert("Button Clicked");
  }

  @Output() modalEvent = new EventEmitter();

  payBill(event : any)
  {
    console.log(event);
    let selectedData = event.target.value;
    this.modalEvent.emit(selectedData);
  }
}
