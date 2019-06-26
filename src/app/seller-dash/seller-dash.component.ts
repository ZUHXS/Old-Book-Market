import { InfoService } from './../info.service';
import { BookService } from './../book/book.service';
import { BookModule } from './../book/book.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrdersModule } from '../orders/orders.module';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { OrderService } from '../orders/order.service';
import { InfoModule } from '../info/info.module';

@Component({
  selector: 'app-seller-dash',
  templateUrl: './seller-dash.component.html',
  styleUrls: ['./seller-dash.component.css']
})
export class SellerDashComponent implements OnInit {

  InProcessOrder: OrdersModule[];
  ProcessedOrder: OrdersModule[];
  InProcessBooks: BookModule[];
  SellerInfo: InfoModule;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private notifications: NotificationsService,
    private authService: AuthService,
    private orderService: OrderService,
    private bookService: BookService,
    private infoService: InfoService,
  ) { }

  ngOnInit() {
    this.infoService.getSellerInfo().subscribe(
      res => {
        this.SellerInfo = res;
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

    this.orderService.SellergetInProcessOrders().subscribe(
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
    this.orderService.SellergetProcessedOrders().subscribe(
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

    this.bookService.getUserBooks().subscribe(
      res => {
        this.InProcessBooks = res;
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
