import { MsgService } from './../msg/msg.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PeopleModule } from './people/people.module';
import { Component, OnInit } from '@angular/core';
import { GetpeopleService } from './getpeople.service';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { MsgModule } from '../msg/msg/msg.module';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  id: string;
  people: PeopleModule;
  msg: MsgModule[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private getpeopleService: GetpeopleService,
    private notifications: NotificationsService,
    private authService: AuthService,
    private msgService: MsgService,
  ) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    this.getpeopleService.GetPeople(this.id).subscribe(
      res => {
        console.log('people result:', res);
        this.people = res;
        console.log(this.people);
    }, err => {
      if (err.status === 401) {
        this.notifications.warn('未登录或登录已过期，请先登录');
        this.authService.logout();
      } else if (err.status === 404) {
        this.notifications.warn('用户不存在，您是怎么过来的？');
        this.router.navigate(['']);
      } else {
        this.notifications.warn('未知错误，请联系管理员');
        this.router.navigate(['']);
      }
    });

    this.msgService.getMessage(this.id).subscribe(
      res => {
        console.log('message result: ', res);
        this.msg = res as any;
        console.log(this.msg);
      }, err => {
        this.notifications.warn('未登录或登录已过期，请先登录');
        this.authService.logout();
      }
    );
  }

}
