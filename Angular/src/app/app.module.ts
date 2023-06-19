import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ImageComponent } from './image/image.component';

@NgModule({
    declarations : [AppComponent,BooksComponent,ImageComponent],
    imports : [BrowserModule],
    bootstrap : [AppComponent],
    // declarations: [
    //   BooksComponent
    // ]
})

export class AppModule{}