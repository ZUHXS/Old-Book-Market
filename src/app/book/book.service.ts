import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../model/user.model';
import * as moment from 'moment';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
}
