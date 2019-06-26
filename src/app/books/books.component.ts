import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { BookModule } from './../book/book.module';
import { BookService } from './../book/book.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public searchRes: BookModule[];
  form: FormGroup;
  constructor(
    private bookService: BookService,
    private notifications: NotificationsService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private routerInfo: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      bookname: ['', Validators.required],
    });
   }

  ngOnInit() {
    if (this.routerInfo.snapshot.params['name'] != null) {
      console.log("name is " + this.routerInfo.snapshot.params['name']);
      this.doparamsSearch(this.routerInfo.snapshot.params['name']);
    } else {
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

  doSearch() {
    const val = this.form.value;
    this.bookService.getSearchBooks(val.bookname).subscribe(
      res => {
        this.searchRes = res;
        console.log(res);
      }, err => {
        if (err.status === 401) {
          this.notifications.warn('未登录或登录已过期，请先登录');
          this.authService.logout();
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

  doparamsSearch(name: string) {
    this.bookService.getSearchBooks(name).subscribe(
      res => {
        this.searchRes = res;
        console.log(res);
      }, err => {
        if (err.status === 401) {
          this.notifications.warn('未登录或登录已过期，请先登录');
          this.authService.logout();
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
