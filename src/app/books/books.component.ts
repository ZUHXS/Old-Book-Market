import { AuthService } from './../auth.service';
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
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      res => {
        console.log('books result:', res);
        this.searchRes = res;
        console.log(this.searchRes);
    }, err => {
      this.notifications.warn('未登录或登录已过期，请先登录');
      this.authService.logout();
    });
  }

}
