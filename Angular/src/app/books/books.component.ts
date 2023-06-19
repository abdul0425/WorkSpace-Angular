import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  
  java = 'Raveesh Kumar';
  python = "Harshad Vali";
  angular = 'Arun Manjunath';
  javaScript = 'Kishore Reddy';
  javasrc = 'https://m.media-amazon.com/images/I/819TQgUGNsL.jpg';
  pythonsrc = 'https://media.geeksforgeeks.org/wp-content/uploads/20190709181948/Python-Crash-Course.jpg';
  angularsrc = 'https://m.media-amazon.com/images/I/41Y0hnvzrYL.jpg';
  jssrc = 'https://m.media-amazon.com/images/I/81kqrwS1nNL.jpg';

  @Input() public rascal :any;
  @Input() public husband : any;

  @Output() public childEvent = new EventEmitter();
  @Output() public iplEvent = new EventEmitter();
  @Output() public javaBook =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  event(){
    this.iplEvent.emit('Ipl Match Started');
  }

  fireEvent(){
    this.childEvent.emit('Child component Data');
  }
  javaEvent(){
    this.javaBook.emit('This Java Book');
  }
}
