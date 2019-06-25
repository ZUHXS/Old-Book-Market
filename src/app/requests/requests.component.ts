import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { RequestModule } from './request/request.module';
import { RequestService } from './request.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: RequestModule[];
  constructor(
    private requestService: RequestService,
    private notifications: NotificationsService,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.requestService.getRequests().subscribe(
      res => {
        console.log('reqeusts result: ', res);
        this.requests = res;
      }, err => {
        if (err.status === 401) {
          this.notifications.warn('未登录或登录已过期，请先登录');
          this.authService.logout();
        } else if (err.status === 404) {
          this.notifications.warn('未知错误，请联系管理员');
          this.router.navigate(['']);
        } else {
          this.notifications.warn('未知错误，请联系管理员');
          this.router.navigate(['']);
        }
      }
    );
  }

}
