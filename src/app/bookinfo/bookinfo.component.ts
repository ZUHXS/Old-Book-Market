import { AuthService } from './../auth.service';
import { NotificationsService } from 'angular2-notifications';
import { BookModule } from './../book/book.module';
import { BookService } from './../book/book.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthInterceptorService } from '../auth-interceptor.service';

@Component({
  selector: 'app-bookinfo',
  templateUrl: './bookinfo.component.html',
  styleUrls: ['./bookinfo.component.css']
})
export class BookinfoComponent implements OnInit {

  id: string;
  BookInfo: BookModule;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private notifications: NotificationsService,
    private authService: AuthService,
    private bookService: BookService,
  ) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    this.bookService.getBook(this.id).subscribe(
      res => {
        this.BookInfo = res;
        console.log(this.BookInfo);
      }, err => {
        if (err.status === 401) {
          this.notifications.warn('未登录或登录已过期，请先登录');
          this.authService.logout();
        } else if (err.status === 404) {
          this.notifications.warn('服务器故障，请稍后再试');
          this.router.navigate(['']);
        } else {
          this.notifications.warn('未知错误，请联系管理员');
          this.router.navigate(['']);
        }
      }
    );
  }

  goBack() {
    history.go(-1);
  }

}
