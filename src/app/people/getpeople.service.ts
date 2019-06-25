import { OrdersModule } from './../orders/orders.module';
import { PeopleModule } from './people/people.module';
import { PeopleComponent } from './people.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './../config/config.module';

@Injectable({
  providedIn: 'root'
})
export class GetpeopleService {

  constructor(
    private http: HttpClient,
  ) { }
  GetPeople(id: string): Observable<PeopleModule> {
    return this.http.get<PeopleModule>(apiURL + 'people/' + id);
  }
}
