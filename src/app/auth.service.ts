import { BookModule } from './book/book.module';
import { Injectable } from '@angular/core';
// import { RequestOptions, Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class AuthService {
    API_URL = 'http://localhost:4201';
    TOKEN_KEY = 'token';

    constructor(
      private http: HttpClient,
      private router: Router,
      private notificationsService: NotificationsService) { }
    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigateByUrl('/');
    }

    isLogin() {
        return localStorage.getItem(this.TOKEN_KEY) ? true : false;
    }

    login(email: string, pass: string) {
      const headers = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
      };

      const data = {
          email,
          password: pass
      };

      this.http.post(this.API_URL + '/login', data, headers).subscribe(
          (res: any) => {
              localStorage.setItem(this.TOKEN_KEY, res.token);
              this.notificationsService.success('登陆成功');
              this.router.navigateByUrl('/');
          }, err => {
              this.notificationsService.warn('用户名或密码错误！');
          }
      );
    }

    register(email: string, password: string, nickname: string) {
        const headers = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
        };
        const data = {
            email,
            password,
            nickname
        };

        this.http.post(this.API_URL + '/signup', data, headers).subscribe(
            (res: any) => {
                localStorage.setItem(this.TOKEN_KEY, res.token);
                this.notificationsService.success('注册成功，跳转登录主页');
                this.router.navigateByUrl('/');
            }, err => {
                this.notificationsService.warn('该邮箱已被注册，请重试');
            }
        );
    }
}
