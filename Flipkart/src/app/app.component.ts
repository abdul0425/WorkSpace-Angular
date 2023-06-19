import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flipkart';

  isValid = false
  mobile = 'vivo'
  public subjectName = "Rascal"
  onChange(){
    alert(this.subjectName)
  }

  element=["apple","xiaomi","samsung","oppo","vivo","pocco"];

  
}
