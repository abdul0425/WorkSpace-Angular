import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  register = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    contact: new FormControl(),
    country: new FormControl(),
  });
  ngOnInit(): void {}
}
