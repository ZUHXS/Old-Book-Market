import { BookModule } from './book.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  @Input() BookInfo: BookModule;

  constructor() { }

  ngOnInit() {
    console.log(this.BookInfo);
  }

}
