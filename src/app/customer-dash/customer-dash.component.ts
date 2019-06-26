import { OrderService } from './../orders/order.service';
import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { RequestService } from '../requests/request.service';
import { OrdersModule } from '../orders/orders.module';
import { RequestModule } from '../requests/request/request.module';
import { InfoModule } from '../info/info.module';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-customer-dash',
  templateUrl: './customer-dash.component.html',
  styleUrls: ['./customer-dash.component.css']
})
export class CustomerDashComponent implements OnInit {

  UserRequests: RequestModule[];
  InProcessOrder: OrdersModule[];
  ProcessedOrder: OrdersModule[];
  CustomerInfo: InfoModule;
  constructor(
    private router: Router,
    private http: HttpClient,
    private notifications: NotificationsService,
    private authService: AuthService,
    private requestService: RequestService,
    private orderService: OrderService,
    private infoService: InfoService,
  ) { }

  ngOnInit() {
    this.infoService.getCustomerInfo().subscribe(
      res => {
        this.CustomerInfo = res;
        console.log('info: ' + res);
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
    this.requestService.getUserRequests().subscribe(
      res => {
        this.UserRequests = res;
        console.log(res);
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
    this.orderService.CustomergetInProcessOrders().subscribe(
      res => {
        this.InProcessOrder = res;
        console.log(res);
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
    this.orderService.CustomergetProcessedOrders().subscribe(
      res => {
        this.ProcessedOrder = res;
        console.log(res);
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

}
