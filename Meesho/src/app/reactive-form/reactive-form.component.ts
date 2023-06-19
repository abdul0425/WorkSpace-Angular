import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public reactiveForm =new FormGroup(
    {
      email:new FormControl(['',Validators.required,Validators.email]),
      password : new FormControl(['',Validators.required])
    }
  )
  
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(){
    console.log(this.reactiveForm);
  }


  }




