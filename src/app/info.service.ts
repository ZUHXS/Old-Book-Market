import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoModule } from './info/info.module';
import { Observable } from 'rxjs';
import { apiURL } from './config/config.module';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private http: HttpClient
  ) { }

  getSellerInfo(): Observable<InfoModule> {
    return this.http.get<InfoModule>(apiURL + 'sellerinfo');
  }
  getCustomerInfo(): Observable<InfoModule> {
    return this.http.get<InfoModule>(apiURL + 'customerinfo');
  }
}
