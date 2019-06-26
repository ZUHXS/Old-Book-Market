import { apiURL } from './../config/config.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdersModule } from './orders.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookModule } from '../book/book.module';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  SellergetInProcessOrders(): Observable<OrdersModule[]> {
    return this.http.get<OrdersModule[]>(apiURL + 'sellerinprocessorder');
  }
  SellergetProcessedOrders(): Observable<OrdersModule[]> {
    return this.http.get<OrdersModule[]>(apiURL + 'sellerprocessedorder');
  }

  CustomergetInProcessOrders(): Observable<OrdersModule[]> {
    return this.http.get<OrdersModule[]>(apiURL + 'customerinprocessorder');
  }
  CustomergetProcessedOrders(): Observable<OrdersModule[]> {
    return this.http.get<OrdersModule[]>(apiURL + 'customerprocessedorder');
  }

}
