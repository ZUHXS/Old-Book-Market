import { apiURL } from './../config/config.module';
import { HttpClient } from '@angular/common/http';
import { BookModule } from './book.module';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<BookModule[]> {
    return this.http.get<BookModule[]>(apiURL + 'getbook/all');
  }
}


