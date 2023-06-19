import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazon';

  subjectName = "Angular FrameWork"
  date = new Date()

  employee = ['Arshad','Rivu','Akhil','Sashti','Kishan','Rishu']

}
