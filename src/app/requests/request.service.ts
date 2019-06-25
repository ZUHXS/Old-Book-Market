import { HttpClient } from '@angular/common/http';
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

  getRequests() : Observable<RequestModule[]> {
    return this.http.get<RequestModule[]>(apiURL + 'requests');
  }
}
