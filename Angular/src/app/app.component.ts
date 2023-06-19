import {Component} from '@angular/core';

@Component({
    selector : 'app-root',
    templateUrl : 'app.component.html',
    styleUrls : ['app.component.css']
})

 
export class AppComponent{
    public name : String = 'Arshad';
    public love : string="Arshad Loves Noorii"
    public message='';
    public ipl='';
    public jvbook='';
}