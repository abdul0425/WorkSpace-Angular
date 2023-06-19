import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  //template: '<h2>Reactive Component</h2>',
  styleUrls: ['./reactive-forms.component.css'],
  // styles : [ 'h2{ color : red}']
})
export class ReactiveFormsComponent implements OnInit {
  isTrue: boolean = true;
  searchElement = 'Mobile';

  public employeeName: string = ' ';
  constructor() {}

  getEmployeeName(empName: any) {
    // console.log(empName.target.value)
    this.employeeName = empName.target.value;
  }

  ngOnInit(): void {}

  public reactiveForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', Validators.required),
    contact: new FormControl('', Validators.required),
  });

  getFormValue() {
    console.log(this.reactiveForm);
  }

  formSubmit() {
    console.log(this.reactiveForm);
  }
}
