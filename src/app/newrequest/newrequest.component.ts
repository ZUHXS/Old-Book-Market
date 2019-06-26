import { RequestService } from './../requests/request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { BookService } from '../book/book.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent implements OnInit {

  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private bookService: BookService,
    private notifications: NotificationsService,
    private requestService: RequestService,
  ) {
    this.form = fb.group({
      Title: ['', Validators.required],
      Content: ['', Validators.required],
    });
   }

  ngOnInit() {
  }

  OnSubmit() {
    if (!this.form.valid) {
      return;
    }
    this.requestService.AddBook(this.form.get('Title').value, this.form.get('Content').value)
      .subscribe(
        res => {
          this.notifications.success('新建求购请求成功');
          this.router.navigate(['/requests']);
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
      );
  }

}
