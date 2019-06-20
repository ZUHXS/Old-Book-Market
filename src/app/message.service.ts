import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    API_URL = 'http://localhost:4201';
    constructor(
        private http: HttpClient,
        private router: Router,
        private notificationsService: NotificationsService,
        private authService: AuthService
    ) { }

    get_message(JWT: string) {
        const headers = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
        };

        const data = { JWT };

        this.http.post(this.API_URL + '/message', data, headers).subscribe(
            (res: any) => {
            }, err => {
                this.notificationsService.warn('用户名或密码错误！');
            }
        );
      }
}
