import { BookModule } from './../book/book.module';
import { BookService } from './../book/book.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  searchRes: BookModule[];
  constructor(
    private bookService: BookService,
    private notifications: NotificationsService,
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      res => {
        console.log('books result:', res);
        this.searchRes = res;
    }, err => {
      this.notifications.error('拉取图书错误，请检查网络连接');
    });
  }

}
