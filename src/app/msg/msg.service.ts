import { apiURL } from './../config/config.module';
import { MsgModule } from './msg/msg.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(
    private http: HttpClient,
  ) { }

  getMessage(ToUserId: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };
    const data = {
      ToUserId,
    };
    return this.http.post(apiURL + 'message', data, headers);
  }

  sendMessage(ToUserId: string, Content: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };
    const data = {
      ToUserId,
      Content,
    };
    return this.http.post(apiURL + 'sendmessage', data, headers);
  }
}
