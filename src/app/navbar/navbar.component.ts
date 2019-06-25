import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  form: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private bookService: BookService,
  ) {
    this.form = this.fb.group({
      bookname: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  doSearch() {
    const val = this.form.value;
    this.router.navigate(['/books', val.bookname]);
  }

}
