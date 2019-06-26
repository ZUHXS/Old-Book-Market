import { BookService } from './book.service';
import { BookModule } from './book.module';
import { Component, OnInit, Input } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  @Input() BookInfo: BookModule;

  constructor(
    private bookService: BookService,
    private notifications: NotificationsService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    console.log(this.BookInfo);
  }
  BuyBook(bookid: string) {
    this.bookService.BuyBook(bookid).subscribe(
      res => {
        this.notifications.success('购买成功，请联系卖家发货');
        console.log(res);
      }, err => {
        if (err.status === 401) {
          this.notifications.warn('未登录或登录已过期，请先登录');
          this.authService.logout();
        } else if (err.status === 412) {
          this.notifications.warn('参数错误，请重试');
          this.router.navigate(['']);
        } else if (err.status === 404) {
          this.notifications.warn('未知错误');
          this.router.navigate(['']);
        } else {
          this.notifications.warn('未知错误，请联系管理员');
          this.router.navigate(['']);
        }
      }
    );
  }

}
