import { BooksComponent } from './../books/books.component';
import { BookService } from './../book/book.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {

  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private bookService: BookService,
    private notifications: NotificationsService,
  ) {
    this.form = fb.group({
      BookName: ['', Validators.required],
      ISBN: ['', Validators.required],
      ExPrice: ['', Validators.required],
      Price: ['', Validators.required],
      ImageURL: ['', Validators.required],
      Description: ['', Validators.required],
    });
   }

  OnSubmit() {
    if (!this.form.valid) {
      return;
    }
    console.log('send messge' + this.form.get('BookName').value);
    this.bookService.AddBook(this.form.get('BookName').value,
      this.form.get('ExPrice').value, this.form.get('Price').value,
      this.form.get('ISBN').value, this.form.get('ImageURL').value,
      this.form.get('Description').value).subscribe(
        res => {
          this.notifications.success('新建图书成功');
          this.router.navigate(['/books']);
        }, err => {
          if (err.status === 401) {
            this.notifications.warn('未登录或登录已过期，请先登录');
            this.authService.logout();
          } else if (err.status === 412) {
            this.notifications.warn('输入不合法，请重新尝试');
            this.router.navigate(['']);
          } else {
            this.notifications.warn('未知错误，请联系管理员');
            this.router.navigate(['']);
          }
        }
      )
  }

  ngOnInit() {
  }

}
