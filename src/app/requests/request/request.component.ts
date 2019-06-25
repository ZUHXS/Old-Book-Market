import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import {Input} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RequestModule } from './request.module';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Input() request: RequestModule;


  constructor() { }

  ngOnInit() {
  }

}
