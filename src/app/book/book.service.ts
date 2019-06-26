import { apiURL } from './../config/config.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getBook(id: string): Observable<BookModule> {
    return this.http.get<BookModule>(apiURL + 'getbook/' + id);
  }

  getBooks(): Observable<BookModule[]> {
    return this.http.get<BookModule[]>(apiURL + 'getbook/all');
  }

  getUserBooks(): Observable<BookModule[]> {
    return this.http.get<BookModule[]>(apiURL + 'sellerinprocessbooks');
  }

  getSearchBooks(BookName: string): Observable<BookModule[]> {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };
    const data = {
      BookName
    };
    return this.http.post<BookModule[]>(apiURL + 'searchboook', data, headers);
  }

  AddBook(BookName: string, ExPrice: string, Price: string,
          ISBN: string, ImageURL: string, Description: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };
    const data = {
      BookName,
      ExPrice,
      Price,
      ISBN,
      ImageURL,
      Description,
    };
    return this.http.post(apiURL + 'addbook', data, headers);
  }

  BuyBook(BookId: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };
    const data = {
      BookId,
    };
    return this.http.post(apiURL + 'buybook', data, headers);
  }
}


