import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiURL } from '../config/config.module';
import { RequestModule } from './request/request.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
  ) { }

  getRequests(): Observable<RequestModule[]> {
    return this.http.get<RequestModule[]>(apiURL + 'requests');
  }

  getUserRequests(): Observable<RequestModule[]> {
    return this.http.get<RequestModule[]>(apiURL + 'customerrequests');
  }

  AddBook(Title: string, Content: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };
    const data = {
      Title,
      Content,
    };
    return this.http.post(apiURL + 'addrequest', data, headers);
  }
}
